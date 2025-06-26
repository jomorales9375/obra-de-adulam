# 🏛️ Obra de Adulam Church Website - Project Backup

## 📋 Project Overview
- **Project Name**: Obra de Adulam Church Website
- **Technology Stack**: React, React Router, Tailwind CSS, EmailJS
- **Deployment**: Netlify (connected to GitHub)
- **Repository**: https://github.com/jomorales9375/obra-de-adulam.git

## 🚀 Current Status
✅ **Fully Functional Website**
✅ **Deployed on Netlify**
✅ **All ESLint errors resolved**
✅ **Responsive design**
✅ **Security measures implemented**

## 📁 Project Structure
```
church-website/
├── public/
│   ├── Adulam Logo.jpg          # Custom church logo
│   ├── videos/
│   │   └── church-background.mp4 # Background video
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Layout.js            # Main layout with navigation
│   │   ├── HomePage.js          # Homepage with video background
│   │   ├── PrayerRequestPage.js # Prayer request form
│   │   ├── DonatePage.js        # Donation page
│   │   └── VisitUsPage.js       # Visit us page with map
│   ├── config/
│   │   └── security.js          # Security configuration
│   ├── utils/
│   │   └── validation.js        # Input validation utilities
│   └── App.js                   # Main app component
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
└── package.json                 # Dependencies
```

## 🎨 Design Features
- **Custom Color Scheme**: 
  - Primary: #021526 (Dark Navy)
  - Secondary: #03346E (Lighter Blue)
- **Glassmorphism Navigation**: Modern transparent navbar with animations
- **Responsive Design**: Works on all devices
- **Background Video**: Cinematic video background on homepage
- **Custom Logo**: Adulam Logo.jpg integrated in navigation

## 🔧 Technical Features
- **React Router**: Multi-page navigation
- **Tailwind CSS**: Utility-first styling
- **EmailJS Integration**: Prayer request form functionality
- **Security Measures**: Input validation, rate limiting, sanitization
- **Accessibility**: WCAG compliant design
- **SEO Optimized**: Meta tags and proper structure

## 📱 Pages & Functionality

### 1. Homepage (/)
- Hero section with background video
- Welcome message
- Service times
- Call-to-action buttons

### 2. Prayer Request Page (/prayer)
- Contact form with validation
- EmailJS integration
- Success/error modals
- Bible verses sidebar

### 3. Donate Page (/donate)
- Multiple donation options
- PayPal integration
- Financial transparency section
- Mail-in donation info

### 4. Visit Us Page (/visit)
- Church information
- Google Maps integration
- Service schedules
- Contact form

## 🔐 Security Features
- Input sanitization and validation
- Rate limiting on forms
- Environment variable protection
- XSS prevention
- CSRF protection

## 🌐 Deployment Information
- **Netlify URL**: [Your Netlify URL]
- **GitHub Repository**: https://github.com/jomorales9375/obra-de-adulam.git
- **Auto-deployment**: Enabled (pushes to main trigger Netlify builds)

## 📦 Dependencies
```json
{
  "react": "^18.2.0",
  "react-router-dom": "^6.8.0",
  "tailwindcss": "^3.3.0",
  "@emailjs/browser": "^3.11.0",
  "postcss": "^8.4.0",
  "autoprefixer": "^10.4.0"
}
```

## 🛠️ Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to Netlify
git add .
git commit -m "Your commit message"
git push origin main
```

## 🔄 Recent Updates (Latest Commits)
1. **3d53f08**: Fixed ESLint warnings - removed unused variables
2. **3e80c9e**: Removed prayer page sections, updated color scheme
3. **6ff96d3**: Added glassmorphism navigation bar
4. **b123056**: Added comprehensive security measures
5. **84fa69c**: Fixed accessibility errors

## 📞 Contact Information
- **Church Address**: 4 Marina Way, Richmond, CA 94806
- **Service Times**: Sundays 3:00 PM
- **Phone**: (510) 555-0123
- **Email**: info@obradeadulam.org

## 🎯 Future Enhancement Ideas
1. Live stream integration
2. Interactive prayer wall
3. Event calendar
4. Push notifications
5. Dark/light mode toggle
6. Member directory
7. Bible study resources
8. Multi-language support

## 💾 Backup Strategy
1. **GitHub**: Primary backup (automatic)
2. **Netlify**: Live deployment backup
3. **Local**: Development environment
4. **Documentation**: This file serves as project reference

## 🚨 Important Notes
- All sensitive data is stored in environment variables
- EmailJS configuration is in security.js
- Custom colors are defined in Tailwind config
- Logo file is in public/Adulam Logo.jpg
- Background video is in public/videos/church-background.mp4

---
**Last Updated**: $(date)
**Project Status**: ✅ Production Ready
**Maintainer**: Josue Morales 