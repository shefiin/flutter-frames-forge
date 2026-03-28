import { motion } from "framer-motion";
import heroImage from "@/assets/hero-forest.jpg";

const CtaSection = () => {
  return (
    <section id="book" className="relative py-40 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/85" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <p className="text-sand font-body text-xs uppercase tracking-[0.3em] mb-4">
          Begin Your Journey
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-semibold text-warm-white leading-tight mb-6">
          The Earth Is Calling.
          <br />
          <span className="italic text-[#9bcf9b]">Will You Answer?</span>
        </h2>
        <p className="text-warm-white/60 font-body font-extralight text-sm md:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Speak with our journey designers to craft a bespoke eco-adventure 
          tailored to your rhythm.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-12 py-4 bg-moss-light text-forest rounded-full font-body font-semibold text-sm uppercase tracking-wider transition-all duration-500 hover:bg-warm-white hover:shadow-lg hover:shadow-sand/20"
          >
            Plan My Journey
          </a>
          <a
            href="#"
            className="px-12 py-4 border border-warm-white/30 text-warm-white rounded-full font-body font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:bg-warm-white/10"
          >
            View Calendar
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
