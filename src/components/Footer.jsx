import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const items = [
    { icon: <VscHome size={18} />, label: "Home", onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={18} />, label: "About Me", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive size={18} />, label: "Project", onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <div className="mt-32 pb-8 flex flex-col items-center relative z-10">
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="text-2xl font-bold">Portofolio</h1>
          <div className="flex gap-3 items-center">
            <a href="https://github.com/avishka-hashara" className="text-gray-400 hover:text-white transition-colors"><i className="ri-github-fill ri-2x"></i></a>
            <a href="https://www.instagram.com/avishka_hashara" className="text-gray-400 hover:text-white transition-colors"><i className="ri-instagram-fill ri-2x"></i></a>
            <a href="https://www.youtube.com/@infinity_ahashara" className="text-gray-400 hover:text-white transition-colors"><i className="ri-youtube-fill ri-2x"></i></a>
            <a href="https://x.com/HasharaAvishka" className="text-gray-400 hover:text-white transition-colors"><FaTwitter size={28} /></a>
            <a href="www.linkedin.com/in/avishkahashara" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={28} /></a>
            <a href="https://www.facebook.com/profile.php?id=100012875296379" className="text-gray-400 hover:text-white transition-colors"><FaFacebook size={28} /></a>
          </div>
          <p className="text-sm text-gray-500">Made with ❤️ using React & Tailwind CSS</p>
          <p className="text-sm text-gray-500">© 2024 Avishka Hashara. All rights reserved.</p>
        </div>
        <div className="order-3 md:order-none mt-15 md:mt-0  md:mb-0">
          <Dock 
            items={items}
            panelHeight={30}
            baseItemSize={60}
            magnification={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
