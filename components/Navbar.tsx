"use client";

import { useState } from "react";
import { siteConfig, whatsappHref } from "@/data/site";

const links = [
  { href: "#about", label: "EL ARTISTA" },
  { href: "#work", label: "OBRA" },
  { href: "#process", label: "PROCESO" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Navegación principal">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          <span>{siteConfig.artistName}</span><i>NOIR / NEEDLE</i>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="main-menu" onClick={() => setIsOpen(!isOpen)}>
          <span>{isOpen ? "CERRAR" : "MENÚ"}</span><b aria-hidden="true">{isOpen ? "×" : "≡"}</b>
        </button>
        <div className={`nav-menu ${isOpen ? "is-open" : ""}`} id="main-menu">
          {links.map((link) => <a href={link.href} key={link.href} onClick={closeMenu}>{link.label}</a>)}
          <a className="nav-contact" href={whatsappHref} target="_blank" rel="noreferrer">CONTACTAR <span>↗</span></a>
        </div>
      </nav>
    </header>
  );
}
