require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { rembg } = require('@remove-background-ai/rembg.js');

// Validate required environment variables
if (!process.env.REMBG_API_KEY) {
  console.error('Error: REMBG_API_KEY environment variable is required');
  console.error('Please create a .env file with your RemBG API key');
  console.error('See .env.sample for reference');
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3000;

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'profile-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Serve static files
app.use(express.static('.'));
app.use('/uploads', express.static('uploads'));

// API endpoint to serve CV data
app.get('/api/cv-data', (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'data.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    res.json(data);
  } catch (error) {
    console.error('Error reading CV data:', error);
    res.status(500).json({ error: 'Failed to load CV data' });
  }
});

// Serve the main CV page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint for image upload and background removal
app.post('/api/upload-profile-image', upload.single('profileImage'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const inputPath = req.file.path;
    const outputPath = inputPath.replace(path.extname(inputPath), '-nobg.png');
    
    console.log('Processing image:', inputPath);
    
    // Read the uploaded image
    const inputBuffer = fs.readFileSync(inputPath);
    
    // Remove background using RemBG
    const result = await rembg({
      apiKey: process.env.REMBG_API_KEY,
      inputImage: inputBuffer,
      options: {
        returnBase64: false
      }
    });
    
    // Read the processed image
    const outputBuffer = fs.readFileSync(result.outputImagePath);
    
    // Clean up the temporary file
    result.cleanup();
    
    // Save the processed image
    fs.writeFileSync(outputPath, outputBuffer);
    
    // Clean up the original uploaded file
    fs.unlinkSync(inputPath);
    
    // Return the processed image URL
    const imageUrl = `/uploads/${path.basename(outputPath)}`;
    
    res.json({ 
      success: true, 
      imageUrl: imageUrl,
      message: 'Background removed successfully' 
    });
    
  } catch (error) {
    console.error('Error processing image:', error);
    
    // Clean up files on error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(500).json({ 
      error: 'Failed to process image', 
      details: error.message 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`CV Server running on http://localhost:${PORT}`);
  console.log(`CV data available at http://localhost:${PORT}/api/cv-data`);
});
