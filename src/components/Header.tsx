import { useState } from "react";
import { Container } from "./ui/container";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 shadow-sm">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-forest">HERADO</div>
          
          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLinks />
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden">
              <div className="py-4 px-6">
                <NavLinks />
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}

function NavLinks() {
  return (
    <>
      <a href="/" className="text-gray-600 hover:text-forest transition-colors">
        Home
      </a>
      <a href="/work" className="text-gray-600 hover:text-forest transition-colors">
        Our Work
      </a>
      <a href="/involved" className="text-gray-600 hover:text-forest transition-colors">
        Get Involved
      </a>
      <a href="/resources" className="text-gray-600 hover:text-forest transition-colors">
        Resources
      </a>
      <a
        href="/donate"
        className="bg-forest text-white px-4 py-2 rounded-md hover:bg-forest-light transition-colors"
      >
        Donate
      </a>
    </>
  );
}