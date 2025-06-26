# 🚀 Quick Setup Guide - Obra de Adulam Website

## 📋 Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/jomorales9375/obra-de-adulam.git
cd church-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```

### 4. Build for Production
```bash
npm run build
```

## 🔧 Environment Setup

### EmailJS Configuration
Create a `.env` file in the root directory:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### Netlify Deployment
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Add environment variables in Netlify dashboard

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#021526',
  secondary: '#03346E',
}
```

### Logo
Replace `public/Adulam Logo.jpg` with your new logo

### Background Video
Replace `public/videos/church-background.mp4` with your video

## 📱 Pages
- **Home**: `/` - Main landing page
- **Prayer**: `/prayer` - Prayer request form
- **Donate**: `/donate` - Donation page
- **Visit**: `/visit` - Church information

## 🛠️ Troubleshooting

### Tailwind CSS Issues
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support
- **Repository**: https://github.com/jomorales9375/obra-de-adulam.git
- **Documentation**: See PROJECT_BACKUP.md for detailed information

---
**Project**: Obra de Adulam Church Website  
**Status**: ✅ Production Ready  
**Last Updated**: $(date) 