# Build & Deploy Your First Website Workshop
## Full Sail University Hall of Fame 2026

Welcome to the "Build & Deploy Your First Website" workshop! This repository contains everything you need to create and deploy your first professional portfolio website using templates and Netlify.

---

## 📦 What's Included

This workshop package includes:

1. **Two Presentation Formats:**
   - `presentation-revealjs.html` - Interactive Reveal.js presentation (standalone HTML)
   - `slides.md` - Slidev markdown presentation (requires Node.js)

2. **Portfolio Template:**
   - `portfolio-template.html` - A fully responsive, customizable portfolio template

3. **Documentation:**
   - This README file with complete instructions

---

## 🚀 Quick Start

### Using the Reveal.js Presentation (Easiest)

1. Simply open `presentation-revealjs.html` in any modern web browser
2. Use arrow keys or click the navigation controls to move through slides
3. Press `F` for fullscreen mode
4. Press `S` for speaker notes
5. Press `ESC` for overview mode

**No installation required!** The presentation uses CDN links for all dependencies.

### Using the Slidev Presentation (Developer-Friendly)

If you prefer Slidev, you'll need Node.js installed:

```bash
# Install Slidev CLI globally (one-time setup)
npm install -g @slidev/cli

# Navigate to the workshop folder
cd fullsail-workshop

# Start the presentation
slidev slides.md

# Or run it directly without installation
npx slidev slides.md
```

The presentation will open at `http://localhost:3030`

---

## 🎨 Using the Portfolio Template

The `portfolio-template.html` file is a complete, professional portfolio website that you can customize and deploy immediately.

### Features:
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern, clean aesthetic inspired by Full Sail branding
- ✅ Smooth animations and transitions
- ✅ Easy-to-customize color scheme using CSS variables
- ✅ Sections: Hero, About, Projects, Contact
- ✅ Contact form ready
- ✅ Social media links
- ✅ Mobile-friendly navigation

### Customization Guide

Look for the `✏️ EDIT:` comments throughout the HTML file. These mark the key areas you should customize:

#### 1. **Colors (Lines 28-34)**
```css
:root {
    --primary-color: #E31837;      /* Change to your brand color */
    --secondary-color: #FDB913;    /* Change to your accent color */
    --dark-bg: #000000;
    --light-bg: #ffffff;
    /* ... more colors ... */
}
```

#### 2. **Hero Section (Lines 450-465)**
Replace:
- Your name
- Your title/tagline
- Your description

#### 3. **About Section (Lines 475-520)**
Replace:
- Your bio text
- Your skills (add/remove as needed)
- Your profile image (line 512)

#### 4. **Projects Section (Lines 535-600)**
For each project, update:
- Project title
- Project description
- Technology tags
- Links to live demo and GitHub
- Add/remove project cards as needed

#### 5. **Contact Section (Lines 620-680)**
Update:
- Email address
- Phone number
- Location
- Social media links

### Image Guidelines

**Profile Image:**
- Recommended size: 400x500px
- Format: JPG or PNG
- Optimize for web (keep under 200KB)
- Replace the placeholder at line 512

**Project Images:**
- The template uses icon placeholders by default
- To add real images, replace the `.project-image` content
- Recommended size: 600x400px minimum
- Use services like TinyPNG to compress images

---

## ☁️ Deploying to Netlify

### Method 1: Drag & Drop (Simplest)

1. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Sign up" and create a free account

2. **Prepare your files**
   - Rename `portfolio-template.html` to `index.html`
   - Put all your files (HTML, images, etc.) in a single folder

3. **Deploy**
   - Log into Netlify
   - Look for the drag & drop area that says "Want to deploy a new site without connecting to Git? Drag and drop your site folder here"
   - Drag your folder onto the page
   - Wait a few seconds... Done! 🎉

Your site will be live at a URL like: `random-name-123.netlify.app`

### Method 2: GitHub Integration (Recommended)

This method enables continuous deployment - every time you push changes to GitHub, your site automatically updates!

1. **Create a GitHub repository**
   ```bash
   # In your project folder
   git init
   git add .
   git commit -m "Initial commit: My portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Log into Netlify
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Authorize Netlify to access your repositories
   - Select your portfolio repository

3. **Configure build settings**
   - For a simple HTML site, you don't need any build settings
   - Just click "Deploy site"

4. **Automatic deployments**
   - Make changes locally
   - Commit and push to GitHub
   - Netlify automatically rebuilds and deploys! 🚀

### Adding a Custom Domain

Once your site is deployed:

1. **Get a domain**
   - Purchase from: Namecheap, GoDaddy, Google Domains, etc.
   - Cost: Usually $10-15/year

2. **Configure in Netlify**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `yourname.com`)

3. **Update DNS**
   - In your domain provider's settings:
   - Add an A record pointing to Netlify's load balancer
   - Or add a CNAME record pointing to your Netlify subdomain

4. **Enable HTTPS**
   - Netlify automatically provisions an SSL certificate
   - Your site will be available at `https://yourname.com`

---

## 📚 Template Resources

### Free Template Sources

1. **HTML5 UP** - https://html5up.net
   - Gorgeous, responsive templates
   - 100% free, built with modern HTML5/CSS3
   - Perfect for portfolios and landing pages

2. **Start Bootstrap** - https://startbootstrap.com
   - Bootstrap-based templates
   - Large collection of themes
   - Great documentation

3. **Templated** - https://templated.co
   - Simple, minimalist templates
   - Easy to customize
   - Perfect for beginners

4. **Colorlib** - https://colorlib.com/wp/templates
   - Wide variety of templates
   - Modern designs
   - Regular updates

### Learning Resources

**HTML/CSS/JavaScript:**
- [MDN Web Docs](https://developer.mozilla.org) - Comprehensive reference
- [freeCodeCamp](https://www.freecodecamp.org) - Free interactive tutorials
- [CSS-Tricks](https://css-tricks.com) - Tips, tricks, and techniques

**Design Assets:**
- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://www.pexels.com) - Free stock photos and videos
- [Google Fonts](https://fonts.google.com) - Free web fonts
- [Font Awesome](https://fontawesome.com) - Icon library

**Tools:**
- [TinyPNG](https://tinypng.com) - Compress images
- [Can I Use](https://caniuse.com) - Check browser support
- [ColorHunt](https://colorhunt.co) - Color palette inspiration

---

## 🛠️ Customization Tips

### Changing Colors

The template uses CSS custom properties (variables) for easy color changes:

```css
:root {
    --primary-color: #E31837;
    --secondary-color: #FDB913;
}
```

Just change these values once, and the entire site updates!

### Adding Google Fonts

1. Go to [Google Fonts](https://fonts.google.com)
2. Select your font
3. Copy the `<link>` tag to your HTML `<head>`
4. Update CSS to use the font:

```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

### Adding More Sections

To add a new section:

```html
<section id="new-section">
    <div class="container">
        <h2>New Section Title</h2>
        <p>Your content here...</p>
    </div>
</section>
```

Don't forget to:
1. Add navigation link: `<li><a href="#new-section">New Section</a></li>`
2. Style it in CSS if needed

### Making it Mobile-Friendly

The template is already responsive, but test on real devices:

- **Chrome DevTools**: Press F12 → Click device toolbar icon
- **Firefox**: Press F12 → Click responsive design mode
- **Test on actual devices**: Most important!

---

## 🐛 Troubleshooting

### Common Issues

**Images not loading:**
- Check file paths are correct
- Ensure case sensitivity matches (logo.jpg ≠ Logo.JPG)
- Images must be in your project folder

**CSS not applying:**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check CSS file path in HTML
- Validate CSS syntax

**Links not working:**
- Use relative paths: `./images/photo.jpg` not `C:/Users/.../photo.jpg`
- Check anchor links match IDs: `href="#about"` → `id="about"`

**Mobile menu not opening:**
- Check JavaScript is loaded
- Look for JavaScript errors in console (F12)

### Getting Help

If you run into issues:

1. Check browser console for errors (F12 → Console tab)
2. Validate your HTML at [validator.w3.org](https://validator.w3.org)
3. Validate your CSS at [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/)
4. Search error messages online
5. Ask in developer communities:
   - [Stack Overflow](https://stackoverflow.com)
   - [Reddit r/webdev](https://reddit.com/r/webdev)
   - [Dev.to](https://dev.to)

---

## ✨ Next Steps

After deploying your portfolio:

1. **Share it!**
   - Add to your resume
   - Share on LinkedIn
   - Include in job applications

2. **Keep improving**
   - Add blog posts
   - Showcase more projects
   - Implement new features

3. **Learn more**
   - Take online courses
   - Build more projects
   - Contribute to open source

4. **Network**
   - Join developer communities
   - Attend meetups and conferences
   - Connect with other developers

---

## 🎓 Workshop Presentation Controls

### Reveal.js Keyboard Shortcuts

- `←` `→` `↑` `↓` - Navigate slides
- `Space` - Next slide
- `Shift+Space` - Previous slide
- `Home` - First slide
- `End` - Last slide
- `F` - Fullscreen
- `S` - Speaker notes
- `O` or `ESC` - Overview mode
- `B` or `.` - Pause (black screen)
- `?` - Show keyboard shortcuts

### Slidev Keyboard Shortcuts

- `→` or `Space` - Next slide
- `←` - Previous slide
- `↑` - Previous slide (same column)
- `↓` - Next slide (same column)
- `F` - Toggle fullscreen
- `O` - Toggle overview
- `D` - Toggle dark mode
- `C` - Toggle camera view
- `R` - Toggle recording

---

## 📝 Checklist: Before You Deploy

- [ ] Customize all text content (name, bio, projects)
- [ ] Replace placeholder images with your own
- [ ] Update all links (projects, social media)
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Optimize images for web
- [ ] Update contact information
- [ ] Test contact form (if using)
- [ ] Add your favicon (optional)
- [ ] Proofread all text for typos

---

## 🎉 Credits

**Workshop created for:**
Full Sail University Hall of Fame 2026

**Template Design:**
Inspired by Full Sail University's bold, modern aesthetic

**Technologies Used:**
- Reveal.js - Presentation framework
- Slidev - Developer-friendly presentations
- HTML5, CSS3, JavaScript
- Font Awesome Icons
- Google Fonts

---

## 📄 License

The portfolio template is free to use for personal and commercial projects. No attribution required, but appreciated!

The presentation materials are provided for educational purposes as part of the Full Sail University Hall of Fame 2026 workshop.

---

## 💬 Feedback

We'd love to hear about your experience with this workshop!

Share your deployed portfolio and tag us:
- Twitter/X: #FullSailHOF2026
- LinkedIn: Full Sail University
- Instagram: @fullsail

---

**Now go build something amazing! 🚀**

Full Sail University Hall of Fame 2026
