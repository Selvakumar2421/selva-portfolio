# Selvakumar P - Creative Technologist Portfolio

A modern, interactive portfolio showcasing expertise in 3D design, AI interfaces, and visual design.

## 🚀 Features

- **Interactive 3D Background Animations** - Custom Three.js shaders with mouse interaction
- **Responsive Design** - Optimized for all devices using Tailwind CSS
- **Contact Form** - Serverless contact form with email notifications
- **Project Galleries** - Interactive image galleries for showcasing work
- **Modern UI/UX** - Clean, professional design with smooth animations

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript, Three.js, Tailwind CSS
- **Backend**: Node.js, Nodemailer (Serverless Functions)
- **Deployment**: Vercel
- **Email**: Gmail SMTP with App Passwords

## 📦 Deployment

This project is optimized for Vercel deployment:

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Set environment variables** in Vercel dashboard:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail App Password
4. **Deploy to Vercel**

## 🔧 Environment Variables

Create these environment variables in your Vercel dashboard:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

## 📁 Project Structure

```
├── index.html              # Main portfolio page
├── api/
│   └── contact.js          # Serverless contact form handler
├── assets/                 # Images and media files
│   ├── girl/              # 3D character gallery
│   ├── gun/               # 3D weapon models
│   ├── camera/            # 3D product models
│   ├── logos/             # Logo design collection
│   └── broucher/          # Brochure designs
├── vercel.json            # Vercel configuration
└── package.json           # Dependencies

```

## 🎨 Customization

- **Colors**: Modify the Tailwind config in `index.html`
- **Animations**: Update Three.js shaders for different effects
- **Content**: Edit project data and personal information
- **Styling**: Customize CSS classes and animations

## 📧 Contact Form

The contact form uses Vercel serverless functions and Gmail SMTP. Make sure to:

1. Enable 2-factor authentication on Gmail
2. Generate an App Password
3. Set environment variables in Vercel

## 🌟 Performance

- Optimized Three.js animations
- Lazy loading for images
- Responsive design
- Fast loading times
- SEO optimized

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this code for your own portfolio.

---

**Built with ❤️ by Selvakumar P**