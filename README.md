# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Material-UI.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Dark mode theme
- Project showcase section
- Contact form
- Skills display
- Social media integration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Customization

### Personal Information

1. Update your name in `src/components/Navbar.tsx`
2. Modify the about section in `src/pages/About.tsx`
3. Update skills in `src/pages/About.tsx`
4. Add your projects in `src/pages/Projects.tsx`
5. Update social media links in `src/pages/Contact.tsx`

### Styling

- The theme can be customized in `src/App.tsx`
- Global styles can be modified in `src/index.css`
- Component-specific styles can be adjusted in their respective files

### Adding New Projects

To add a new project, update the `projects` array in `src/pages/Projects.tsx`:

```typescript
{
  title: 'Project Title',
  description: 'Project description',
  image: 'path-to-image',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  github: 'github-url',
  demo: 'demo-url',
}
```

## Deployment

The portfolio can be deployed to various platforms:

1. Build the project:
```bash
npm run build
```

2. Deploy the contents of the `dist` folder to your preferred hosting service.

## Technologies Used

- React
- TypeScript
- Material-UI
- Framer Motion
- React Router

## License

This project is licensed under the MIT License - see the LICENSE file for details.
