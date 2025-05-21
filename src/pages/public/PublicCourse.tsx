
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Check, Lock } from 'lucide-react';

// Mock course data
const mockCourse = {
  id: "123",
  slug: "introduction-a-react",
  title: "Introduction à React",
  description: "Apprenez les bases de React et créez vos premières applications web interactives avec cette bibliothèque JavaScript populaire.",
  price: 29.99,
  author: "Jean Dupont",
  authorAvatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  modules: [
    { id: 1, title: "Introduction à React et ses concepts", type: "video", duration: "15 min", free: true },
    { id: 2, title: "Installation et configuration", type: "text", duration: "10 min", free: false },
    { id: 3, title: "Components et Props", type: "video", duration: "20 min", free: false },
    { id: 4, title: "State et Lifecycle", type: "video", duration: "25 min", free: false },
    { id: 5, title: "Handling Events", type: "text", duration: "15 min", free: false },
    { id: 6, title: "Project: ToDo App", type: "video", duration: "40 min", free: false },
  ],
};

const PublicCourse = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  const [processing, setProcessing] = useState(false);
  
  // In a real app, we would fetch the course data based on the slug
  const course = mockCourse;
  
  const handlePurchase = () => {
    setProcessing(true);
    
    // Mock purchase process
    setTimeout(() => {
      setProcessing(false);
      toast({
        title: "Achat en cours",
        description: "Vous allez être redirigé vers la page de paiement",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">FunCours</span>
          </Link>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground pt-8 pb-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg opacity-90 mb-6">{course.description}</p>
              <div className="flex items-center mb-8">
                <img 
                  src={course.authorAvatar} 
                  alt={course.author}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <span>Par {course.author}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handlePurchase}
                  className="rounded-full bg-white text-primary hover:bg-white/90"
                  size="lg"
                  disabled={processing}
                >
                  {processing ? "Traitement en cours..." : `Acheter pour ${course.price}€`}
                </Button>
                <Button 
                  variant="outline" 
                  className="rounded-full bg-primary/30 border-white/20 hover:bg-primary/50"
                  size="lg"
                >
                  Voir le premier module gratuitement
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-secondary/20 rounded-lg overflow-hidden">
                <img 
                  src={course.coverImage} 
                  alt={course.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Contenu du cours</h2>
              <div className="space-y-4">
                {course.modules.map((module) => (
                  <div 
                    key={module.id} 
                    className="bg-card border border-border rounded-lg p-4 flex justify-between items-center"
                  >
                    <div className="flex items-start">
                      {module.free ? (
                        <Button variant="ghost" size="icon" className="mr-3 text-primary">
                          <Check className="h-5 w-5" />
                        </Button>
                      ) : (
                        <Button variant="ghost" size="icon" className="mr-3 text-muted-foreground">
                          <Lock className="h-5 w-5" />
                        </Button>
                      )}
                      <div>
                        <h3 className="font-medium">{module.title}</h3>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-muted-foreground">
                            {module.type === 'video' ? 'Vidéo' : 'Texte'} • {module.duration}
                          </span>
                          {module.free && (
                            <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                              Gratuit
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {module.free ? (
                      <Button variant="ghost" size="sm">
                        Accéder
                      </Button>
                    ) : (
                      <div className="text-sm text-muted-foreground">
                        Verrouillé
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-card border border-border rounded-lg p-6 sticky top-6">
                <h2 className="text-xl font-bold mb-4">Ce cours inclut</h2>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-primary" />
                    <span>6 modules</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-primary" />
                    <span>1h45 de contenu vidéo</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-primary" />
                    <span>Ressources téléchargeables</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-primary" />
                    <span>Accès à vie</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-primary" />
                    <span>Support par questions/réponses</span>
                  </li>
                </ul>
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span>Prix</span>
                    <span className="font-bold text-xl">{course.price}€</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    TVA incluse. Accès immédiat après paiement.
                  </p>
                </div>
                <Button onClick={handlePurchase} className="w-full rounded-full" disabled={processing}>
                  {processing ? "Traitement en cours..." : "Acheter maintenant"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-secondary py-8 border-t border-border">
        <div className="container text-center">
          <Link to="/" className="flex items-center justify-center mb-4">
            <span className="text-xl font-bold text-primary">FunCours</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FunCours. Tous droits réservés.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <Link to="/legal-notice" className="text-sm text-muted-foreground hover:text-foreground">
              Mentions légales
            </Link>
            <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground">
              CGU
            </Link>
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicCourse;
