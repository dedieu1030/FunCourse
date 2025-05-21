
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const LandingHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">FunCours</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Accueil
          </Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Tarification
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            Comment ça marche
          </Link>
          <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">
            Connexion
          </Link>
          <Button asChild className="rounded-full">
            <Link to="/signup">Créer un compte</Link>
          </Button>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Menu">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container py-4 space-y-4">
            <Link to="/" className="block text-sm font-medium hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
              Accueil
            </Link>
            <Link to="/pricing" className="block text-sm font-medium hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
              Tarification
            </Link>
            <Link to="/how-it-works" className="block text-sm font-medium hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
              Comment ça marche
            </Link>
            <Link to="/login" className="block text-sm font-medium hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
              Connexion
            </Link>
            <Button asChild className="w-full rounded-full">
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>Créer un compte</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default LandingHeader;
