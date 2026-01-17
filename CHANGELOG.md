# Changelog

All notable changes to the **Classroom of the Elite Reader** project will be documented in this file.

## [Unreleased] - 2026-01-18

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
