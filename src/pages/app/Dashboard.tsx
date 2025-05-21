
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Plus,
  Users,
  Eye,
  DollarSign,
  TrendingUp,
  BookOpen
} from 'lucide-react';

// Mock data for courses
const courses = [
  { id: 1, title: 'Introduction à React', price: 29.99, students: 12, views: 125, image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b' },
  { id: 2, title: 'Les bases du JavaScript', price: 19.99, students: 8, views: 89, image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952' },
];

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Tableau de bord</h1>
        <Button asChild className="rounded-full">
          <Link to="/courses/create">
            <Plus className="mr-2 h-4 w-4" />
            Créer un cours
          </Link>
        </Button>
      </div>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Cours créés</p>
              <p className="text-3xl font-bold mt-1">{courses.length}</p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Total élèves</p>
              <p className="text-3xl font-bold mt-1">20</p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Vues totales</p>
              <p className="text-3xl font-bold mt-1">214</p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Eye className="h-6 w-6 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Revenus</p>
              <p className="text-3xl font-bold mt-1">549€</p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Performance */}
      <Card className="mb-8">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div>
            <CardTitle>Performance récente</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Evolution des ventes et des vues sur les 30 derniers jours
            </p>
          </div>
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-primary mr-1"></div>
              <span className="text-xs text-muted-foreground">Ventes</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-secondary-foreground mr-1"></div>
              <span className="text-xs text-muted-foreground">Vues</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <div className="w-full h-full bg-muted rounded-md flex items-center justify-center">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <span>Graphique de performance</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Your courses */}
      <h2 className="text-2xl font-bold mb-4">Vos cours</h2>
      
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 text-lg">{course.title}</h3>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-muted-foreground">{course.students} élèves</span>
                  <span className="font-medium">{course.price}€</span>
                </div>
                <div className="flex justify-between space-x-2">
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/courses/${course.id}/view`}>Voir</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link to={`/courses/${course.id}/edit`}>Modifier</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Add Course Card */}
          <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <Plus className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-medium mb-2">Créer un nouveau cours</h3>
            <p className="text-muted-foreground text-sm text-center mb-4">
              Partagez votre expertise et commencez à vendre votre contenu
            </p>
            <Button asChild className="rounded-full">
              <Link to="/courses/create">Créer un cours</Link>
            </Button>
          </Card>
        </div>
      ) : (
        <Card className="text-center p-12">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <Plus className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">Aucun cours pour le moment</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Vous n'avez pas encore créé de cours. Commencez par créer votre premier cours et partagez votre expertise avec le monde entier.
            </p>
            <Button asChild className="rounded-full">
              <Link to="/courses/create">Créer mon premier cours</Link>
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Dashboard;
