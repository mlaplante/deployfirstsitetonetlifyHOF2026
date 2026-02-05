# Copilot Instructions for Full Sail Workshop Repository

## Project Overview

This repository contains workshop materials for "Build & Deploy Your First Website" presented at Full Sail University Hall of Fame 2026. The project includes:

- Portfolio template HTML files
- Presentation materials (Reveal.js and Slidev formats)
- Documentation for deploying to Netlify
- Educational content for web development beginners

## Project Context

**Purpose**: Educational workshop materials for teaching students how to build and deploy their first portfolio website using HTML/CSS and Netlify.

**Target Audience**: Beginners learning web development and deployment basics.

**Key Technologies**:
- HTML5, CSS3, JavaScript (vanilla)
- Reveal.js for presentations
- Slidev for developer-friendly presentations
- Netlify for deployment

## Coding Standards

### HTML
- Use semantic HTML5 elements
- Include helpful `✏️ EDIT:` comments to guide users on what to customize
- Maintain accessibility standards (alt text, ARIA labels when needed)
- Keep inline styles minimal; prefer CSS classes
- Use consistent indentation (2 or 4 spaces)

### CSS
- Use CSS custom properties (CSS variables) for theme colors
- Follow Full Sail branding colors: Primary `#E31837` (red), Secondary `#FDB913` (yellow)
- Write mobile-first, responsive CSS
- Keep selectors simple and maintainable
- Group related styles together with comments

### JavaScript
- Use modern ES6+ syntax where appropriate
- Keep code simple and beginner-friendly
- Add comments explaining complex logic
- Avoid heavy dependencies; prefer vanilla JS for simple interactions

### Documentation
- Write clear, beginner-friendly documentation
- Use emojis to make content more engaging and scannable
- Include step-by-step instructions
- Provide troubleshooting guidance
- Keep tone encouraging and supportive

## Project Structure

```
.
├── README.md                      # Main documentation
├── index.html                     # Main site (if deployed)
├── portfolio-template.html        # Portfolio template for students
├── package.json                   # Node.js configuration for Slidev
└── .github/
    └── copilot-instructions.md    # This file
```

## Best Practices for Changes

1. **Maintain Educational Value**: Any changes should preserve or enhance the learning experience for beginners.

2. **Keep It Simple**: This is for beginners - avoid over-engineering or adding unnecessary complexity.

3. **Test Responsiveness**: Always verify that HTML/CSS changes work on mobile, tablet, and desktop.

4. **Preserve Template Markers**: Keep the `✏️ EDIT:` comments that help students know what to customize.

5. **Update Documentation**: If you change functionality, update the README accordingly.

6. **Accessibility First**: Maintain or improve accessibility in all changes.

7. **No Breaking Changes**: Avoid changes that would break existing deployed sites or ongoing workshops.

## Common Tasks

### Adding New Template Sections
- Use semantic HTML5 elements (`<section>`, `<article>`, etc.)
- Add corresponding navigation links
- Include `✏️ EDIT:` comments for customization guidance
- Ensure responsive design works on all screen sizes

### Updating Styles
- Modify CSS custom properties in `:root` for theme changes
- Test color contrast for accessibility
- Verify mobile responsiveness
- Keep Full Sail branding colors consistent

### Updating Documentation
- Write in clear, beginner-friendly language
- Use examples and code snippets
- Include visual references when helpful
- Keep checklist and step-by-step formats

## Testing Guidelines

Since this is primarily static HTML/CSS:

1. **Visual Testing**: Open HTML files in browser and verify appearance
2. **Responsive Testing**: Test in Chrome DevTools device mode (mobile, tablet, desktop)
3. **Link Testing**: Verify all internal and external links work
4. **Accessibility Testing**: Check with browser accessibility tools
5. **Cross-browser Testing**: Test in Chrome, Firefox, Safari if possible

## Deployment Notes

- This repository is designed for Netlify deployment
- Main deployment file should be named `index.html`
- No build process required for basic HTML deployment
- Slidev presentations require Node.js but are optional

## Support Full Sail Branding

When making changes, maintain Full Sail University's visual identity:
- **Primary Color**: `#E31837` (Full Sail Red)
- **Secondary Color**: `#FDB913` (Full Sail Gold/Yellow)
- Bold, modern, professional aesthetic
- High energy and forward-thinking design

## Questions or Clarifications

When in doubt:
- Prioritize simplicity and clarity for beginners
- Maintain the educational focus
- Keep the template flexible and easy to customize
- Test changes before committing
