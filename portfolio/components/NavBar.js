"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      const isMovingUp = currentScroll < lastScroll && currentScroll > 50;
      const isMovingDown = currentScroll > lastScroll && currentScroll > 50;

      setScrollingUp(isMovingUp);
      setHidden(isMovingDown);
      
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const linkClass = (path) =>
    pathname === path
      ? "text-2xl font-bold text-[#8EB694] drop-shadow-[0_0_5px_#8EB694] drop-shadow-[0_0_10px_#8EB694] transition-all duration-300 font-arial"
      : "text-2xl font-semibold text-white hover:text-white hover:drop-shadow-[0_0_3px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-arial";

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 pointer-events-auto transition-all duration-500 ease-in-out
        ${hidden ? "opacity-100 -translate-y-full" : "opacity-100 translate-y-0"}
        bg-transparent py-8`}
      >
        <div className="flex justify-between items-center w-11/12 max-w-6xl mx-auto">
          {/* LEFT LINKS */}
          <div className="flex flex-1 justify-evenly">
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/about" className={linkClass("/about")}>About</Link>
          </div>

          {/* CENTER TITLE */}
          <div className="flex-1 flex justify-center">
            <img
              src="/images/title.png"
              alt="Title"
              className="object-contain w-[20vw] max-w-[200px]"
            />
          </div>

          {/* RIGHT LINKS */}
          <div className="flex flex-1 justify-evenly">
            <Link href="/projects" className={linkClass("/projects")}>Projects</Link>
            <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
}