# Ionic Pokédex - README

## 🚀 Overview
An interactive Pokédex built with **Ionic 7 + Angular**, combining performance with authentic Pokémon experience. Uses **standalone components** and lazy loading for optimization.

## 🎨 UI/UX Design
- **Official Pokémon visual identity** with type-specific colors, gradients and icons
- **Responsive grid** adapting from smartphones to desktops
- **Fluid animations**, smooth transitions and visual feedback (hover effects)
- **Modular SCSS** with global variables and reusable mixins

## ⚙️ Architecture & Code
- **TypeScript** with strict typing and well-defined interfaces
- **Efficient PokeAPI consumption** (RESTful) via `HttpClient`
- State management: loading, error and async data handling with **RxJS**
- **Lazy loading** for images and routes
- **Feature-based** folder structure

## 📱 Platform
- Works as **PWA** (Progressive Web App)
- **Accessibility** compliant (ARIA labels, proper contrast)

## 🔧 Coding Standards
```markdown
- English naming: `pokemon-list.component.ts`
- Self-contained components with `@Input()`/`@Output()`
- Consistent breakpoints: `$mobile: 576px`
- Semantic Git commits (feat:, fix:, style:)
