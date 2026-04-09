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
} from "@/components/ui/sheet";

export default function NavBar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

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
      : "text-white hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] w-full text-center py-3 transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(255,255,255,1)]";

  return (
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        bg-transparent py-6 md:py-8`}
      >
        <div className="flex justify-between items-center w-11/12 max-w-6xl mx-auto">
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
          <div className="flex-1 flex justify-start md:justify-center">
            <img
              src="/images/title.png"
              alt="Title"
              className="object-contain w-[40vw] max-w-[150px] md:max-w-[200px]"
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
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-white p-2 hover:scale-110 transition-transform">
                  <Menu size={32} />
                </button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] bg-[#F3E2C6] border-none flex flex-col items-center pt-20"
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