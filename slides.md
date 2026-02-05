---
theme: default
background: https://images.unsplash.com/photo-1517694712202-14dd9538aa97
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Build & Deploy Your First Website
  Full Sail University Hall of Fame 2026 Workshop
  
  Learn to create and deploy a professional portfolio using templates and Netlify
drawings:
  persist: false
transition: slide-left
title: Build & Deploy Your First Website
---

# Build & Deploy Your First Website

From Template to Live in Minutes

<div class="pt-12">
  <span class="text-xl">
    Full Sail University Hall of Fame 2026
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">🚀 Templates • 🎨 Customization • ☁️ Deployment</span>
</div>

---
layout: default
---

# Today's Journey

<v-clicks>

### Phase 1: Foundation 🎯
Getting set up with the right tools and understanding the basics

### Phase 2: Discovery 🔍
Finding and downloading the perfect template for your needs

### Phase 3: Customization ✨
Making the template yours with personalized content and styling

### Phase 4: Launch 🚀
Deploying your site to Netlify and sharing it with the world

</v-clicks>

---
layout: two-cols
---

# Essential Setup

What you need before starting

<v-clicks>

- **Text Editor**: VS Code recommended
- **Browser**: Chrome/Firefox/Edge/Safari
- **GitHub Account**: Free tier works
- **Netlify Account**: Also free
- **Git** (optional): For advanced workflow

</v-clicks>

::right::

<v-clicks>

### Why VS Code?

```bash
# Features that help beginners:
✓ Built-in file explorer
✓ Integrated terminal
✓ Live preview extensions
✓ Syntax highlighting
✓ Error detection
✓ Free and open source
```

### Must-Have Extensions

- **Live Server** - Instant preview
- **Prettier** - Auto formatting
- **HTML CSS Support** - Better hints

</v-clicks>

---
layout: default
---

# Understanding Netlify

Modern deployment platform that simplifies web hosting

<v-clicks>

| Traditional Hosting | Netlify Approach |
|-------------------|-----------------|
| Configure servers | Drag and drop files |
| Manual updates | Automatic deployments |
| Complex setup | One-click SSL |
| Pay per month | Free tier available |

### Key Benefits
- **Zero Configuration**: No server setup required
- **Global CDN**: Fast loading worldwide
- **Continuous Deployment**: Push code → auto updates
- **Built-in Features**: Forms, analytics, functions included

</v-clicks>

---
layout: default
---

# Template Selection Strategy

Four trusted sources for quality templates

<v-clicks>

### 🎨 HTML5 UP (html5up.net)
Beautiful, modern designs with clean code structure

### 📦 Start Bootstrap (startbootstrap.com)
Bootstrap-based themes with extensive documentation

### 🎯 Templated (templated.co)
Minimalist designs perfect for portfolios

### 🌈 Colorlib (colorlib.com/wp/templates)
Wide variety for different industries

</v-clicks>

<v-click>

> **Selection Tip**: Choose responsive templates with clear documentation

</v-click>

---
layout: two-cols
---

# Download Process

Step-by-step guide

<v-clicks>

1. Browse template sites
2. Click download button
3. Save ZIP to known location
4. Extract all files
5. Move to workspace folder

</v-clicks>

::right::

### Typical Structure

<v-clicks>

```text
my-portfolio/
│
├─ index.html
├─ about.html
│
├─ assets/
│  ├─ css/
│  ├─ js/
│  └─ images/
│
└─ README.md
```

**Pro Tip**: Keep organized folders for easy maintenance

</v-clicks>

---
layout: default
---

# Local Testing Methods

Test before you deploy

<v-clicks>

### Method A: Direct Browser Open
```bash
Right-click index.html → Open With → Your Browser
```
**Limitation**: Some features may not work (AJAX, modules)

### Method B: Live Server (Recommended)
```bash
1. Install Live Server extension in VS Code
2. Right-click index.html
3. Select "Open with Live Server"
4. Automatically opens at localhost:5500
```
**Advantage**: Hot reload on save, full functionality

### Method C: Python Server
```bash
python3 -m http.server 8000
# Then visit: localhost:8000
```

</v-clicks>

---
layout: default
---

# Web Fundamentals Quick Review

The three pillars of web development

<v-clicks>

### HTML - Structure
```html
<article class="portfolio-item">
  <header>
    <h2>Project Title</h2>
  </header>
  <p>Description of your amazing work</p>
</article>
```

### CSS - Presentation
```css
.portfolio-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

### JavaScript - Interaction
```javascript
document.querySelector('.menu-toggle').onclick = () => {
  document.body.classList.toggle('menu-open');
};
```

</v-clicks>

---
layout: default
---

# DevTools Mastery

Your debugging companion

<v-clicks>

### Opening DevTools
- **Windows/Linux**: `F12` or `Ctrl+Shift+I`
- **Mac**: `Cmd+Option+I`
- **Any OS**: Right-click → Inspect

### Essential Panels

| Panel | Purpose | When to Use |
|-------|---------|-------------|
| Elements | Inspect HTML/CSS | Styling issues |
| Console | View errors/logs | JavaScript problems |
| Network | Check file loading | Missing resources |
| Responsive | Test mobile views | Layout testing |

</v-clicks>

<v-click>

**Practice**: Open DevTools now and explore the Elements tab!

</v-click>

---
layout: two-cols
---

# File Paths Explained

Critical concept for working sites

<v-clicks>

### ❌ Absolute Paths
```html
<!-- Won't work when deployed -->
<img src="C:/Users/Me/pics/photo.jpg">
<img src="/Users/me/Desktop/logo.png">
```

These only work on YOUR computer!

</v-clicks>

::right::

<v-clicks>

### ✅ Relative Paths
```html
<!-- Works everywhere -->
<img src="./photos/headshot.jpg">
<img src="../assets/logo.png">
<link href="css/styles.css">
```

### Path Navigation
- `./` = current directory
- `../` = parent directory
- `../../` = two levels up

</v-clicks>

---
layout: default
---

# Customization Checklist

Essential edits for your portfolio

<v-clicks>

### 📝 Content Updates
- [ ] Personal name and title
- [ ] Bio and about text
- [ ] Project descriptions
- [ ] Contact information
- [ ] Social media links

### 🎨 Visual Customization
- [ ] Color scheme (CSS variables)
- [ ] Profile photo
- [ ] Project screenshots
- [ ] Background images
- [ ] Logo/favicon

### 🔧 Technical Updates
- [ ] Page title in `<head>`
- [ ] Meta descriptions
- [ ] Alt text for images
- [ ] Update all links

</v-clicks>

---
layout: default
---

# Accessibility Matters

Making your site usable for everyone

<v-clicks>

### Quick Wins for Accessibility

**1. Image Alt Text**
```html
<!-- Bad -->
<img src="work.jpg">

<!-- Good -->
<img src="work.jpg" alt="Web design mockup showing responsive layout">
```

**2. Color Contrast**
- Text should be easily readable
- Use contrast checker tools
- Minimum ratio: 4.5:1 for normal text

**3. Semantic HTML**
```html
<nav>...</nav>      <!-- Not just <div class="nav"> -->
<article>...</article>
<header>...</header>
```

**4. Keyboard Navigation**
- All interactive elements should be keyboard accessible
- Test: Can you tab through your site?

</v-clicks>

---
layout: default
---

# SEO Fundamentals

Help people find your portfolio

<v-clicks>

### Essential Meta Tags

```html
<head>
  <!-- Title shown in search results -->
  <title>Alex Chen - UX Designer & Developer Portfolio</title>
  
  <!-- Description in search results -->
  <meta name="description" 
        content="Creative UX designer from Full Sail University. 
                 View my web design projects and case studies.">
  
  <!-- Keywords for search engines -->
  <meta name="keywords" 
        content="UX designer, web developer, Full Sail, portfolio">
  
  <!-- Open Graph for social media sharing -->
  <meta property="og:title" content="Alex Chen Portfolio">
  <meta property="og:description" content="UX Designer Portfolio">
  <meta property="og:image" content="./social-preview.jpg">
</head>
```

</v-clicks>

---
layout: default
---

# Git & GitHub Primer

Version control basics for deployment

<v-clicks>

### Core Concepts
- **Git**: Tracks changes locally on your computer
- **GitHub**: Cloud storage for Git repositories
- **Commit**: Snapshot of your project at a point in time
- **Push**: Upload commits to GitHub

### Basic Workflow

```bash
# Initialize repository
git init

# Stage files
git add .

# Create snapshot
git commit -m "Initial portfolio setup"

# Connect to GitHub
git remote add origin https://github.com/username/portfolio.git

# Upload
git push -u origin main
```

</v-clicks>

---
layout: two-cols
---

# Netlify Deployment

Two deployment approaches

### 🎯 Drag & Drop
<v-clicks>

Perfect for quick start

1. Visit netlify.com
2. Sign up (free)
3. Drag folder to dashboard
4. Get instant URL
5. Site is live!

**Pros**: Extremely fast
**Cons**: Manual updates

</v-clicks>

::right::

### 🔄 GitHub Integration
<v-clicks>

Best for ongoing work

1. Push code to GitHub
2. Connect Netlify to repo
3. Select branch
4. Deploy automatically

**Pros**: Auto-updates
**Cons**: Requires Git knowledge

</v-clicks>

---
layout: default
---

# Common Pitfalls & Solutions

Learn from typical beginner mistakes

<v-clicks>

| Problem | Cause | Solution |
|---------|-------|----------|
| Images not showing | Absolute paths | Use relative paths |
| CSS not applied | Wrong file path | Check `<link>` tag |
| 404 errors | Case sensitivity | Match exact filename case |
| Broken after upload | Missing files | Include all assets |
| Forms not working | No backend | Use Netlify Forms |

### Debugging Strategy
1. Check browser console for errors
2. Verify file paths
3. Test locally first
4. Search error messages online
5. Ask in developer communities

</v-clicks>

---
layout: center
class: text-center
---

# 🎯 Practice Challenge

**Your Turn!** (15 minutes)

<v-clicks>

## Task List

1. Choose a template from HTML5 UP
2. Download and extract to your workspace
3. Open folder in VS Code
4. Make these edits:
   - Change name in header
   - Modify one color
   - Update page title
   - Add alt text to one image
5. Test with Live Server

### Bonus: Deploy to Netlify!

</v-clicks>

---
layout: default
---

# Career Impact

Why your online presence matters

<v-clicks>

### For Job Hunting
- **Differentiation**: Stand out from resume-only applicants
- **Evidence**: Show actual work, not just claims
- **Accessibility**: Easy for recruiters to share internally
- **Professionalism**: Demonstrates commitment to craft

### For Networking
- **First Impression**: Control your online narrative
- **Credibility**: Validates your skills and experience
- **Opportunities**: Freelance clients find you
- **Personal Brand**: Establish yourself in your field

### Industry Reality
> 92% of recruiters use LinkedIn and Google to find candidates
> Portfolios increase interview callbacks by 40%

</v-clicks>

---
layout: default
---

# Resources Hub

Continue your learning journey

<v-clicks>

### 📚 Learning Platforms
- **freeCodeCamp** - Interactive tutorials
- **MDN Web Docs** - Complete reference
- **Codecademy** - Structured courses
- **YouTube** - Video tutorials

### 🛠️ Tools & Assets
- **Unsplash** - Free photos
- **Google Fonts** - Typography
- **Font Awesome** - Icons
- **Coolors** - Color palettes

### 💬 Communities
- **Stack Overflow** - Q&A
- **Reddit r/webdev** - Discussions
- **Dev.to** - Articles & tutorials
- **Full Sail Alumni Network** - Connections

</v-clicks>

---
layout: default
---

# Next Steps

Your action plan

<v-clicks>

### Week 1: Build
- [ ] Select and download template
- [ ] Customize with your content
- [ ] Add 3-5 projects
- [ ] Test on multiple devices

### Week 2: Polish
- [ ] Optimize images
- [ ] Add meta tags for SEO
- [ ] Verify accessibility
- [ ] Proofread all text

### Week 3: Launch
- [ ] Deploy to Netlify
- [ ] Set up custom domain (optional)
- [ ] Share on social media
- [ ] Add to resume and LinkedIn

### Ongoing: Iterate
- [ ] Add new projects regularly
- [ ] Update skills section
- [ ] Refresh design annually
- [ ] Monitor analytics

</v-clicks>

---
layout: center
class: text-center
---

# Support & Community

You're not alone!

<v-clicks>

### Get Help
📧 **Questions?** Stack Overflow, Reddit r/webdev
💬 **Connect**: LinkedIn #FullSailHOF2026
🎓 **Alumni Network**: Full Sail community

### Share Your Work
When you deploy, share your portfolio!
Tag: **#FullSailHOF2026**

</v-clicks>

<div class="pt-12">
  <span class="text-xl opacity-75">
    All materials available on GitHub
  </span>
</div>

---
layout: center
class: text-center
---

# Thank You!

<div class="text-6xl pt-8">
🚀
</div>

<div class="pt-12">
  <span class="text-2xl font-bold">
    Now go build something amazing!
  </span>
</div>

<div class="pt-8 text-xl opacity-75">
  Full Sail University Hall of Fame 2026
</div>

<div class="abs-br m-6 text-sm opacity-50">
  Questions? Ask now or reach out anytime!
</div>
