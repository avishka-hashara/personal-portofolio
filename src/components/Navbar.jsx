import { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = ({ hidden = false }) => {
  if (hidden) return null;

  const [active, setActive] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = (
    <>
      <li><a href="#home" className="sm:text-lg text-base font-medium">Home</a></li>
      <li><a href="#about" className="sm:text-lg text-base font-medium">About</a></li>
      <li><a href="#project" className="sm:text-lg text-base font-medium">Project</a></li>
      <li><a href="#contact" className="sm:text-lg text-base font-medium bg-gray-800 px-4 py-2 rounded-full">Contact Me</a></li>
    </>
  );

  return (
    <nav className={`navbar relative z-50 py-7 flex items-center justify-between px-6 md:px-12 ${active ? 'bg-white/10 backdrop-blur-md' : ''}`}>
      <div className="logo">
        <h1 className="text-3xl font-bold text-white p-1 md:bg-transparent md:text-white">
          Portofolio
        </h1>
      </div>

      <ul className="hidden md:flex items-center sm:gap-10 gap-4">
        {menu}
      </ul>

      <div className="flex md:hidden items-center">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <ul className="flex flex-col items-center gap-4 absolute top-20 right-0 bg-white/10 backdrop-blur-md p-4 rounded-lg">
            {menu}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
