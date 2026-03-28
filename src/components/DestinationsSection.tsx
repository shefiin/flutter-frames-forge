import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import coastImg from "@/assets/moyar.png";
import mountainImg from "@/assets/par-tiger.jpg";
import rainforestImg from "@/assets/masinagudi.jpg";

const destinations = [
  {
    title: "Muthumalai",
    subtitle: "Moyar Waterfalls",
    description: "Cascading waterfalls, rocky gorges, and dense forests echoing with wilderness.",
    image: coastImg,
    tag: "Untamed",
  },
  {
    title: "Parambikkulam",
    subtitle: "Tiger Reserve",
    description: "Dense teak forests, mist-covered hills, and silent backwaters echoing with wildlife.",
    image: mountainImg,
    tag: "Scenic",
  },
  {
    title: "Masinagudi",
    subtitle: "Road Trip",
    description: "Golden grasslands, misty hill backdrops, and wildlife crossing quiet jungle roads.",
    image: rainforestImg,
    tag: "Immersive",
  },
];

const DestinationCard = ({
  destination,
  index,
  className = "",
}: {
  destination: (typeof destinations)[0];
  index: number;
  className?: string;
}) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${className}`}
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const activeCard = container.querySelector<HTMLElement>("[data-default-card='true']");
      if (!activeCard) {
        return;
      }

      const left =
        activeCard.offsetLeft - (container.clientWidth - activeCard.clientWidth) / 2;

      container.scrollTo({
        left: Math.max(0, left),
        behavior: "auto",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

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

        <div
          ref={scrollContainerRef}
          className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:px-6 md:gap-6 lg:gap-8"
        >
          <div aria-hidden="true" className="w-[11%] shrink-0 md:w-[27%] lg:w-[31%] xl:w-[34%]" />
          {destinations.map((dest, i) => (
            <div
              key={dest.title}
              data-default-card={i === 1 ? "true" : undefined}
              className="w-[78%] shrink-0 snap-center md:w-[46%] lg:w-[38%] xl:w-[32%]"
            >
              <DestinationCard destination={dest} index={i} className="min-h-full" />
            </div>
          ))}
          <div aria-hidden="true" className="w-[11%] shrink-0 md:w-[27%] lg:w-[31%] xl:w-[34%]" />
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
