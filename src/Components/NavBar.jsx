import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { ResponsiveMenu } from "./ResponsiveMenu";
import { navItems } from "../assets/data/data";
import { cn } from "../lib/util";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <nav className="fixed w-full flex items-center justify-center z-40">
      {/* Desktop Version */}
      <div
        className={cn(
          "hidden w-full sm:max-w-3xl p-4 sm:flex items-center justify-around text-text-secondary transition-colors sm:rounded-full",
          isScrolled ? "shadow-sm  shadow-accent bg-background text-text-primary mt-2" : ""
        )}
      >
        <div className="hidden md:flex items-center gap-6 font-medium">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="relative inline-block py-1 px-2 transition-colors duration-200 hover:text-accent group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden shadow-sm cursor-pointer p-4 mx-auto flex flex-row items-center justify-end gap-4 bg-background w-full">
        <div>
          <ThemeToggle />
        </div>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}> 
          {!isMenuOpen ? (
            <RiMenu3Line className="text-3xl text-text-primary" />
          ) : (
            <IoCloseOutline className="text-3xl text--text-primary" />
          )}
        </div>
      </div>
      {/* Mobile Sidebar */}
      <ResponsiveMenu open={isMenuOpen} setOpen={setIsMenuOpen} />
    </nav>
  );
};
