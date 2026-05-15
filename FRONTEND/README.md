#  BlogApp Frontend

A stunning, responsive React frontend for the BlogApp platform, built with Vite and Tailwind CSS.

---

<<<<<<< HEAD
##  Tech Stack
- **Library**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (Custom Glassmorphic Theme)
- **State Management**: Zustand
- **Routing**: React Router 6
- **API Client**: Axios
=======
## 🛠️ Tech Stack & Packages
### **Core Dependencies**
| Package | Version | Purpose |
| :--- | :--- | :--- |
| **react** | `^19.2.0` | Core UI library. |
| **vite** | `^7.3.2` | Next-generation frontend build tool. |
| **tailwindcss** | `^4.2.1` | Utility-first CSS framework for glassmorphic design. |
| **zustand** | `^5.0.11` | Minimalist state management for auth and app state. |
| **axios** | `^1.13.6` | Promise-based HTTP client for API requests. |
| **react-router** | `^7.13.1` | Declarative routing for React applications. |
| **react-hook-form** | `^7.71.2` | Performant form validation. |
| **react-hot-toast** | `^2.6.0` | Beautiful notifications for user actions. |
>>>>>>> cb18ab4 (docs: add schemas, packages, and updated deployment URLs)

---

##  Getting Started

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

<<<<<<< HEAD
##  Design System
=======
## 🌐 Deployment
The frontend is currently deployed and live at:
- **Platform**: Vercel
- **URL**: [https://blog-app-frontend-arasadafs-projects.vercel.app](https://blog-app-frontend-arasadafs-projects.vercel.app)
- **Status**: Live 🟢

---

## 💎 Design System
>>>>>>> cb18ab4 (docs: add schemas, packages, and updated deployment URLs)

The application uses a unified design system defined in `src/styles/common.js`. This ensures consistency across all pages and simplifies maintenance.

### Key Features:
- **Glassmorphism**: Cards and navbars use `backdrop-blur` and semi-transparent backgrounds for a premium feel.
- **Vibrant Gradients**: Used for buttons, text highlights, and icons.
- **Mobile First**: All components are built with responsive utility classes (`md:`, `lg:`, etc.) to ensure a seamless experience on mobile devices.

---

##  State Management
We use **Zustand** in `src/store/authStore.js` to manage global authentication state. This allows any component in the app to easily check if a user is logged in or access their profile information without complex prop drilling.

---

##  Responsiveness
- **Navigation**: Collapses into a hamburger menu on screens smaller than 768px.
- **Dashboard**: Layout shifts from multi-column grids to single-column lists on mobile.
- **Typography**: Font sizes automatically scale down for better readability on small screens.

- 
 ##   Technology Stack & Dependencies
Package	Version	Technical Rationale
react	
^19.2.0	Utilizes latest rendering patterns and hook-based lifecycle.
vite	
^7.3.1	Chosen for superior HMR (Hot Module Replacement) and build speed.
tailwindcss	
^4.2.1	Next-gen utility styling for consistent, responsive UI across screens.
react-router	
^7.13.1	Industry standard for SPAs; handles protected nested layouts efficiently.
zustand	
^5.0.11	Minimal state container. Used for high-performance session hydration.
axios	
^1.13.6	Configured with withCredentials to handle secure HTTP-Only cookies.
react-hook-form	
^7.71.2	Manages form state with zero re-renders on the main thread.
react-hot-toast	
^2.6.0	Elegant, non-blocking UI notifications for user actions.
