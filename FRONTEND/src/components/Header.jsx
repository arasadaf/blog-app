import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { 
  navbarClass, 
  navContainerClass, 
  navBrandClass, 
  navLinksClass, 
  navLinkClass, 
  navLinkActiveClass,
  mobileMenuOverlay,
  mobileMenuLink
} from "../styles/common";
import { useAuth } from "../store/authStore";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useAuth(state => state.isAuthenticated);
  const currentUser = useAuth(state => state.currentUser);
  const logout = useAuth(state => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate("/login");
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
     <header className={navbarClass}>
       <div className={navContainerClass}>
         <NavLink to="/" className={navBrandClass} onClick={closeMenu}>
           <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center text-white font-black">B</div>
             <span>BlogApp</span>
           </div>
         </NavLink>

         {/* Desktop Nav */}
         <nav className={navLinksClass}>
           <NavLink to="/" className={({isActive}) => isActive ? navLinkActiveClass : navLinkClass}>Home</NavLink>
           
           {!isAuthenticated ? (
             <>
               <NavLink to="/login" className={({isActive}) => isActive ? navLinkActiveClass : navLinkClass}>Login</NavLink>
               <NavLink to="/register" className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-indigo-700 shadow-md shadow-indigo-500/20 transition">Get Started</NavLink>
             </>
           ) : (
             <>
               {currentUser?.role === "AUTHOR" && (
                 <NavLink to="/authordashboard" className={({isActive}) => isActive ? navLinkActiveClass : navLinkClass}>Dashboard</NavLink>
               )}
               {currentUser?.role === "USER" && (
                 <NavLink to="/userdashboard" className={({isActive}) => isActive ? navLinkActiveClass : navLinkClass}>Dashboard</NavLink>
               )}
               <button onClick={handleLogout} className="text-gray-500 hover:text-red-500 text-sm font-bold transition cursor-pointer">
                 Logout
               </button>
             </>
           )}
         </nav>

         {/* Mobile Menu Button */}
         <button 
           className="md:hidden flex flex-col gap-1.5 z-[70] p-2"
           onClick={() => setIsMenuOpen(!isMenuOpen)}
         >
           <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
           <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
           <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
         </button>

         {/* Mobile Menu Overlay */}
         {isMenuOpen && (
           <div className={mobileMenuOverlay}>
             <NavLink to="/" className={mobileMenuLink} onClick={closeMenu}>Home</NavLink>
             {!isAuthenticated ? (
               <>
                 <NavLink to="/login" className={mobileMenuLink} onClick={closeMenu}>Login</NavLink>
                 <NavLink to="/register" className="bg-indigo-600 text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg" onClick={closeMenu}>Get Started</NavLink>
               </>
             ) : (
               <>
                 {currentUser?.role === "AUTHOR" && (
                   <NavLink to="/authordashboard" className={mobileMenuLink} onClick={closeMenu}>Dashboard</NavLink>
                 )}
                 {currentUser?.role === "USER" && (
                   <NavLink to="/userdashboard" className={mobileMenuLink} onClick={closeMenu}>Dashboard</NavLink>
                 )}
                 <button onClick={handleLogout} className="text-red-500 text-2xl font-bold">
                   Logout
                 </button>
               </>
             )}
           </div>
         )}
       </div>
     </header>
  );
}

export default Header;