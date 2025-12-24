import { Play, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Short Form", href: "#shorts" },
    { label: "Long Form", href: "#longform" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-card border-t border-border/50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center">
                <Play className="w-5 h-5 text-primary-foreground fill-current" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                FrameCraft
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed">
              Professional video editing services for creators and brands.
              Turning raw footage into powerful stories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Follow My Work
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors border border-border"
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} FrameCraft. All rights reserved. Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
