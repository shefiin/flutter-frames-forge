import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";

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
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-500 sm:px-6 lg:px-8 ${
        scrolled ? "py-2" : "py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-[2rem] border px-6 py-4 transition-all duration-500 sm:px-8 ${
          scrolled
            ? "nav-scrolled"
            : "glass-card-dark border-white/15 bg-white/10 shadow-[0_10px_35px_hsl(160_40%_15%_/_0.12)]"
        }`}
      >
        <a href="#" className="group flex items-center gap-2">
          <span className="font-display text-xl font-semibold text-background">
              Sahachari <span className="text-[#9bcf9b]">Tours</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative font-body text-sm font-medium text-primary-foreground/80 transition-colors duration-300 hover:text-sand after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-sand after:content-[''] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="btn-leaf rounded-full border border-white/15 bg-white/12 px-6 py-2.5 font-body text-sm font-semibold text-primary-foreground backdrop-blur-md transition-colors duration-500 hover:bg-white/20"
          >
            Book Now
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-primary-foreground md:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mx-auto mt-3 w-full max-w-7xl md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <nav className="glass-card-dark flex flex-col gap-4 rounded-[1.75rem] border border-white/15 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 font-body text-primary-foreground/90 transition-colors hover:text-sand"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#book"
                className="btn-leaf mt-2 rounded-full border border-white/15 bg-white/12 px-6 py-3 text-center font-body text-sm font-semibold text-primary-foreground backdrop-blur-md"
              >
                Book Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
