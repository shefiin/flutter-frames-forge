import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        <a href="#" className="font-display text-2xl font-semibold tracking-tight">
          <span className={scrolled ? "text-foreground" : "text-warm-white"}>
            Verdant
          </span>
          <span className={scrolled ? "text-moss-light" : "text-sand"}>
            {" "}Trails
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-moss-light ${
                scrolled ? "text-foreground" : "text-warm-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className={`text-sm font-semibold tracking-wide uppercase px-6 py-2.5 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-moss-light"
                : "bg-warm-white/15 text-warm-white border border-warm-white/30 hover:bg-warm-white/25"
            }`}
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-warm-white"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground text-lg font-medium tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#book"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
