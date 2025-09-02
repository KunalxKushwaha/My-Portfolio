import { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";
import { gsap } from "gsap";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate nav items
      gsap.from(".nav-item", {
        opacity: 0,
        y: -20,
        stagger: 0.15,
        delay: 0.5,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 navbar transition-all duration-500 ${
        scrolled ? "scrolled" : "not-scrolled"
      }`}
    >
      <div className="inner max-w-[1280px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="logo text-xl font-bold">
          Kunal Kushwaha
        </a>

        {/* Desktop Nav */}
        <nav className="desktop">
          <ul className="flex gap-6">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group nav-item">
                <a
                  href={link}
                  className="relative inline-block transition-all duration-300"
                >
                  <span>{name}</span>
                  <span className="underline absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <a
          href="#contact"
          className="contact-btn group transition-transform duration-300 hover:scale-105"
        >
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
