"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

export default function NavBar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" }
  ];

  const getDesktopLinkStyle = (path) =>
    pathname === path
      ? "bg-white/90 text-[#FA9DA6] px-10 py-1 rounded-full shadow-sm"
      : "text-white hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] px-10 py-1";

  const getMobileLinkStyle = (path) =>
    pathname === path
      ? "bg-white/90 text-[#FA9DA6] w-full text-center py-3 rounded-full shadow-md"
      : "text-[#FA9DA6] hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] w-full text-center py-3 transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(255,255,255,1)]";

  return (
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        bg-transparent py-4 md:py-8`}
      >
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-6 md:px-0">
          {/* LEFT LINKS */}
          <div className="hidden md:flex flex-1 justify-evenly items-center">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-lg font-bold transition-all duration-300 font-arial ${getDesktopLinkStyle(link.path)}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CENTER TITLE */}
          <div className={`md:flex-1 flex justify-center transition-all duration-300 
            ${menuOpen ? "blur-md opacity-60 scale-95 md:blur-none md:opacity-100 md:scale-100" : "blur-0 opacity-100"}`}
          >
            <img
              src="/images/title.png"
              alt="Title"
              className="object-contain w-[120px] md:w-[200px]"
            />
          </div>

          {/* RIGHT LINKS */}
          <div className="hidden md:flex flex-1 justify-evenly items-center">
            {navLinks.slice(2, 4).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-lg font-bold transition-all duration-300 font-arial ${getDesktopLinkStyle(link.path)}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

         {/* SHADCN MOBILE MENU */}
          <div className="md:hidden flex flex-1 justify-end items-center">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <button className="text-white p-2 hover:scale-110 transition-transform">
                  <Menu size={25} />
                </button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[280px] bg-[#F3E2C6] border-none flex flex-col items-center pt-20 z-[150]"
              >
                <SheetHeader className="mb-10">
                  <SheetTitle>
                    <img
                      src="/images/title.png"
                      alt="Title"
                      className="object-contain w-[120px]"
                    />
                  </SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col items-center w-full gap-6 px-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`text-xl font-bold font-arial transition-all duration-300 ${getMobileLinkStyle(link.path)}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
  );
}