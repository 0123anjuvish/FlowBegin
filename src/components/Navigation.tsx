"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeartHandshake, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/work", label: "Our Work" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="header">
      <div className="container nav-container">
        <Link href="/" className="logo">
          <img 
            src="/logo.png" 
            alt="Flowbegin Logo" 
            style={{ 
              height: "100px", 
              width: "auto", 
              objectFit: "contain",
              display: "block"
            }} 
          />
        </Link>
        
        <button 
          className="nav-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
