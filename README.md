# 3D Website Tutorial
A modern Next.js application showcasing interactive 3D elements and animations for web design and development.

## Overview
This project demonstrates the integration of 3D elements, animations, and modern UI components in a Next.js application. It serves as both a tutorial and a showcase for creating visually engaging web experiences with advanced frontend techniques.

## Features
- Interactive 3D elements and animations
- GSAP-powered smooth transitions and effects
- Responsive design for all device sizes
- Custom UI components including buttons and navigation
- Video integration for rich media experiences

## Technologies
- Framework : Next.js 14
- Styling : CSS Modules
- Animation : GSAP (GreenSock Animation Platform)
- 3D Rendering : Three.js
- Language : TypeScript

## Getting Started

### Prerequisites
- Node.js 18.x or later
- npm  package manager
### Installation
1. Clone the repository:
```
git clone https://github.com/smokemoha/3d_website_tutorial.git
cd 3d_website_tutorial
```
2. Install dependencies:
```
npm install

npm install next react react-dom

nmp i 

npm i gsap @gsap/react
```

3. Run the development server:
```
npm run dev
```

4. Open http://localhost:3000 with your browser to see the result.

## Project Structure
```plaintext
src/
├── app/                # Next.js app directory
│   ├── page.tsx        # Home page component
│   └── page.module.css # Styles for home page
├── lib/
│   ├── components/     # Reusable UI components
│   ├── global/         # Global components like Navigation
│   └── icons/          # SVG icons as React components
└── public/             # Static assets
    └── render.mp4      # Video assets
```

## Usage
The application demonstrates various techniques for creating engaging web experiences:

- Animated introductions using GSAP
- Interactive UI elements
- Video integration
- Custom navigation components
You can modify the components in src/lib/components to customize the UI or adjust the animations in page.tsx to create different visual effects.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.