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
            <span className="italic text-sand">Gives Back</span>
          </h2>
          <p className="text-warm-white/60 font-body text-lg leading-relaxed mb-16">
            Every journey funds local conservation, supports indigenous communities, 
            and operates within a regenerative framework. We don't just minimize harm — 
            we actively restore.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: "2.4M", label: "Trees Planted", detail: "Across 8 reforestation sites" },
            { value: "100%", label: "Renewable Energy", detail: "All lodges solar or wind powered" },
            { value: "$3.2M", label: "Community Fund", detail: "Direct investment since 2019" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl border border-warm-white/10 bg-warm-white/5"
            >
              <p className="font-display text-5xl font-semibold text-sand mb-2">
                {stat.value}
              </p>
              <p className="text-warm-white font-body font-medium text-sm uppercase tracking-wider mb-2">
                {stat.label}
              </p>
              <p className="text-warm-white/40 font-body text-xs">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
