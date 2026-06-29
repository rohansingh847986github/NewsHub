// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinkClass = ({ isActive }) =>
//     `block px-3 py-2 rounded-md text-sm font-medium transition ${
//       isActive
//         ? "text-blue-500"
//         : "text-gray-300 hover:text-white hover:bg-gray-700"
//     }`;

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50">
//       <div className="max-w-7xl mx-auto px-5">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <NavLink
//             to="/"
//             className="text-2xl font-bold text-white tracking-wide"
//           >
//             News
//           </NavLink>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-2">
//             <NavLink to="/" className={navLinkClass}>
//               Home
//             </NavLink>

//             <NavLink to="/business" className={navLinkClass}>
//               Business
//             </NavLink>

//             <NavLink to="/entertainment" className={navLinkClass}>
//               Entertainment
//             </NavLink>

//             <NavLink to="/health" className={navLinkClass}>
//               Health
//             </NavLink>

//             <NavLink to="/science" className={navLinkClass}>
//               Science
//             </NavLink>

//             <NavLink to="/sports" className={navLinkClass}>
//               Sports
//             </NavLink>

//             <NavLink to="/technology" className={navLinkClass}>
//               Technology
//             </NavLink>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden pb-4">
//             <NavLink
//               to="/"
//               className={navLinkClass}
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </NavLink>

//             <NavLink
//               to="/business"
//               className={navLinkClass}
//               onClick={() => setIsOpen(false)}
//             >
//               Business
//             </NavLink>

//             <NavLink
//               to="/entertainment"
//               className={navLinkClass}
//               onClick={() => setIsOpen(false)}
//             >
//               Entertainment
//             </NavLink>

//             <NavLink
//               to="/health"
//               className={navLinkClass}
//               onClick={() => setIsOpen(false)}
//             >
//               Health
//             </NavLink>

//             <NavLink
//               to="/science"
//               className={navLinkClass}
//               onClick={() => setIsOpen(false)}
//             >
//               Science
//             </NavLink>

//             <NavLink
//               to="/sports"
//               className={navLinkClass}
//               onClick={() => setIsOpen(false)}
//             >
//               Sports
//             </NavLink>

//             <NavLink
//               to="/technology"
//               className={navLinkClass}
//               onClick={() => setIsOpen(false)}
//             >
//               Technology
//             </NavLink>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  // const navLink = ({ isActive }) =>
  //   `relative px-3 py-2 rounded-lg font-medium transition-all duration-300
  //   ${isActive ? "text-blue-500" : "text-white/90 hover:text-blue-400"}`;

  const navLink = ({ isActive }) =>
    `relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      isActive
        ? "text-blue-600 bg-blue-50"
        : scrolled
          ? "text-white hover:text-blue-400"
          : "text-gray-800 hover:text-blue-600"
    }`;

  return (
    // <header
    //   className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    //     scrolled
    //       ? "bg-slate-950/90 backdrop-blur-xl shadow-xl border-b border-white/10"
    //       : "bg-transparent"
    //   }`}
    // >
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-xl shadow-lg"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}

          {/* <NavLink
            to="/"
            className="text-3xl font-black tracking-wide text-white"
          >
            📰 News<span className="text-blue-500">Hub</span>
          </NavLink> */}

          <NavLink
            to="/"
            className={`text-3xl font-extrabold transition-colors duration-300 ${
              scrolled ? "text-white" : "text-gray-900"
            }`}
          >
            📰 <span className="text-blue-600">News</span>Hub
          </NavLink>

          {/* Desktop */}

          <nav className="hidden lg:flex items-center gap-2">
            <NavLink to="/" end className={navLink}>
              Home
            </NavLink>

            {links.slice(1).map((item) => (
              <NavLink key={item} to={`/${item}`} className={navLink}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Button */}

          {/* <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
          </button> */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden transition-colors duration-300 ${
              scrolled ? "text-white" : "text-gray-900"
            }`}
          >
            {menuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="bg-slate-900 text-white backdrop-blur-xl px-6 py-4 space-y-2">
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            className="block py-3 px-4 rounded-lg hover:bg-slate-800"
          >
            Home
          </NavLink>

          {links.slice(1).map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              onClick={() => setMenuOpen(false)}
              className="block py-3 px-4 rounded-lg hover:bg-slate-800"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
