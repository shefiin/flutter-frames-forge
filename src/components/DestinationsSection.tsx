import { motion } from "framer-motion";
import { useRef } from "react";
import coastImg from "@/assets/destination-coast.jpg";
import mountainImg from "@/assets/destination-mountain.jpg";
import rainforestImg from "@/assets/destination-rainforest.jpg";

const destinations = [
  {
    title: "Emerald Coast",
    subtitle: "Costa Rica",
    description: "Hidden coves, bioluminescent bays, and canopy lodges perched above the Pacific.",
    image: coastImg,
    tag: "Coastal",
  },
  {
    title: "Cloud Peaks",
    subtitle: "Patagonia",
    description: "Ancient glaciers, volcanic hot springs, and trails through untouched wilderness.",
    image: mountainImg,
    tag: "Alpine",
  },
  {
    title: "Canopy Walk",
    subtitle: "Borneo",
    description: "Walk among the world's oldest rainforest canopy with endemic wildlife encounters.",
    image: rainforestImg,
    tag: "Tropical",
  },
];

const DestinationCard = ({
  destination,
  index,
}: {
  destination: (typeof destinations)[0];
  index: number;
}) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          loading="lazy"
          width={800}
          height={1024}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent" />

      {/* Tag */}
      <div className="absolute top-6 left-6">
        <span className="text-xs uppercase tracking-[0.2em] text-sand font-body bg-forest/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
          {destination.tag}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <p className="text-sand/80 font-body text-xs uppercase tracking-[0.2em] mb-2">
          {destination.subtitle}
        </p>
        <h3 className="font-display text-3xl md:text-4xl font-semibold text-warm-white mb-3">
          {destination.title}
        </h3>
        <p className="text-warm-white/60 font-body text-sm leading-relaxed max-w-xs opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          {destination.description}
        </p>
      </div>
    </motion.div>
  );
};

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-32 px-6 lg:px-12 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-moss-light font-body text-xs uppercase tracking-[0.3em] mb-4">
            Curated Journeys
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-foreground leading-tight">
            Destinations That
            <br />
            <span className="italic text-moss-light">Breathe Life</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.title} destination={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
