# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your skills, projects, and experience to potential employers and clients.

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript interactivity
├── assets/             # Asset files (create this folder)
│   ├── resume.pdf      # Your resume PDF
│   └── images/         # Image files
│       ├── profile.jpg # Profile picture
│       ├── project1.jpg
│       ├── project2.jpg
│       └── project3.jpg
└── README.md           # This file
```

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional interface with smooth animations
- **Navigation**: Fixed navbar with smooth scrolling to sections
- **Hero Section**: Eye-catching header with call-to-action button
- **About Section**: Profile image and bio
- **Skills Section**: Display your technical skills organized by category
- **Projects Section**: Showcase your work with project cards, descriptions, and links
- **Resume Section**: Easy download link for your resume
- **Contact Section**: Contact information and functional contact form
- **Footer**: Quick links and social media connections
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Animations**: Smooth scroll animations and hover effects

## 🎨 Customization Guide

### 1. **Personal Information**
   - Open `index.html`
   - Replace "Your Name" with your name in the hero section
   - Update your tagline/profession
   - Update contact information (email, phone, location)
   - Update social media links

### 2. **Add Your Image**
   - Create an `assets/images/` folder
   - Add your profile picture as `profile.jpg` (400x400px recommended)
   - Add project images (800x600px recommended)
   - Update image paths in HTML if different

### 3. **Customize Skills**
   - Edit the Skills Section in `index.html`
   - Modify skill categories and individual skills
   - Add or remove skill cards as needed

### 4. **Add Your Projects**
   - Update project titles, descriptions, and links
   - Replace project image paths
   - Update technology tags
   - Add links to live demos and GitHub repositories

### 5. **Add Your Resume**
   - Create an `assets/` folder
   - Add your resume as `resume.pdf`
   - The download link is already configured

### 6. **Style Customization**
   - Open `styles.css`
   - Modify CSS variables at the top:
     ```css
     :root {
         --primary-color: #2563eb;      /* Main color */
         --secondary-color: #64748b;    /* Secondary color */
         --accent-color: #f59e0b;       /* Accent color */
         /* ... other variables ... */
     }
     ```

### 7. **Color Scheme**
   Change the primary color scheme:
   - `--primary-color`: Main brand color (currently blue)
   - `--secondary-color`: Secondary accent (currently slate)
   - `--accent-color`: Highlight color (currently amber)
   - `--dark-color`: Dark elements (currently slate)

### 8. **Contact Form**
   - The contact form currently simulates submission
   - To make it functional, integrate with a backend service like:
     - Formspree (https://formspree.io/)
     - EmailJS (https://www.emailjs.com/)
     - Your own backend API

## 🔧 How to Use

1. **Edit HTML**: Update `index.html` with your information
2. **Add Images**: Place images in `assets/images/` folder
3. **Upload Resume**: Add `resume.pdf` in `assets/` folder
4. **Customize Styling**: Modify `styles.css` for your preferred colors
5. **Test**: Open `index.html` in your browser
6. **Deploy**: Upload files to hosting platform (GitHub Pages, Netlify, Vercel, etc.)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🌐 Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Push your portfolio files
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be available at `username.github.io/portfolio`

### Netlify (Free)
1. Login to Netlify
2. Drag and drop your portfolio folder
3. Your site will be deployed instantly

### Vercel (Free)
1. Import your Git repository
2. Vercel will auto-detect and deploy
3. Get a live URL immediately

## 🎯 Tips for Better Results

- Use high-quality images (but optimize for web)
- Keep content concise and impactful
- Update your portfolio regularly with new projects
- Use descriptive text for better SEO
- Test on multiple devices before deploying
- Ensure all links are working
- Consider adding more sections like Testimonials or Blog

## 📝 Optional Enhancements

- Add a blog section
- Include testimonials from colleagues
- Add a timeline for experience
- Integrate dark mode toggle
- Add filtering for project categories
- Include additional social links
- Add a newsletter signup
- Include a writing/blog section

## 🏆 Best Practices

- Keep file names lowercase and descriptive
- Optimize images before uploading
- Use semantic HTML tags
- Keep CSS organized and modular
- Test form validation
- Ensure accessibility (alt text for images, proper heading structure)
- Minify CSS and JS for production

## 💡 Quick Tips

- Update your portfolio every 3-6 months
- Keep projects and skills current
- Use real project images if possible
- Write compelling project descriptions
- Include metrics and results where possible
- Make contact information easily visible
- Test all links before deployment

## 📧 Support

For questions or issues:
1. Check the HTML structure in `index.html`
2. Verify image paths and file locations
3. Ensure CSS file is linked correctly
4. Check browser console for JavaScript errors
5. Test on different browsers and devices

## ✨ Credits

This portfolio template is created using modern web development best practices with HTML5, CSS3, and Vanilla JavaScript.

---

**Happy coding! 🎉**
