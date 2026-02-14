# Condition Builder

A visual, interactive React application for building complex filter conditions using AND/OR logic and nested groups. No coding required!
[Live Preview](https://caw-assessment.netlify.app/)

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js** (v16.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v7.0.0 or higher) - Comes with Node.js
- **Git** (optional, for cloning the repository)

To verify installation, run:

```bash
node --version
npm --version
```

## Installation

### 1. Clone or Download the Repository

```bash
git clone <repository-url>
cd condition-builder
```

Or download and extract the ZIP file, then navigate to the project folder.

### 2. Install Dependencies

Install all required packages:

```bash
npm install
```

This will install:
- React 19.2
- Vite 7.3
- TypeScript
- Sass
- ESLint and related tools

## Development

### Start the Development Server

Run the development server with hot reload:

```bash
npm run dev
```

Output:
```
  VITE v7.3.1  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser to see the application.

**Hot Module Reload (HMR):** Any changes you make to the code will automatically refresh in the browser without losing state.

## Building for Production

### Build Optimization

Create an optimized production build:

```bash
npm run build
```

This will:
- Run TypeScript type checking
- Bundle and minify all code
- Generate optimized assets in the `dist/` folder
- Reduce bundle size significantly

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

Then open your browser to `http://localhost:4173/` to see the production build.

## Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with live reload |
| `npm run build` | Create production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Project Structure

```
condition-builder/
├── src/
│   ├── components/
│   │   ├── ConditionBuilder.tsx      # Main component
│   │   ├── ConditionGroup.tsx        # Group renderer
│   │   └── Rule.tsx                  # Rule renderer
│   ├── helper/
│   │   └── index.ts                  # Tree utility functions
│   ├── types/
│   │   └── index.ts                  # TypeScript types
│   ├── App.tsx                       # Root component
│   ├── main.tsx                      # Entry point
│   └── styles/                       # SCSS files
├── public/                           # Static assets
├── dist/                             # Production build (generated)
├── vite.config.ts                    # Vite configuration
├── tsconfig.json                     # TypeScript configuration
├── eslint.config.js                  # ESLint rules
├── package.json                      # Dependencies
└── README.md                         # This file
```

## Technology Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.3.1
- **Language:** TypeScript 5.9
- **Styling:** SCSS
- **Code Quality:** ESLint with TypeScript support
- **Performance:** Babel React Compiler

## Features

**Core Features:**
- Visual condition builder with drag-free UI
- AND/OR logic operators
- Nested group support
- Real-time JSON preview
- Input validation
- Responsive design

## Troubleshooting

### Issue: `npm install` fails

**Solution:** Clear npm cache and try again:
```bash
npm cache clean --force
npm install
```

### Issue: Port 5173 is already in use

**Solution:** Use a different port:
```bash
npm run dev -- --port 3000
```

### Issue: TypeScript errors in editor

**Solution:** Restart the TypeScript server in your editor or run:
```bash
npm run build
```

### Issue: SCSS compilation errors

**Solution:** Make sure Sass is installed:
```bash
npm install -D sass
```

## Performance Notes

- The React Compiler is enabled for optimized rendering
- HMR enables fast development cycles
- Production builds are minified and optimized for minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and submit pull requests for improvements!

## License

MIT License - free to use and modify

