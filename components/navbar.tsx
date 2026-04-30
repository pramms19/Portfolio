"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode_toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: 1, name: "Home", to: "#home" },
    { id: 2, name: "About", to: "#about" },
    { id: 3, name: "Skills", to: "#skills" },
    { id: 4, name: "Projects", to: "#projects" },
    { id: 5, name: "Contact", to: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="flex items-center justify-between bg-background/80 backdrop-blur-md border border-muted rounded-full px-3 py-2 shadow-sm">
        
        {/* Logo or Name */}
        <div className="flex-1 flex items-center pl-2">
          <span className="font-bold text-sm tracking-tight text-primary">PS</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex flex-2 justify-center items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <a
                    href={item.to}
                    onClick={(e) => handleScroll(e, item.to)}
                    className="text-muted-foreground text-sm hover:text-primary font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Theme Toggle + Mobile Menu */}
        <div className="flex-1 flex items-center justify-end gap-2 pr-1">
          <ModeToggle />
          
          {/* Mobile Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground p-1 hover:bg-accent rounded-full transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md p-4 space-y-2 rounded-2xl mt-2 border border-border shadow-lg animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.to}
              onClick={(e) => handleScroll(e, item.to)}
              className="block text-sm md:text-base text-foreground hover:text-primary font-medium transition-colors px-2 py-1"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}