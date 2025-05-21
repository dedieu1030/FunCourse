
import { Link } from 'react-router-dom';

const LandingFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-primary">FunCours</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Créez et vendez vos cours en ligne, en toute simplicité. FunCours vous permet de partager votre savoir sans complexité.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-medium text-base mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Tarification
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Comment ça marche
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-medium text-base mb-4">Informations légales</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/legal-notice" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  CGU
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} FunCours. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Contact : <a href="mailto:contact@funcours.com" className="hover:text-primary underline">contact@funcours.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
