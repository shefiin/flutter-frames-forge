import { motion } from "framer-motion";
import heroImage from "@/assets/parambikulam-reservoir-with-people-sitting-pravin-shanmuganandam-scaled_ytp9ye.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image with parallax-like zoom */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Misty bamboo forest at sunrise"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/30 to-forest/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          className="text-moss-light font-body text-sm md:text-base uppercase tracking-[0.3em] mb-6"
        >
          Nature-Led Travel
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-warm-white leading-[1.05] max-w-5xl text-balance"
        >
          Journeys Into
          <br />
          <span className="text-[#9bcf9b]">Living Landscapes</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
          className="text-warm-white/70 font-body text-sm md:text-lg max-w-2xl mt-8 leading-relaxed font-extralight"
        >
          Explore meaningful journeys shaped by nature, local culture, and moments
          that stay with you long after the trip ends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <a
            href="#destinations"
            className="group relative px-10 py-4 bg-moss-light text-warm-white rounded-full font-body font-semibold text-sm uppercase tracking-wider overflow-hidden transition-all duration-500 hover:bg-moss hover:shadow-lg hover:shadow-moss/20"
          >
            <span className="relative z-10">Explore Destinations</span>
          </a>
          <a
            href="#experiences"
            className="px-10 py-4 border border-warm-white/30 text-warm-white rounded-full font-body font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:bg-warm-white/10"
          >
            Our Story
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-transparent via-warm-white/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
