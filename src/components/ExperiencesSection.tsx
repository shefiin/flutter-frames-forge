import { motion } from "framer-motion";
import encounterImage from "@/assets/encounter.png";
import jungleSafariImage from "@/assets/safari.jpg";
import natureTrailsImage from "@/assets/nature-trails.jpg";
import stayImage from "@/assets/stay.avif";

const experiences = [
  {
    image: jungleSafariImage,
    title: "Jungle Safaris",
    description:
      "Guided jeep safaris through Parambikulam, Mudumalai, and Bandipur with chances to spot tigers, elephants, and rare wildlife.",
  },
  {
    image: encounterImage,
    title: "Wildlife Encounters",
    description:
      "Close sightings of elephants, deer, gaur, and exotic bird species in their natural habitats.",
  },
  {
    image: stayImage,
    title: "Forest Stays",
    description:
      "Stay in eco-lodges and jungle resorts surrounded by untouched landscapes and serene environments.",
  },
  {
    image: natureTrailsImage,
    title: "Nature Trails",
    description:
      "Guided treks and forest walks through diverse terrains of the Western Ghats.",
  },
];

const stats = [
  { value: "5+", label: "Destinations" },
  { value: "100+", label: "Safaris Hosted" },
  { value: "4.9★", label: "Guest Rating" },
];

const ExperiencesSection = () => {
  return (
    <section
      id="experiences"
      className="bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--cream)/0.7)_100%)] px-6 py-32 lg:px-12"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-moss-light">
              Immersse Eco Experiences
            </p>

            <h2 className="max-w-2xl font-display text-5xl font-semibold leading-[1.05] text-foreground md:text-6xl">
              Explore the <span className="text-moss-light">Wild</span>, Responsibly
            </h2>

            <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-foreground/70">
              Curated eco-tour experiences across South India&apos;s finest reserves,
              blending adventure, conservation, and authentic nature stays.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-y-6 rounded-[1.75rem] border border-forest/8 bg-warm-white/40 px-6 py-5 backdrop-blur-sm sm:flex-nowrap sm:px-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex min-w-[140px] flex-1 items-center gap-5 ${
                    index < stats.length - 1 ? "sm:pr-6 lg:pr-8" : ""
                  }`}
                >
                  <div>
                    <p className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-body text-sm uppercase tracking-[0.18em] text-foreground/55">
                      {stat.label}
                    </p>
                  </div>

                  {index < stats.length - 1 && (
                    <div className="hidden h-14 w-px bg-forest/10 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-80px" }}
                className="group rounded-2xl border border-forest/10 bg-[linear-gradient(180deg,hsl(var(--warm-white)/0.72),hsl(var(--warm-white)/0.42))] p-6 shadow-[0_18px_45px_hsl(var(--forest)/0.06)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-moss-light/35 hover:shadow-[0_24px_55px_hsl(var(--forest)/0.12)] sm:p-8"
              >
                <div className="mb-6 h-14 w-14 overflow-hidden rounded-2xl border border-moss-light/15 bg-moss-light/10 transition-colors duration-500 group-hover:border-moss-light/30">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    width={56}
                    height={56}
                    loading="lazy"
                  />
                </div>

                <h3 className="font-body text-xl font-semibold text-foreground">
                  {experience.title}
                </h3>

                <p className="mt-3 font-body text-sm leading-relaxed text-foreground/65">
                  {experience.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
