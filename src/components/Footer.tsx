const Footer = () => {
  return (
    <footer id="about" className="bg-foreground py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-semibold text-background mb-4">
              Sahachari <span className="text-[#9bcf9b]">Tours</span>
            </h3>
            <p className="text-background/50 font-body text-sm leading-relaxed max-w-sm">
              Eco-tourism experiences that connect you to Earth's most extraordinary 
              landscapes while preserving them for generations to come.
            </p>
          </div>
          <div>
            <h4 className="text-background font-body font-semibold text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {["Destinations", "Experiences", "Sustainability", "Journal"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/50 font-body text-sm hover:text-sand transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-background font-body font-semibold text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {["Instagram", "Newsletter", "Press", "Careers"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/50 font-body text-sm hover:text-sand transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 justify-center items-center gap-4">
          <p className="text-background/30 font-body text-xs">
            © 2025 Sahachari Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
