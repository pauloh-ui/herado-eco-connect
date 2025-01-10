import { useState } from "react";
import { Container } from "./ui/container";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed w-full z-50 px-4 py-3">
      <Container>
        <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-full shadow-lg px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-forest dark:text-forest-light">HERADO</div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
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
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg lg:hidden">
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
      <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-forest dark:hover:text-forest-light transition-colors">
        Home
      </a>
      <a href="/work" className="text-gray-600 dark:text-gray-300 hover:text-forest dark:hover:text-forest-light transition-colors">
        Our Work
      </a>
      <a href="/involved" className="text-gray-600 dark:text-gray-300 hover:text-forest dark:hover:text-forest-light transition-colors">
        Get Involved
      </a>
      <a href="/resources" className="text-gray-600 dark:text-gray-300 hover:text-forest dark:hover:text-forest-light transition-colors">
        Resources
      </a>
      <a
        href="/donate"
        className="bg-forest text-white dark:bg-forest-light px-4 py-2 rounded-full hover:bg-forest-light dark:hover:bg-forest transition-colors"
      >
        Donate
      </a>
    </>
  );
}