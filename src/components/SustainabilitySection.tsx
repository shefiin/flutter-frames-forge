import { motion } from "framer-motion";

const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="relative py-32 px-6 lg:px-12 bg-forest overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-moss/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-sand/5 blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sand font-body text-xs uppercase tracking-[0.3em] mb-4">
            Our Promise
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-warm-white leading-tight mb-8">
            Travel That
            <br />
            <span className="italic text-[#9bcf9b]">Gives Back</span>
          </h2>
          <p className="text-warm-white/60 font-body font-extralight text-sm md:text-lg leading-relaxed mb-16">
            Every journey funds local conservation, supports indigenous communities, 
            and operates within a regenerative framework. We don't just minimize harm — 
            we actively restore.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
