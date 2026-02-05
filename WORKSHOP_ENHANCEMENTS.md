# Workshop Presentation Enhancements

## Summary of Changes

This document outlines all enhancements made to the Full Sail University Hall of Fame 2026 workshop presentation materials.

## Files Created

### 1. presentation-revealjs.html (60KB)
- Complete Reveal.js presentation with 39 total slides (including 12 newly added slides)
- Fully self-contained HTML file using CDN resources
- No installation required - works directly in any modern browser
- Interactive navigation with keyboard shortcuts

### 2. slides.md (13KB)
- Complete Slidev markdown presentation
- Requires Node.js and Slidev CLI to run
- Developer-friendly format with Vue components
- Easy to edit and version control

## New Slides Added to Reveal.js Presentation

### Setup & Environment (3 slides)
1. **Pre-Workshop Setup** - System requirements, software needs, accounts
2. **Development Environment Setup** - VS Code installation, extensions, workspace configuration
3. **Downloading & Organizing Templates** - Step-by-step download process, folder structure

### Testing & Tools (3 slides)
4. **Local Testing** - Two methods (direct browser, Live Server) with pros/cons
5. **Browser DevTools** - How to open, key features, common use cases
6. **File Paths Understanding** - Relative vs absolute paths with examples

### Best Practices (2 slides)
7. **Web Accessibility Basics** - Alt text, contrast, keyboard navigation, semantic HTML
8. **SEO Fundamentals** - Meta tags for discoverability and search optimization

### Version Control (1 slide)
9. **Git & GitHub Basics** - Core concepts, basic workflow commands

### Troubleshooting (2 slides)
10. **Debugging Guide** - Common beginner mistakes, error reading, debugging steps
11. **Hands-On Activity** - 15-minute interactive challenge with bonus tasks

### Career & Support (2 slides)
12. **Career Context** - Why portfolios matter for job hunting and networking
13. **Workshop Support Resources** - Community channels, Q&A platforms, connection opportunities

## Slidev Presentation Structure

The slides.md file includes 30+ unique slides organized as:

- Title and overview
- Essential setup and tools
- Understanding Netlify platform
- Template selection strategy
- Download and file management
- Local testing methods
- Web fundamentals review (HTML/CSS/JS)
- DevTools mastery
- File paths explained
- Customization checklist
- Accessibility matters
- SEO fundamentals
- Git & GitHub primer
- Deployment methods (drag & drop, GitHub integration)
- Common pitfalls and solutions
- Practice challenge
- Career impact
- Resources hub
- Next steps action plan
- Support and community
- Closing

## Key Improvements

### For Beginners
- **Pre-workshop preparation**: Clear list of tools and accounts needed
- **Environment setup**: Step-by-step VS Code configuration
- **File management**: Understanding downloads, extraction, and organization
- **Local testing**: Multiple approaches with clear guidance
- **Debugging**: Practical error-solving strategies

### For Success
- **Accessibility**: Making sites usable for everyone
- **SEO**: Getting found in search engines
- **Git basics**: Version control fundamentals
- **DevTools**: Browser debugging capabilities
- **File paths**: Critical concept for working deployments

### For Career Growth
- **Professional context**: Why portfolios matter
- **Networking**: Community and support channels
- **Best practices**: Industry standards and approaches
- **Hands-on practice**: Interactive learning opportunities

## Technical Details

### Reveal.js Presentation
- Framework: Reveal.js 5.0.4
- Syntax highlighting: Monokai theme
- Custom Full Sail branding colors
- Responsive design
- Fragment animations
- Code examples with line numbers

### Slidev Presentation
- Theme: Default
- Syntax highlighter: Shiki
- Transition: Slide-left
- Vue components support
- Click-through animations (v-clicks)
- Two-column layouts

## Usage

### Reveal.js Version
```bash
# Simply open in browser
open presentation-revealjs.html

# Or use any web server
python3 -m http.server 8080
# Visit: http://localhost:8080/presentation-revealjs.html
```

### Slidev Version
```bash
# Install Slidev globally (one-time)
npm install -g @slidev/cli

# Run presentation
slidev slides.md

# Or use npx without installation
npx slidev slides.md
```

## Keyboard Controls

### Reveal.js
- Arrow keys: Navigate slides
- F: Fullscreen
- S: Speaker notes
- ESC: Overview mode
- ?: Show all shortcuts

### Slidev
- Space/→: Next slide
- ←: Previous slide
- F: Fullscreen
- O: Overview mode
- D: Dark mode toggle

## Browser Compatibility

Both presentations work in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Next Steps for Workshop Presenters

1. Review both presentation formats
2. Choose preferred format or use both
3. Customize content as needed
4. Test with actual students
5. Gather feedback for improvements
6. Update regularly with new resources

## Credits

Workshop created for Full Sail University Hall of Fame 2026
Enhanced with additional beginner-friendly content and resources
