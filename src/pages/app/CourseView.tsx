
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, ArrowRight, MessageSquare, Send, Book } from 'lucide-react';
import { CourseModule } from '@/pages/app/CourseCreate';

// Type pour un cours
interface Course {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  modules: CourseModule[];
}

const CourseView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentModuleIndex, setCurrentModuleIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [questionText, setQuestionText] = useState<string>('');
  const [askDialogOpen, setAskDialogOpen] = useState<boolean>(false);
  
  // Charger les données du cours
  useEffect(() => {
    // Simuler un appel API
    setTimeout(() => {
      // Données fictives d'un cours avec des modules
      const fakeCourse: Course = {
        id: id || '1',
        title: "Apprendre React en 30 jours",
        description: "Un cours complet pour maîtriser React, des bases aux concepts avancés.",
        coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        modules: [
          {
            id: "m1",
            title: "Introduction à React",
            type: "video",
            content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            question: "Qu'est-ce qui vous a le plus surpris dans cette introduction?",
          },
          {
            id: "m2",
            title: "Les fondamentaux de JSX",
            type: "text",
            content: "JSX est une extension syntaxique de JavaScript qui permet de décrire à quoi devrait ressembler l'interface utilisateur. Il ressemble à du HTML mais possède toute la puissance de JavaScript.\n\nExemple de JSX :\n```jsx\nconst element = <h1>Hello, world!</h1>;\n```\n\nJSX facilite l'écriture d'interfaces utilisateur car il permet d'inclure la logique de rendu et la logique événementielle directement dans les composants.",
            pdfUrl: "https://example.com/jsx.pdf",
          },
          {
            id: "m3",
            title: "Composants et Props",
            type: "text",
            content: "Les composants vous permettent de diviser l'UI en éléments indépendants et réutilisables. Conceptuellement, les composants sont comme des fonctions JavaScript. Ils acceptent des entrées arbitraires (appelées "props") et renvoient des éléments React décrivant ce qui doit apparaître à l'écran.",
          },
          {
            id: "m4",
            title: "État et Cycle de vie",
            type: "video",
            content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          }
        ]
      };
      
      setCourse(fakeCourse);
      setLoading(false);
      
      // Calculer le progrès initial
      const savedProgress = localStorage.getItem(`course-${id}-progress`);
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        setCurrentModuleIndex(parsed.moduleIndex);
        setProgress(Math.round((parsed.moduleIndex + 1) / fakeCourse.modules.length * 100));
      } else {
        setProgress(Math.round(1 / fakeCourse.modules.length * 100));
      }
    }, 1000);
  }, [id]);
  
  // Mise à jour du progrès quand le module change
  useEffect(() => {
    if (course) {
      // Sauvegarder la progression
      localStorage.setItem(`course-${id}-progress`, JSON.stringify({
        moduleIndex: currentModuleIndex,
        timestamp: new Date().toISOString()
      }));
      
      // Mettre à jour le pourcentage de progression
      setProgress(Math.round((currentModuleIndex + 1) / course.modules.length * 100));
    }
  }, [currentModuleIndex, course, id]);
  
  // Navigation entre les modules
  const goToNextModule = () => {
    if (course && currentModuleIndex < course.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const goToPreviousModule = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Soumettre une question
  const submitQuestion = () => {
    if (questionText.trim() === '') return;
    
    // Simuler l'envoi de la question
    toast({
      title: "Question envoyée!",
      description: "Votre formateur vous répondra prochainement."
    });
    
    setQuestionText('');
    setAskDialogOpen(false);
  };
  
  // Rendu du contenu du module
  const renderModuleContent = (module: CourseModule) => {
    if (module.type === 'video') {
      // Rendu vidéo (supposant une URL YouTube intégrable)
      return (
        <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
          <iframe
            className="w-full h-full"
            src={module.content}
            title={module.title}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      );
    } else {
      // Rendu texte
      return (
        <div className="prose max-w-none mb-6">
          {module.content.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      );
    }
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement du cours...</p>
        </div>
      </div>
    );
  }
  
  if (!course) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-2">Cours non trouvé</h2>
        <p className="text-muted-foreground mb-6">
          Le cours que vous recherchez ne semble pas exister.
        </p>
        <Button onClick={() => navigate('/purchased-courses')}>
          Retour à mes cours
        </Button>
      </div>
    );
  }
  
  const currentModule = course.modules[currentModuleIndex];
  
  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col gap-4">
        <Button
          variant="outline"
          size="sm"
          className="w-fit"
          onClick={() => navigate('/purchased-courses')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à mes cours
        </Button>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <Dialog open={askDialogOpen} onOpenChange={setAskDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Poser une question
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Posez votre question</DialogTitle>
                <DialogDescription>
                  Votre question sera envoyée au formateur qui vous répondra dès que possible.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="rounded-lg bg-muted p-4">
                  <h4 className="font-medium mb-1">Module: {currentModule.title}</h4>
                  <p className="text-sm text-muted-foreground">{course.title}</p>
                </div>
                <Textarea
                  placeholder="Écrivez votre question ici..."
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  className="min-h-[120px]"
                />
              </div>
              <DialogFooter>
                <Button 
                  onClick={submitQuestion} 
                  disabled={questionText.trim() === ''}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer ma question
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        {/* Barre de progression */}
        <div className="w-full bg-muted rounded-full h-2.5">
          <div 
            className="bg-primary h-2.5 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="text-sm text-muted-foreground flex items-center justify-between">
          <span>
            Module {currentModuleIndex + 1} sur {course.modules.length}
          </span>
          <span>{progress}% terminé</span>
        </div>
      </div>
      
      {/* Navigation des modules */}
      <div className="flex overflow-auto py-2 gap-2">
        {course.modules.map((module, index) => (
          <Button
            key={module.id}
            variant={index === currentModuleIndex ? "default" : "outline"}
            size="sm"
            className="whitespace-nowrap"
            onClick={() => setCurrentModuleIndex(index)}
          >
            {index + 1}. {module.title}
          </Button>
        ))}
      </div>
      
      {/* Contenu du module actuel */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">{currentModule.title}</h2>
          
          {renderModuleContent(currentModule)}
          
          {/* Documents complémentaires */}
          {currentModule.pdfUrl && (
            <div className="mb-6 p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Documents complémentaires</h3>
              <Button variant="outline" className="text-sm" onClick={() => window.open(currentModule.pdfUrl, '_blank')}>
                <Book className="h-4 w-4 mr-2" />
                Télécharger le PDF
              </Button>
            </div>
          )}
          
          {/* Question du formateur */}
          {currentModule.question && (
            <div className="mb-6 p-4 border rounded-lg bg-muted/50">
              <h3 className="font-medium mb-2">Question du formateur</h3>
              <p className="text-muted-foreground">{currentModule.question}</p>
            </div>
          )}
          
          {/* Navigation entre modules */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={goToPreviousModule}
              disabled={currentModuleIndex === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Module précédent
            </Button>
            <Button
              onClick={goToNextModule}
              disabled={currentModuleIndex === course.modules.length - 1}
            >
              Module suivant
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseView;
