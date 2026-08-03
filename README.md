# React Data Analyst Portfolio

A modern, responsive portfolio website for Ramya Abothula - Data Analyst & Software Engineer, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme Toggle** - Users can switch between dark and light modes
- **Smooth Animations** - Framer Motion animations for engaging user experience
- **SEO Optimized** - Proper metadata and semantic HTML
- **Fast Performance** - Built with Vite for optimal build speed and bundle size
- **Type Safe** - Full TypeScript support for type safety
- **Production Ready** - Optimized for deployment on Vercel

## 📋 Sections

- **Hero** - Eye-catching introduction with call-to-action buttons
- **About** - Personal background and professional summary
- **Skills** - Technical skills categorized by type
- **Experience** - Professional experience and roles
- **Projects** - Portfolio of completed projects
- **Certifications** - Professional certifications and courses
- **Hackathons** - Awards and achievement highlights
- **Education** - Academic background and qualifications
- **Contact** - Direct contact options and social links
- **Footer** - Credits and additional links

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **CSS Processing:** PostCSS & Autoprefixer

## 📦 Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "framer-motion": "^11.1.12",
  "lucide-react": "^0.278.0"
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AbothulaRamya/React-Portfolio.git
cd react-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Update Personal Information

Edit `src/data/siteConfig.ts` to update:
- Name and title
- Email and contact information
- Social media links
- Resume path
- Skills
- Experience
- Projects
- Education
- Certifications

### Update Styles

- Tailwind CSS configuration: `tailwind.config.cjs`
- Global styles: `src/styles/tailwind.css`
- Theme colors are defined in the Tailwind config

### Update Content

Replace images in `public/images/`:
- `profile.jpg` - Profile photo
- `project1.svg`, `project2.svg`, `project3.svg` - Project thumbnails

## 🌐 Deployment

### Deploy on Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Import the GitHub repository
5. Vercel will auto-detect Vite and configure build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Click "Deploy"

Your portfolio will be live at a Vercel URL in minutes!

### Manual Deployment Commands

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## 📊 Build Information

- **Build Tool:** Vite v5.4.21
- **TypeScript:** v5.5.4
- **Tailwind CSS:** v3.4.7
- **Bundle Size:** ~281 KB (89 KB gzipped)
- **Modules:** 1662 transformed

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.cjs` - Tailwind CSS configuration
- `postcss.config.cjs` - PostCSS configuration
- `vercel.json` - Vercel deployment configuration

## 📱 Responsive Breakpoints

- Mobile: 375px (sm)
- Tablet: 768px (md)
- Desktop: 1024px (lg)
- Large Desktop: 1280px (xl)

## 🎯 Performance Optimizations

- Code splitting with Vite
- CSS bundling and minification
- Image lazy loading
- Efficient animations using Framer Motion
- Optimized font loading with Google Fonts
- Gzipped production build

## 📄 Resume

The resume is available at `/public/Ramya_Data_Analyst_Resume.pdf` and can be downloaded from the portfolio.

## 🔗 Social Links

- **GitHub:** https://github.com/AbothulaRamya
- **LinkedIn:** https://www.linkedin.com/in/abothula-ramya/
- **Email:** abothularamya064@gmail.com

## 📜 License

This project is open source and available under the MIT License.

## 👤 Author

**Ramya Abothula**
- Data Analyst | Business Intelligence Enthusiast | AI-Driven Insights
- Transforms raw data into clear, actionable insights

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - The library for web and native user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Lucide React](https://lucide.dev/) - Beautiful icon library
- [Vercel](https://vercel.com/) - Cloud platform for deployment

---

**Last Updated:** August 2026

For questions or collaboration opportunities, feel free to reach out via email or connect on LinkedIn!
