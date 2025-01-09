import { useState } from "react";
import { Container } from "./ui/container";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-forest text-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8 text-white/80">
            Subscribe to our newsletter for the latest updates on our environmental
            initiatives and upcoming events.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-forest-light"
            />
            <button
              type="submit"
              className="bg-white text-forest hover:bg-earth-light transition-colors px-6 py-3 rounded-md font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}