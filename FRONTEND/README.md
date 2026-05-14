# 🎨 BlogApp Frontend

A stunning, responsive React frontend for the BlogApp platform, built with Vite and Tailwind CSS.

---

## 🛠️ Tech Stack
- **Library**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (Custom Glassmorphic Theme)
- **State Management**: Zustand
- **Routing**: React Router 6
- **API Client**: Axios

---

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 💎 Design System

The application uses a unified design system defined in `src/styles/common.js`. This ensures consistency across all pages and simplifies maintenance.

### Key Features:
- **Glassmorphism**: Cards and navbars use `backdrop-blur` and semi-transparent backgrounds for a premium feel.
- **Vibrant Gradients**: Used for buttons, text highlights, and icons.
- **Mobile First**: All components are built with responsive utility classes (`md:`, `lg:`, etc.) to ensure a seamless experience on mobile devices.

---

## 🔐 State Management
We use **Zustand** in `src/store/authStore.js` to manage global authentication state. This allows any component in the app to easily check if a user is logged in or access their profile information without complex prop drilling.

---

## 📱 Responsiveness
- **Navigation**: Collapses into a hamburger menu on screens smaller than 768px.
- **Dashboard**: Layout shifts from multi-column grids to single-column lists on mobile.
- **Typography**: Font sizes automatically scale down for better readability on small screens.
