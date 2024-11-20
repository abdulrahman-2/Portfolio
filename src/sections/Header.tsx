"use client";

import { useState } from "react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 3,
    title: "Projects",
    url: "/projects",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },

  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState("/contact");

  return (
    <div className="flex justify-center items-center fixed z-50 w-full top-3">
      <nav className="flex gap-1 bg-white/10 p-0.5 border border-white/15 rounded-full">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            onClick={() => setActiveLink(link.url)}
            className={`nav-link ${
              activeLink === link.url &&
              "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
            }`}
          >
            {link.title}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Header;
