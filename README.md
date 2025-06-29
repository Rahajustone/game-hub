# 🎮 Game Hub

A modern React application for browsing and discovering video games, built with Chakra UI v3, TypeScript, and Vite.

## 🚀 Features

- **Game Discovery**: Browse games with filtering by genre, platform, and search
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Real-time Search**: Search games by title
- **Platform Filtering**: Filter games by platform (PC, PlayStation, Xbox, etc.)
- **Genre Filtering**: Filter games by genre
- **Sorting Options**: Sort games by relevance, release date, rating, etc.
- **Modern UI**: Beautiful, accessible interface built with Chakra UI v3

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Chakra UI v3** - Modern component library with theming system

### Key Packages
- **@chakra-ui/react** - UI component library
- **react-icons** - Icon library (LuMoon, LuSun, LuSearch, etc.)
- **axios** - HTTP client for API requests

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Vite** - Development server and build tool

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### 1. Create React Project with Vite
```bash
npm create vite@latest game-hub -- --template react-ts
cd game-hub
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Chakra UI v3
```bash
npm install @chakra-ui/react
```

### 4. Install Additional Packages
```bash
npm install react-icons axios
```

### 5. Install Dev Dependencies
```bash
npm install -D @types/node
```

## 🏗️ Project Structure

```
game-hub/
├── public/                 # Static assets
│   │   ├── Emojis/        # Rating emojis
│   │   ├── Image Placeholder/
│   │   └── Logo/
│   ├── components/        # React components
│   │   ├── GameGrid/      # Game display components
│   │   ├── GameHeading/   # Page heading
│   │   ├── Navbar/        # Navigation bar
│   │   ├── PlatformSelector/ # Platform filter
│   │   ├── SideBar/       # Genre sidebar
│   │   ├── SortSelector/  # Sort options
│   │   └── ui/            # UI utilities
│   ├── data/              # Static data
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API services
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # App entry point
│   ├── theme.ts           # Chakra UI theme configuration
│   └── index.css          # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Theming System

### Chakra UI v3 Theme Configuration
The project uses Chakra UI v3's new theming system with:

- **Semantic Tokens**: Colors that adapt to light/dark mode
- **CSS Variables**: Automatic CSS custom property generation
- **Type Safety**: Full TypeScript support for theme tokens

### Color Scheme
- **Light Mode**: Soft grays and whites
- **Dark Mode**: Dark grays and blacks
- **Semantic Colors**: Primary, secondary, accent, success, warning, error

## 🔧 Configuration Files

### Vite Configuration (`vite.config.ts`)
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### TypeScript Configuration (`tsconfig.json`)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 🚀 Development Commands

### Start Development Server
```bash
npm run dev
```
Runs the app in development mode at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Creates optimized production build in `dist/` folder

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally

### Lint Code
```bash
npm run lint
```
Runs ESLint to check code quality

## 🎯 Key Components

### App Architecture
- **App.tsx**: Main application with state management
- **GameQuery Interface**: Centralized state for filters
- **Custom Hooks**: Reusable logic for data fetching

### Component Features
- **GameGrid**: Displays games with loading states
- **GameCard**: Individual game display with platform icons
- **NavBar**: Search and theme toggle
- **GenreList**: Sidebar genre filtering
- **PlatformSelector**: Platform filtering dropdown
- **SortSelector**: Game sorting options

## 🌐 API Integration

### Game Data Source
The app fetches game data from a gaming API, including:
- Game details and metadata
- Platform information
- Genre classifications
- Rating and review data
- Game images and screenshots

### API Services
- **apiClient.ts**: Centralized API configuration
- **imageUrl.ts**: Image URL processing utilities
- **Custom Hooks**: Data fetching with caching

## 🎨 UI/UX Features

### Responsive Design
- Mobile-first approach
- Breakpoint system: sm, md, lg, xl, 2xl
- Adaptive layouts for different screen sizes

### Accessibility
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast themes

### Performance
- Lazy loading of images
- Optimized re-renders with useCallback/useMemo
- Efficient state management
- CSS-in-JS with Chakra UI

## 🔄 State Management

### Game Query State
```typescript
interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
  searchText: string
}
```

### State Updates
- Optimized with useCallback to prevent unnecessary re-renders
- Server-side filtering for better performance
- Debounced search input

## 🧪 Testing

### Manual Testing Checklist
- [ ] Dark/light mode toggle
- [ ] Genre filtering
- [ ] Platform filtering
- [ ] Search functionality
- [ ] Sorting options
- [ ] Responsive design
- [ ] Loading states
- [ ] Error handling

## 🚀 Deployment

### Build Process
1. Run `npm run build`
2. Test with `npm run preview`
3. Deploy `dist/` folder to hosting service

### Recommended Hosting
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📝 Development Notes

### Chakra UI v3 Migration
- Updated from v2 to v3 syntax
- Replaced deprecated components
- Implemented new theming system
- Fixed component API changes

### Performance Optimizations
- Memoized expensive operations
- Optimized re-render patterns
- Efficient data fetching
- Image optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Chakra UI team for the excellent component library
- React team for the amazing framework
- Vite team for the fast build tool
- Gaming API providers for the data

---

**Built with ❤️ using React, TypeScript, and Chakra UI v3**
