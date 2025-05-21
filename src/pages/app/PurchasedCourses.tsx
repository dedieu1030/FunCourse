
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight, Book } from 'lucide-react';

interface PurchasedCourse {
  id: string;
  title: string;
  coverImage: string;
  instructorName: string;
  purchaseDate: string;
  progress: number;
  lastModuleId: string;
}

const PurchasedCourses: React.FC = () => {
  const [courses, setCourses] = useState<PurchasedCourse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Charger les cours achetés
  useEffect(() => {
    // Simuler un appel API
    setTimeout(() => {
      // Données fictives pour les cours achetés
      const fakeCourses: PurchasedCourse[] = [
        {
          id: '1',
          title: 'Apprendre React en 30 jours',
          coverImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
          instructorName: 'Jean Dupont',
          purchaseDate: '15/04/2025',
          progress: 45,
          lastModuleId: 'm3',
        },
        {
          id: '2',
          title: 'Les bases du JavaScript moderne',
          coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
          instructorName: 'Marie Martin',
          purchaseDate: '28/03/2025',
          progress: 20,
          lastModuleId: 'm2',
        },
        {
          id: '3',
          title: 'Créer une API REST avec Node.js',
          coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
          instructorName: 'Thomas Bernard',
          purchaseDate: '02/03/2025',
          progress: 80,
          lastModuleId: 'm7',
        },
      ];
      
      setCourses(fakeCourses);
      setLoading(false);
    }, 1000);
  }, []);
  
  // Filtrer les cours selon le terme de recherche
  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructorName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Mes cours achetés</h1>
      
      {/* Barre de recherche */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher parmi mes cours..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement de vos cours...</p>
          </div>
        </div>
      ) : filteredCourses.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center text-center p-12">
            <Book className="h-16 w-16 text-muted-foreground mb-4" />
            {searchTerm ? (
              <>
                <h2 className="text-xl font-medium mb-2">Aucun cours trouvé</h2>
                <p className="text-muted-foreground mb-4">
                  Aucun cours ne correspond à votre recherche. Essayez avec d'autres termes.
                </p>
                <Button variant="outline" onClick={() => setSearchTerm('')}>
                  Réinitialiser la recherche
                </Button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-medium mb-2">Vous n'avez pas encore de cours</h2>
                <p className="text-muted-foreground mb-4">
                  Explorez notre catalogue de cours pour commencer votre apprentissage.
                </p>
                <Link to="/pricing">
                  <Button>
                    Découvrir nos cours
                  </Button>
                </Link>
              </>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <Card key={course.id} className="overflow-hidden flex flex-col h-full">
              <div className="aspect-video relative">
                <img 
                  src={course.coverImage}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-200">
                  <div 
                    className="h-full bg-primary" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              <CardHeader>
                <h3 className="text-lg font-bold">{course.title}</h3>
                <p className="text-sm text-muted-foreground">Par {course.instructorName}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Acheté le {course.purchaseDate}</span>
                </div>
                <div>
                  <div className="text-sm font-medium mb-1">
                    <span className="text-primary">{course.progress}%</span> terminé
                  </div>
                </div>
              </CardContent>
              <div className="p-4 pt-0 mt-auto">
                <Link to={`/courses/${course.id}/view`}>
                  <Button className="w-full">
                    {course.progress > 0 ? 'Continuer' : 'Commencer'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default PurchasedCourses;
