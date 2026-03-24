import { motion } from "framer-motion";
import { Leaf, Mountain, Waves, TreePine } from "lucide-react";

const experiences = [
  {
    icon: Leaf,
    title: "Botanical Immersions",
    description: "Guided walks through ancient medicinal gardens with indigenous botanists who share generations of plant wisdom.",
  },
  {
    icon: Mountain,
    title: "Summit Ceremonies",
    description: "Dawn hikes to sacred peaks ending with meditative practices and panoramic views that reshape perspective.",
  },
  {
    icon: Waves,
    title: "Tidal Rhythms",
    description: "Kayak through mangrove estuaries, snorkel with sea turtles, and learn coastal conservation firsthand.",
  },
  {
    icon: TreePine,
    title: "Forest Bathing",
    description: "Multi-day stays in architect-designed treehouses with guided shinrin-yoku and wildlife observation.",
  },
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="py-32 px-6 lg:px-12 bg-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left column - heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-moss-light font-body text-xs uppercase tracking-[0.3em] mb-4">
              Transformative Encounters
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-8">
              Experiences Rooted in
              <br />
              <span className="italic text-moss-light">Reverence</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-lg">
              Every journey is designed to deepen your connection to the natural world — 
              not just as a visitor, but as a participant in its preservation.
            </p>

            <div className="mt-10 flex items-center gap-8">
              <div>
                <p className="font-display text-4xl font-semibold text-foreground">12</p>
                <p className="text-muted-foreground font-body text-sm mt-1">Countries</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-display text-4xl font-semibold text-foreground">98%</p>
                <p className="text-muted-foreground font-body text-sm mt-1">Carbon Offset</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-display text-4xl font-semibold text-foreground">5★</p>
                <p className="text-muted-foreground font-body text-sm mt-1">Rated</p>
              </div>
            </div>
          </motion.div>

          {/* Right column - experience cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-background border border-border hover:border-moss-light/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary/20">
                  <exp.icon className="w-5 h-5 text-moss-light" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
