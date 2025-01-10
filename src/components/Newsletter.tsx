import { Container } from "./ui/container";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Newsletter() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@herado.org", label: "Email" },
  ];

  return (
    <section className="py-20 bg-forest dark:bg-forest/80 text-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-8 text-white/80">
            Connect with us on social media to stay updated on our environmental initiatives
            and join our community of change-makers.
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}