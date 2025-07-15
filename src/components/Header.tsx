import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'About Us', href: '/about-us', isRoute: true },
    { label: 'Our Offerings', href: '/our-offerings', isRoute: true },
    { label: 'Projects', href: '/projects', isRoute: true },
    { label: 'Partners', href: '/new-partners', isRoute: true },
    { label: 'Clients', href: '/partners', isRoute: true },
    { label: 'Contact Us', href: '/contact', isRoute: true }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-white dark:bg-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/ff4c4f02-e6af-487c-9cf3-fd5063df5f21.png" 
              alt="Gramsak Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-foreground">GRAMSAK</span>
          </div>

          {/* Desktop Navigation - Always visible on desktop */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground hover:text-gramsak-green transition-colors duration-200 font-normal relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gramsak-green after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hidden md:flex"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
           

            {/* Mobile menu button - only visible on mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - only visible on mobile when menu is open */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-border">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-4 py-2 text-foreground hover:text-gramsak-green hover:bg-muted transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="w-full justify-start"
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
                  Toggle Theme
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
