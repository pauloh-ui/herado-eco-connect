import { Container } from "./ui/container";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-forest/20 to-earth-light/30"
          style={{
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
          }}
        />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86')] bg-cover bg-center opacity-40" />
      </div>

      <Container className="relative z-10 pt-20">
        <div className="max-w-3xl text-gray-800">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up [--animate-delay:200ms]">
            Protecting Earth's Future, Today
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up [--animate-delay:400ms]">
            Join us in our mission to restore and preserve our planet's natural ecosystems
            through research, development, and community action.
          </p>
          <div className="space-x-4 animate-fade-up [--animate-delay:600ms]">
            <a
              href="/involved"
              className="inline-block bg-forest hover:bg-forest-light text-white px-6 py-3 rounded-md transition-colors"
            >
              Get Involved
            </a>
            <a
              href="/work"
              className="inline-block bg-white/10 hover:bg-white/20 text-gray-800 px-6 py-3 rounded-md backdrop-blur-sm transition-colors"
            >
              Our Projects
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}