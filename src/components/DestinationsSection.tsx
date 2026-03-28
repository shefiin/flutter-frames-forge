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
      className={`group relative overflow-hidden rounded-xl cursor-pointer sm:rounded-2xl ${className}`}
    >
      <div className="aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
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
      <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
        <span className="rounded-full bg-forest/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-sand backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
          {destination.tag}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
        <p className="mb-2 font-body text-[10px] uppercase tracking-[0.18em] text-sand/80 sm:text-xs sm:tracking-[0.2em]">
          {destination.subtitle}
        </p>
        <h3 className="mb-2 font-display text-[1.75rem] font-semibold leading-tight text-warm-white sm:mb-3 sm:text-3xl md:text-4xl">
          {destination.title}
        </h3>
        <p className="max-w-xs font-body text-xs leading-relaxed text-warm-white/65 opacity-100 transition-all duration-500 sm:text-sm sm:opacity-0 sm:translate-y-4 sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
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
          className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:hidden"
        >
          <div aria-hidden="true" className="w-[13%] shrink-0" />
          {destinations.map((dest, i) => (
            <div
              key={dest.title}
              data-default-card={i === 1 ? "true" : undefined}
              className="w-[74%] shrink-0 snap-center"
            >
              <DestinationCard destination={dest} index={i} className="min-h-full" />
            </div>
          ))}
          <div aria-hidden="true" className="w-[13%] shrink-0" />
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-3 lg:gap-8">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.title} destination={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
