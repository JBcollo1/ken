import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, User, Calendar } from 'lucide-react';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 w-full left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass bg-blue-500 py-2' : 'bg-blue-600 py-4'
      }`}
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            <span className="text-xl font-semibold font-display">Ken</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 md:flex">
            <Link to="/" className="font-medium transition-colors hover:text-secondary">
              Home
            </Link>
            <Link to="/about" className="font-medium transition-colors hover:text-primary">
              About
            </Link>
            <a href="/c" className="font-medium transition-colors hover:text-primary">
              Contact
            </a>
            <Link to="/d" className="font-medium transition-colors hover:text-primary">
              Dashboard
            </Link>
          </nav>

     

          {/* Mobile Menu Toggle */}
          <button 
            className="p-2 rounded-md md:hidden" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass animate-slide-in-right">
          <div className="container px-4 py-6 mx-auto space-y-8">
            <nav className="flex flex-col space-y-6">
              <Link to="/" className="text-lg font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <a href="/c" className="font-medium transition-colors hover:text-primary">
                contact
              </a>
              <Link to="/about" className="text-lg font-medium transition-colors hover:text-primary">
                About
              </Link>
              <Link to="/d" className="text-lg font-medium transition-colors hover:text-primary">
                Dashboard
              </Link>
            </nav>
            <div className="flex flex-col space-y-4">
              <Button variant="outline" className="justify-center">
                <Search className="w-4 h-4 mr-2" /> Search Events
              </Button>
              <Button asChild className="justify-center">
                <Link to="/signin">
                  <User className="w-4 h-4 mr-2" /> Sign In
                </Link>
              </Button>
              <Button asChild variant="outline" className="justify-center">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;