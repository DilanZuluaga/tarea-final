# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Plataforma Académica is a modern student management system built with React and Vite. It implements a complete academic platform for students at Universidad ECCI, with features for viewing schedules, grades, notifications, and administrative functions.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Routing Structure

The application uses React Router v6 with a centralized route configuration in `src/App.jsx`. All routes are defined at the top level:

- `/` and `/bienvenida` - Welcome/landing page
- `/login` - Authentication page
- `/inicio` - Main dashboard after login
- `/perfil` - Student profile
- `/calificaciones` - Grades overview
- `/calificaciones/corte/:corteId` - Grades by academic period (dynamic route)
- `/horario` - Class schedule
- `/notificaciones` - Notifications
- `/recursos` - Virtual resources
- `/ubicacion` - Classroom locations
- `/materias` - Subjects and professors
- `/administrativa` - Administrative management

Any undefined route redirects to `/login`.

### Component Architecture

**Shared Components** (in `src/components/`):
- `Header.jsx` - Global navigation header with ECCI logo, notification bell, email, and menu icons. Used across all main pages.
- `MenuButton.jsx` - Reusable navigation button component used in the main dashboard grid
- `StudentCard.jsx` - Displays student information (avatar, name, code, status)
- `TablaCalificaciones.jsx` - Table component for displaying grades

**Page Components** (in `src/pages/`):
All page components follow a similar pattern:
1. Import Header component for navigation
2. Import associated CSS from `src/styles/`
3. Render page-specific content
4. Use react-router-dom's `Link` or `useNavigate` for navigation

Some pages have subfolders (e.g., `Calificaciones/`) for related views.

### Styling System

**Global Styles** (`src/index.css`):
- Typography: Mukta Mahee font family (weights: 200-800) from Google Fonts
- Color palette:
  - Primary Blue: `#00457a`
  - Light Gray: `#e3e3e3`
  - Background: `#e9e6e6`
  - Light Background: `#f4f4f4`
- Custom scrollbar styling
- CSS reset and smooth scrolling

**Component Styles**:
Each component/page has a corresponding CSS file in `src/styles/`. Styles are component-scoped using BEM-like naming conventions (e.g., `.header__logo-container`, `.menu-button__icon`).

### Asset Management

**Images**: The project uses Figma asset URLs for icons and images. These are defined as constants at the top of component files (e.g., in `InicioDesktop.jsx`).

**ECCI Logo**: Imported as a local asset from the project root:
```javascript
import ecciLogo from '../../Logo.png'
```
The logo file is located at `Logo.png` in the project root directory and is used in the Header component.

### Data Flow

Currently, the application is primarily presentational with hardcoded data. There's no global state management (Redux, Context API) or API integration yet. Student data and content are defined locally within components.

## Code Standards

### ESLint Configuration

The project uses ESLint with React-specific rules:
- React Hooks rules enforced
- React Refresh plugin for Vite
- Unused variables error except for constants (varsIgnorePattern: `^[A-Z_]`)
- ES2020+ syntax support

### File Organization

```
src/
├── components/        # Reusable UI components
├── pages/            # Route-level page components
│   └── [Feature]/    # Optional subfolder for related pages
├── styles/           # CSS files matching component names
├── App.jsx           # Root component with routing
├── main.jsx          # Application entry point
└── index.css         # Global styles
```

### Naming Conventions

- Components: PascalCase (e.g., `MenuButton.jsx`, `InicioDesktop.jsx`)
- CSS files: PascalCase matching component name (e.g., `MenuButton.css`)
- CSS classes: kebab-case with BEM-style naming (e.g., `header__logo-container`)
- Constants: SCREAMING_SNAKE_CASE (e.g., `ECCI_LOGO`)
- Props and variables: camelCase

## Important Technical Details

### React Version

Uses React 19.1.1 with the latest patterns. All components use function components with hooks.

### Vite Configuration

Standard Vite setup with React plugin. No custom aliases or build configurations.

### Responsive Design

The application is designed for multiple breakpoints:
- Desktop: 1920px and above
- Tablet: 1024px to 1920px
- Mobile: Below 1024px

Media queries are defined in component CSS files.

### Navigation

Navigation is handled via:
- `Link` component from react-router-dom for declarative navigation
- `useNavigate` hook for programmatic navigation
- All navigation links use absolute paths (e.g., `/inicio`, `/calificaciones`)

## Key Patterns

### Adding a New Page

1. Create page component in `src/pages/[PageName].jsx`
2. Create corresponding CSS in `src/styles/[PageName].css`
3. Import and use `Header` component at the top
4. Add route to `src/App.jsx`
5. Update navigation links in relevant components (e.g., `MenuButton` in `InicioDesktop`)

### Using Icons

The project uses `react-icons` library. Common icon sets:
- `react-icons/io` (Ionicons)
- `react-icons/md` (Material Design)
- `react-icons/hi` (HeroIcons)

Import icons individually: `import { IoMdNotifications } from 'react-icons/io'`

### Image Assets

Store image URLs as constants at the top of files. For Figma assets, use the Figma API format. For external assets (like logos), use direct URLs.
