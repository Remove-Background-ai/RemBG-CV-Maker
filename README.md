# RemBG CV Maker

A modern, JSON-driven CV generator that loads content dynamically from a structured JSON file. The layout remains exactly the same as the original, but all content is now managed through data files.

## Features

- **Dynamic Content Loading**: All CV content is loaded from `data.json`
- **Same Layout**: Preserves the exact same visual design and layout
- **Easy Updates**: Simply edit the JSON file to update CV content
- **Server-Side Rendering**: Express.js server serves the CV with API endpoints
- **Print-Friendly**: Maintains all print styles and PDF generation capabilities

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
npm start
```

### 3. View Your CV
Open your browser and go to: `http://localhost:3000`

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start development server with live reload
- `npm run server` - Alternative way to start the server

## Project Structure

```
cv/
├── data.json          # CV content data
├── server.js          # Express.js server
├── index.html         # Main CV page with dynamic loading
├── styles.css         # CSS styles (unchanged)
├── package.json       # Dependencies and scripts
└── README.md          # This file
```

## API Endpoints

- `GET /` - Main CV page
- `GET /api/cv-data` - JSON data for the CV
- `GET /health` - Health check endpoint

## Updating CV Content

To update your CV, simply edit the `data.json` file. The structure includes:

### Personal Information
```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Title",
    "location": "Your Location",
    "phone": "Your Phone",
    "email": "Your Email",
    "email2": "Secondary Email",
    "links": {
      "stackoverflow": "https://...",
      "github": "https://...",
      "linkedin": "https://..."
    }
  }
}
```

### Work Experience
```json
{
  "workExperience": [
    {
      "period": "2021 - 2025",
      "title": "Job Title",
      "company": "Company Name",
      "companyUrl": "https://company.com",
      "companyDisplayUrl": "company.com",
      "achievements": ["Achievement 1", "Achievement 2"],
      "technologies": "Tech stack used"
    }
  ]
}
```

### Education
```json
{
  "education": [
    {
      "period": "2009 – 2015",
      "degree": "Degree Name",
      "school": "School Name",
      "description": "Additional details"
    }
  ]
}
```

### Skills
```json
{
  "skills": {
    "technologies": "List of technologies",
    "blockchain": "Blockchain skills",
    "designPatterns": "Design patterns"
  }
}
```

### Public Projects
```json
{
  "publicProjects": [
    {
      "year": "2024",
      "title": "RemBG - AI Background Removal",
      "url": "https://www.rembg.com",
      "displayUrl": "www.rembg.com",
      "description": "AI-powered background removal API with state-of-the-art computer vision",
      "links": [
        {
          "text": "GitHub Repository",
          "url": "https://github.com/Remove-Background-ai/rembg.js"
        }
      ]
    }
  ]
}
```

### Languages
```json
{
  "languages": [
    {
      "name": "ENGLISH",
      "oral": "Good",
      "written": "Very good"
    }
  ]
}
```

## Development

The CV uses vanilla JavaScript to load and render content dynamically. The `CVLoader` class handles:

- Fetching data from the API
- Rendering all CV sections
- Error handling
- Dynamic content updates

## Production Deployment

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. The server runs on port 3000 by default
4. Set the `PORT` environment variable to change the port

## Benefits

- **Maintainable**: Easy to update content without touching HTML
- **Scalable**: Can easily add new sections or modify existing ones
- **Version Control**: JSON data can be tracked in git
- **API Ready**: Can be extended to support multiple CVs or user management
- **Print Ready**: Maintains all original print styles for PDF generation

## Original Features Preserved

- All CSS styles and layout
- Print-friendly design
- Responsive layout
- Professional appearance
- All links and formatting

## 📸 Demo

![RemBG CV Maker Demo](assets/cv-demo.png)

*Professional CV generated with RemBG CV Maker*

## 🖨️ Printing Instructions

For the best print quality and perfect single-page fitting:

### Chrome Print Settings:
1. **Open your CV** in Chrome browser
2. **Press Ctrl+P** (or Cmd+P on Mac)
3. **Set these print options:**
   - **Destination**: Save as PDF or Print
   - **Layout**: Portrait
   - **Paper size**: A4 (or Letter)
   - **Scale**: **0.94** (This is crucial for perfect fitting!)
   - **Margins**: Default
   - **Options**: Check "Background graphics" for colors

### Why Adjust Scale?
Different layouts may require different scale adjustments to fit perfectly on a single A4 page. Common scale values:
- ✅ **0.94 scale** - Professional Classic layout (default)
- ✅ **0.90-0.95 scale** - Most other layouts
- ✅ **Test your layout** - Each layout may need different scaling
- ✅ **Adjust as needed** - Find the perfect scale for your layout

### Alternative Browsers (adjust scale as needed):
- **Firefox**: Try 0.90-0.95 scale
- **Safari**: Try 0.85-0.93 scale
- **Edge**: Try 0.90-0.95 scale

## 🎨 Contributing New Layouts

We're looking for contributors to create additional CV layouts! Help us build a comprehensive collection of professional CV templates.

### Layout Ideas We Need:
- **Modern Minimalist** - Clean, white space focused
- **Creative Designer** - Colorful, visual-heavy for designers
- **Academic** - Research-focused with publications
- **Executive** - Corporate, leadership-focused
- **Technical** - Code-heavy, developer-focused
- **Creative Portfolio** - Image-rich, creative fields
- **Traditional** - Classic, conservative style
- **Two-Column** - Sidebar layout with skills/contact
- **Timeline** - Chronological, story-driven
- **Infographic** - Visual, data-driven approach

### How to Contribute a Layout:

1. **Fork the repository**
2. **Create a new layout file**: `layouts/your-layout-name.html`
3. **Create matching CSS**: `styles/your-layout-name.css`
4. **Update the data structure** if needed: `data/your-layout-name.json`
5. **Add layout selector** to the main page
6. **Test print compatibility** with 0.94 scale
7. **Submit a Pull Request**

### Layout Requirements:
- ✅ **Print-optimized** (tested with 0.94 scale)
- 
- ✅ **Professional appearance**
- ✅ **Easy to customize** via JSON
- ✅ **Accessible** (good contrast, readable fonts)
- ✅ **Cross-browser compatible**

### Example Layout Structure:
```
layouts/
├── modern-minimalist.html
├── creative-designer.html
├── academic.html
└── executive.html

styles/
├── modern-minimalist.css
├── creative-designer.css
├── academic.css
└── executive.css
```

### Getting Started:
1. **Copy the existing layout** as a starting point
2. **Modify the HTML structure** for your design
3. **Create custom CSS** with your styling
4. **Test thoroughly** across different browsers
5. **Document your layout** in the README

**Ready to contribute?** Check out our [Contributing Guidelines](CONTRIBUTING.md) and start building!


## 🎯 Current Layout: Professional Classic

The default layout features:
- **Clean, professional design** with excellent readability
- **Two-column layout** (experience left, education/skills right)
- **Print-optimized** for single-page A4 printing
- **Responsive design** that works on all devices
- **Professional typography** using Google Fonts
- **Consistent spacing** and visual hierarchy

### Layout Features:
- ✅ **Header section** with contact information
- ✅ **Professional summary** section
- ✅ **Work experience** with achievements and technologies
- ✅ **Education** with degrees and institutions
- ✅ **Skills** categorized by technology type
- ✅ **Public projects** with links and descriptions
- ✅ **Languages** with proficiency levels
- ✅ **Print-friendly** footer with branding


## 📁 Project Structure

```
rembg-cv-maker/
├── data.json              # CV content data
├── server.js              # Express.js server
├── index.html             # Main CV page
├── styles.css             # Professional CSS
├── layouts/               # Additional layouts
└── assets/                # Demo images
```

## 🎨 Layout Gallery

| Layout | Description | Best For |
|--------|-------------|----------|
| **Professional Classic** (Default) | Clean, traditional design | General professionals |
| **Modern Minimalist** | Lots of white space, clean lines | Designers, creatives |
| **Creative Designer** | Colorful, visual-heavy | Designers, artists |
| **Academic Research** | Publications, citations | Researchers, academics |
| **Executive Corporate** | Traditional, conservative | Business executives |
| **Technical Developer** | Code-focused, projects | Software developers |

*More layouts coming soon! [Contribute a new layout](CONTRIBUTING.md)*

## 🎯 Quick Start for Contributors

Want to add a new layout? Here's how:

1. **Fork the repository**
2. **Create your layout files:**
   ```bash
   # Create your layout
   touch layouts/your-layout-name.html
   touch styles/your-layout-name.css
   ```
3. **Copy the example structure:**
   ```bash
   cp layouts/example-minimalist.html layouts/your-layout-name.html
   cp styles/minimalist.css styles/your-layout-name.css
   ```
4. **Customize your design**
5. **Test print compatibility** (0.94 scale)
6. **Submit a Pull Request**

## 📊 Project Stats

- **Layouts**: 1 (Professional Classic) + 1 example
- **Contributors**: Looking for more!
- **Stars**: Help us reach 100+ ⭐
- **Forks**: Help us reach 50+ 🍴

## 🔗 Related Projects

- **[RemBG.com](https://www.rembg.com)** - AI-powered Background Removal API
- **[rembg.js](https://github.com/Remove-Background-ai/rembg.js)** - JavaScript SDK for background removal

## 📞 Contact & Support

support@rembg.com

- **Project Link**: [https://github.com/mtrabelsi/rembg-cv-maker](https://github.com/mtrabelsi/rembg-cv-maker)
- **Issues**: [GitHub Issues](https://github.com/mtrabelsi/rembg-cv-maker/issues)
- **Discussions**: [GitHub Discussions](https://github.com/mtrabelsi/rembg-cv-maker/discussions)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ and lots of ☕ by the RemBG team

