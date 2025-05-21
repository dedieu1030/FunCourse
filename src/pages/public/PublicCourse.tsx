
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Check, Clock, Lock } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CourseModule } from '@/pages/app/CourseCreate';

interface PublicCourse {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  price: number;
  isFree: boolean;
  instructor: {
    name: string;
    avatar: string;
  };
  modules: Array<Pick<CourseModule, 'id' | 'title' | 'type'>>;
  studentsCount: number;
  updatedAt: string;
}

const PublicCourse: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  
  const [course, setCourse] = useState<PublicCourse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isPurchased, setIsPurchased] = useState<boolean>(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState<boolean>(false);
  
  useEffect(() => {
    // Simuler l'authentification
    setIsAuthenticated(localStorage.getItem('isLoggedIn') === 'true');
    
    // Simuler un appel API
    setTimeout(() => {
      // Données fictives d'un cours public
      const fakeCourse: PublicCourse = {
        id: '123',
        slug: slug || 'apprendre-react',
        title: "Apprendre React en 30 jours",
        description: "Un cours complet pour maîtriser React, des bases aux concepts avancés. Idéal pour les débutants souhaitant devenir des développeurs React compétents rapidement. Vous apprendrez à construire des applications web modernes avec les meilleures pratiques de l'industrie.",
        coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        price: 49.99,
        isFree: false,
        instructor: {
          name: "Jean Dupont",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        modules: [
          { id: 'm1', title: 'Introduction à React', type: 'video' },
          { id: 'm2', title: 'Les fondamentaux de JSX', type: 'text' },
          { id: 'm3', title: 'Composants et Props', type: 'text' },
          { id: 'm4', title: 'État et Cycle de vie', type: 'video' },
          { id: 'm5', title: 'Les Hooks', type: 'video' },
        ],
        studentsCount: 1245,
        updatedAt: '2025-04-10'
      };
      
      setCourse(fakeCourse);
      
      // Vérifier si le cours est déjà acheté
      const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses') || '[]');
      setIsPurchased(purchasedCourses.includes(fakeCourse.id));
      
      setLoading(false);
    }, 1000);
  }, [slug]);
  
  const handlePurchase = async () => {
    if (!isAuthenticated) {
      setLoginDialogOpen(true);
      return;
    }
    
    if (isPurchased || (course && course.isFree)) {
      // Redirection vers la page de lecture si déjà acheté ou gratuit
      window.location.href = `/courses/${course?.id}/view`;
      return;
    }
    
    setIsProcessingPayment(true);
    
    try {
      // Simuler un appel à Stripe
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simuler l'achat réussi
      if (course) {
        const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses') || '[]');
        purchasedCourses.push(course.id);
        localStorage.setItem('purchasedCourses', JSON.stringify(purchasedCourses));
        setIsPurchased(true);
        
        toast({
          title: "Achat réussi!",
          description: "Vous avez maintenant accès au cours complet.",
        });
        
        // Redirection vers la page de lecture
        setTimeout(() => {
          window.location.href = `/courses/${course.id}/view`;
        }, 1000);
      }
    } catch (error) {
      toast({
        title: "Erreur lors de l'achat",
        description: "Veuillez réessayer ultérieurement.",
        variant: "destructive"
      });
    } finally {
      setIsProcessingPayment(false);
    }
  };
  
  const handleLogin = () => {
    // Simuler la connexion
    localStorage.setItem('isLoggedIn', 'true');
    setIsAuthenticated(true);
    setLoginDialogOpen(false);
    
    toast({
      title: "Connexion réussie!",
      description: "Vous pouvez maintenant poursuivre votre achat.",
    });
  };
  
  if (loading) {
    return (
      <div className="container max-w-5xl mx-auto py-12">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement du cours...</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (!course) {
    return (
      <div className="container max-w-5xl mx-auto py-12">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-2">Cours non trouvé</h2>
          <p className="text-muted-foreground mb-6">
            Le cours que vous recherchez ne semble pas exister.
          </p>
          <Link to="/">
            <Button>Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container max-w-5xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Détails du cours */}
        <div className="md:col-span-2 space-y-8">
          {/* Image et titre */}
          <div>
            <div className="aspect-video rounded-lg overflow-hidden mb-6">
              <img
                src={course.coverImage}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">{course.title}</h1>
            <div className="flex items-center gap-2 mt-3">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-muted-foreground">
                Par <span className="font-medium text-foreground">{course.instructor.name}</span>
              </span>
            </div>
          </div>
          
          {/* Description */}
          <div>
            <h2 className="text-xl font-bold mb-3">Description</h2>
            <p>{course.description}</p>
          </div>
          
          {/* Liste des modules */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contenu du cours</h2>
            <div className="space-y-3">
              {course.modules.map((module, index) => (
                <div 
                  key={module.id} 
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs">
                      {index + 1}
                    </span>
                    <span>{module.title}</span>
                  </div>
                  {isPurchased || course.isFree ? (
                    <span className="text-sm text-muted-foreground">
                      {module.type === 'video' ? 'Vidéo' : 'Lecture'}
                    </span>
                  ) : (
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Carte d'achat */}
        <div>
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Prix */}
                <div>
                  {course.isFree ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">Gratuit</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">{course.price} €</span>
                    </div>
                  )}
                </div>
                
                {/* Accès */}
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Accès à vie au contenu</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>{course.modules.length} modules d'apprentissage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Possibilité de poser des questions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Téléchargement des ressources</span>
                  </div>
                </div>
                
                {/* Statistiques */}
                <div className="flex justify-between text-sm text-muted-foreground border-y py-3">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Mis à jour le {course.updatedAt}</span>
                  </div>
                  <div>
                    {course.studentsCount} étudiants
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button 
                className="w-full" 
                size="lg" 
                onClick={handlePurchase}
                disabled={isProcessingPayment}
              >
                {isProcessingPayment ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Traitement en cours...
                  </span>
                ) : isPurchased ? (
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    Continuer l'apprentissage
                  </span>
                ) : course.isFree ? (
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    Accéder gratuitement
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Acheter maintenant
                  </span>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      {/* Dialog de connexion */}
      <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Connexion requise</DialogTitle>
            <DialogDescription>
              Vous devez être connecté pour acheter ce cours.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-between mt-4">
            <Link to="/signup">
              <Button variant="outline">Créer un compte</Button>
            </Link>
            <Link to="/login">
              <Button onClick={handleLogin}>Se connecter</Button>
            </Link>
          </div>
          <DialogFooter className="mt-2">
            <Button 
              variant="ghost" 
              onClick={() => setLoginDialogOpen(false)}
            >
              Annuler
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PublicCourse;
