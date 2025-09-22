# Contributing to RemBG CV Maker

Thank you for your interest in contributing to RemBG CV Maker! We welcome contributions from developers, designers, and anyone who wants to improve this project.

## 🚀 How to Contribute

### 1. Fork the Repository
- Click the "Fork" button on GitHub
- Clone your fork locally
- Create a new branch for your feature

### 2. Choose Your Contribution Type

#### 🎨 New CV Layouts
We especially need new CV layouts! Here's how to create one:

1. **Create layout files:**
   ```
   layouts/your-layout-name.html
   styles/your-layout-name.css
   ```

2. **Design requirements:**
   - Must work with existing JSON data structure
   - Print-optimized (test with 0.94 scale in Chrome)
   - Responsive design
   - Professional appearance
   - Accessible (good contrast, readable fonts)

3. **Test your layout:**
   - Test in multiple browsers
   - Verify print compatibility
   - Check mobile responsiveness
   - Validate HTML/CSS

#### 🐛 Bug Fixes
- Report bugs via GitHub Issues
- Fix bugs and submit Pull Requests
- Include test cases for your fixes

#### ✨ New Features
- Suggest features via GitHub Issues
- Implement features following existing code style
- Add documentation for new features

#### 📚 Documentation
- Improve README sections
- Add code comments
- Create tutorials or guides
- Fix typos and improve clarity

### 3. Development Setup

```bash
# Clone your fork
git clone https://github.com/yourusername/rembg-cv-maker.git
cd rembg-cv-maker

# Install dependencies
npm install

# Start development server
npm run dev

# Test your changes
npm start
```

### 4. Code Style Guidelines

- **HTML**: Use semantic HTML5 elements
- **CSS**: Follow BEM methodology when possible
- **JavaScript**: Use ES6+ features, add comments
- **JSON**: Maintain consistent structure
- **Commits**: Write clear, descriptive commit messages

### 5. Testing Your Layout

Before submitting a Pull Request:

1. **Print Test:**
   - Open your layout in Chrome
   - Press Ctrl+P
   - Set scale to 0.94
   - Verify it fits on one page

2. **Print Test:**
   - Test print compatibility with different scales
   - Verify A4 page fitting
   - Test with 0.90-0.95 scale range

3. **Browser Test:**
   - Chrome (primary)
   - Firefox
   - Safari
   - Edge

4. **Accessibility Test:**
   - Check color contrast
   - Verify font sizes
   - Test keyboard navigation

### 6. Submitting Your Contribution

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add new minimalist layout"
   ```

2. **Push to your fork:**
   ```bash
   git push origin your-feature-branch
   ```

3. **Create a Pull Request:**
   - Use the PR template
   - Describe your changes
   - Include screenshots
   - Link related issues

### 7. Layout Naming Convention

Use descriptive, kebab-case names:
- `modern-minimalist`
- `creative-designer`
- `academic-research`
- `executive-corporate`
- `technical-developer`

### 8. What We're Looking For

#### High Priority:
- **New CV layouts** (we need more variety!)
- **Print optimization** improvements
- **Mobile responsiveness** enhancements
- **Accessibility** improvements

#### Medium Priority:
- **Performance** optimizations
- **Code quality** improvements
- **Documentation** enhancements
- **Bug fixes**

#### Low Priority:
- **Minor styling** tweaks
- **Text** improvements
- **Small features**

### 9. Recognition

Contributors will be:
- Listed in the README
- Mentioned in release notes
- Given credit in the footer
- Invited to join the core team (for major contributions)

### 10. Questions?

- Open a GitHub Issue
- Join our discussions
- Check existing issues first

## 🎯 Layout Ideas We Need

### Professional Styles:
- **Modern Minimalist** - Clean, lots of white space
- **Corporate Executive** - Traditional, conservative
- **Creative Professional** - Colorful, visual
- **Academic Research** - Publications, citations
- **Technical Developer** - Code snippets, projects

### Layout Types:
- **Single Column** - Linear, easy to read
- **Two Column** - Sidebar with skills/contact
- **Timeline** - Chronological progression
- **Infographic** - Visual, data-driven
- **Portfolio** - Image-heavy, creative

### Target Industries:
- **Software Development**
- **Design & Creative**
- **Marketing & Sales**
- **Healthcare & Science**
- **Education & Research**
- **Finance & Business**

## 📝 Pull Request Template

```markdown
## Description
Brief description of your changes

## Type of Change
- [ ] New layout
- [ ] Bug fix
- [ ] Feature addition
- [ ] Documentation
- [ ] Other

## Testing
- [ ] Print test (0.94 scale)
- [ ] Mobile responsive
- [ ] Cross-browser compatible
- [ ] Accessibility checked

## Screenshots
Add screenshots of your changes

## Additional Notes
Any additional information
```

---

**Thank you for contributing to RemBG CV Maker!** 🎉

Together, we're building the best open-source CV generator for developers and professionals.
