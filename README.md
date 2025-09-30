# Nancy's Portfolio 🎨

A personal portfolio website showcasing design and development projects. Built with React.

## ✨ Features

- **Bilingual Support**: Available in both English and Japanese
- **6 Project Showcases**: Detailed case studies with interactive layouts
- **Responsive Design**: Looks great on desktop and mobile
- **Polaroid Gallery**: A fun, vintage-inspired photo gallery
- **Clean Architecture**: Modular components and organized data structure

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view in your browser! 🎉

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About/          # About section
│   ├── Gallery/        # Polaroid photo gallery
│   ├── Navigation/     # Site navigation
│   ├── ProjectLayout/  # Project-specific layouts
│   └── MainContent/    # Main content area
├── data/               # Project data and content
│   └── projects/       # Individual project data (EN & JP)
├── pages/              # Main pages (Home + 6 projects)
└── contexts/           # React contexts (Language switching)
```

## 🛠️ Built With

- **React 18** - Frontend framework
- **React Router** - Client-side routing
- **CSS3** - Custom styling with CSS variables
- **Create React App** - Development tooling

## 🌍 Language Support

The portfolio supports both English and Japanese! Language data is managed through separate data files:
- `project-XX-data.js` - English content
- `project-XX-data.ja.js` - Japanese content

## 🎯 Key Projects Featured

1. **WeKruit** - UI/UX Engineering & SDE Internship
2. **SwipyCampus** - Mobile App Ideation & Design
3. **Project 03-06** - Additional design showcases

## 📝 Adding New Projects

1. Create data files in `src/data/projects/`
2. Add project page in `src/pages/projects/`
3. Create project layout in `src/components/ProjectLayout/`
4. Add images to `public/images/projects/`

## 🚢 Deployment

The site is configured to deploy to [nancyhe.com](https://nancyhe.com).

To build for production:
```bash
npm run build
```

## 📄 License

This project is for portfolio purposes. Please respect the content and design work showcased.

---

© 2025 Nancy He
