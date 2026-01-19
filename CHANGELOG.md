# Changelog

All notable changes to the **Classroom of the Elite Reader** project will be documented in this file.

## [2.01] - 2026-01-19

### ✨ New Features
- **Loading Skeletons**: Added instant skeleton states to all major routes.
  - Covers Root, Select, Year 1/2/3, Volume Detail, Characters, and Donate pages.
  - Skeletons match actual content layout to prevent jarring layout shifts.
- **Smooth Page Transitions**: Implemented a global `template.tsx` with subtle fade-in and slide-up animations.
- **Smart Carousel Navigation**: Left/right arrows now hide when at the first/last item for a cleaner UX.
- **"IN PROGRESS" Markers**: Added visual overlays with disabled interaction for:
  - Class A, Class B, and Student Council in Characters page.
  - Year 3 Side Stories (SS1, SS2, SS3) in Volume lists.
- **Pre-Generated Content**: Main Volume content is now pre-generated for faster loading.

### ⚡ Performance Optimizations
- **Gzip Compression**: Enabled `compress: true` in Next.js config for faster asset delivery.
- **Lazy Modal Loading**: Auth and Profile modals now load on-demand using `next/dynamic`, reducing initial bundle size.
- **Responsive Image Sizes**: Added proper `sizes` attributes to all critical images so mobile devices don't download oversized assets.
- **Smart Priority Loading**: Only the first 6 volume covers load eagerly; the rest lazy load as you scroll.
- **Carousel Optimization**: `HorizontalCarousel` uses `requestAnimationFrame` throttling for smooth scrolling.

### 🎨 UI/UX Improvements
- **Profile Modal Overhaul**: Fixed scrolling issues, improved mobile responsiveness, and enhanced contrast.
- **User Menu Positioning**: Reduced gap between avatar and dropdown menu for better alignment.
- **Character Card Sizing**: Adjusted dimensions and scaling to prevent clipping on both mobile and desktop.
- **Year Selection Cards**: Fixed vertical alignment on mobile views.
- **Side Panel Titles**: Shortened long titles in Y1V6 side panel for better readability.

### 🐛 Bug Fixes
- Fixed major layout shifts in the sidebar and layout cards.
- Resolved `Next/Image` quality configuration warnings.
- Fixed Profile Modal structure issues that were causing build errors.
- Fixed Y1V5 Side Stories content and image swap.
- Resolved `reactStrictMode` related issues.
- Fixed errors and bugs regarding quality assurance server laoding. 
### 🧹 Code Cleanup
- Removed redundant `Suspense` wrappers in Year pages.
- Removed unused code and imports.

---

## [1.0] - 2026-01-11

### ✨ New Features
- **Advanced Keyboard Shortcuts**: Added power-user controls for PC reading.
  - **Navigation**: Use `←` / `→` or vim-style `H` / `L` to change chapters.
  - **Quick Search**: Press `/` to instantly open sidebar and focus search.
  - **Toggles**: `F` (Fullscreen), `M` (Menu), `S` (Settings), `T` (Theme), `C` (Comments).
  - **Help**: Press `Ctrl + /` to toggle a new shortcuts cheat sheet.
- **Shortcuts Modal**: Implemented a beautiful, dark-themed modal to display all available keybinds.

### ⚡ Improvements & Polish
- **UI UX**: Added visual hints for shortcuts in the search bar and footer.
- **Accessibility**: Improved ARIA labels for reader control buttons.
- **Performance**: Optimized re-rendering logic in `HtmlReader` for better stability.
- **Documentation**: Updated README to include new features and badges.

### 🐛 Bug Fixes
- Fixed minor layout shifts in the sidebar.
- Resolved build errors related to state initialization.
- Fixed shortcut collisions (e.g., separating Search `/` from Help).
