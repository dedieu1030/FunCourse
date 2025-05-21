
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Search, MessageSquare, Filter, Send } from 'lucide-react';

interface Question {
  id: string;
  courseId: string;
  courseName: string;
  moduleId: string;
  moduleName: string;
  studentName: string;
  studentAvatar: string;
  question: string;
  date: string;
  isAnswered: boolean;
  answer?: string;
}

const Questions: React.FC = () => {
  const { toast } = useToast();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [answerText, setAnswerText] = useState<string>('');
  const [replyDialogOpen, setReplyDialogOpen] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<string>('all');
  
  // Charger les questions
  useEffect(() => {
    // Simuler un appel API
    setTimeout(() => {
      // Données fictives pour les questions
      const fakeQuestions: Question[] = [
        {
          id: 'q1',
          courseId: 'c1',
          courseName: 'Apprendre React en 30 jours',
          moduleId: 'm1',
          moduleName: 'Introduction à React',
          studentName: 'Sophie Leclerc',
          studentAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          question: "Je ne comprends pas bien la différence entre props et state. Pourriez-vous m'éclaircir sur ce point ?",
          date: '15/04/2025',
          isAnswered: false,
        },
        {
          id: 'q2',
          courseId: 'c1',
          courseName: 'Apprendre React en 30 jours',
          moduleId: 'm3',
          moduleName: 'Composants et Props',
          studentName: 'Martin Dubois',
          studentAvatar: 'https://randomuser.me/api/portraits/men/22.jpg',
          question: "Comment puis-je passer une fonction en tant que prop à un composant enfant ?",
          date: '14/04/2025',
          isAnswered: true,
          answer: "Vous pouvez passer une fonction comme une prop normale. Par exemple : `<ChildComponent onClick={handleClick} />`. Ensuite, dans le composant enfant, vous pouvez appeler cette fonction avec `props.onClick()`."
        },
        {
          id: 'q3',
          courseId: 'c2',
          courseName: 'Les bases du JavaScript moderne',
          moduleId: 'm2',
          moduleName: 'Les fonctions fléchées',
          studentName: 'Emma Bernard',
          studentAvatar: 'https://randomuser.me/api/portraits/women/33.jpg',
          question: "Quelle est la différence entre une fonction fléchée et une fonction traditionnelle en JavaScript ?",
          date: '12/04/2025',
          isAnswered: false,
        }
      ];
      
      setQuestions(fakeQuestions);
      setFilteredQuestions(fakeQuestions);
      setLoading(false);
    }, 1000);
  }, []);
  
  // Appliquer les filtres
  useEffect(() => {
    let filtered = [...questions];
    
    // Filtre par onglet (tous, répondus, non répondus)
    if (activeTab === 'answered') {
      filtered = filtered.filter(q => q.isAnswered);
    } else if (activeTab === 'unanswered') {
      filtered = filtered.filter(q => !q.isAnswered);
    }
    
    // Filtre par cours
    if (selectedCourse !== 'all') {
      filtered = filtered.filter(q => q.courseId === selectedCourse);
    }
    
    // Filtre par terme de recherche
    if (searchTerm) {
      filtered = filtered.filter(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.moduleName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredQuestions(filtered);
  }, [questions, searchTerm, activeTab, selectedCourse]);
  
  // Ouvrir la boîte de dialogue de réponse
  const openReplyDialog = (question: Question) => {
    setSelectedQuestion(question);
    setAnswerText(question.answer || '');
    setReplyDialogOpen(true);
  };
  
  // Soumettre une réponse
  const submitAnswer = () => {
    if (!selectedQuestion || !answerText.trim()) return;
    
    // Mettre à jour la question dans l'état
    const updatedQuestions = questions.map(q => 
      q.id === selectedQuestion.id 
        ? { ...q, answer: answerText, isAnswered: true } 
        : q
    );
    
    setQuestions(updatedQuestions);
    setReplyDialogOpen(false);
    
    toast({
      title: "Réponse envoyée!",
      description: "Votre réponse a été envoyée à l'élève.",
    });
  };
  
  // Extraire la liste des cours uniques
  const courses = [
    { id: 'all', name: 'Tous les cours' },
    ...Array.from(
      new Map(questions.map(q => [q.courseId, { id: q.courseId, name: q.courseName }])).values()
    )
  ];
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Mes questions</h1>
      
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Barre de recherche */}
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher dans les questions..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Sélection du cours */}
        <div className="w-full sm:w-64">
          <Select value={selectedCourse} onValueChange={setSelectedCourse}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner un cours" />
            </SelectTrigger>
            <SelectContent>
              {courses.map(course => (
                <SelectItem key={course.id} value={course.id}>
                  {course.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">
            Toutes ({questions.length})
          </TabsTrigger>
          <TabsTrigger value="unanswered">
            Non répondues ({questions.filter(q => !q.isAnswered).length})
          </TabsTrigger>
          <TabsTrigger value="answered">
            Répondues ({questions.filter(q => q.isAnswered).length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          {renderQuestionsList(filteredQuestions, loading, openReplyDialog)}
        </TabsContent>
        
        <TabsContent value="unanswered" className="space-y-4">
          {renderQuestionsList(filteredQuestions, loading, openReplyDialog)}
        </TabsContent>
        
        <TabsContent value="answered" className="space-y-4">
          {renderQuestionsList(filteredQuestions, loading, openReplyDialog)}
        </TabsContent>
      </Tabs>
      
      {/* Dialog de réponse */}
      <Dialog open={replyDialogOpen} onOpenChange={setReplyDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Répondre à la question</DialogTitle>
            <DialogDescription>
              Votre réponse sera envoyée directement à l'élève.
            </DialogDescription>
          </DialogHeader>
          
          {selectedQuestion && (
            <div className="space-y-4 py-4">
              {/* Détails de la question */}
              <div className="bg-muted rounded-lg p-4 mb-4">
                <div className="flex items-center mb-3">
                  <img
                    src={selectedQuestion.studentAvatar}
                    alt={selectedQuestion.studentName}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <p className="font-medium">{selectedQuestion.studentName}</p>
                    <p className="text-xs text-muted-foreground">
                      {selectedQuestion.courseName} - {selectedQuestion.moduleName}
                    </p>
                  </div>
                </div>
                <p className="text-sm mb-1">{selectedQuestion.question}</p>
                <p className="text-xs text-muted-foreground">Posée le {selectedQuestion.date}</p>
              </div>
              
              {/* Zone de réponse */}
              <div className="space-y-2">
                <Textarea
                  placeholder="Écrivez votre réponse ici..."
                  value={answerText}
                  onChange={(e) => setAnswerText(e.target.value)}
                  className="min-h-[150px]"
                />
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setReplyDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={submitAnswer} disabled={!answerText.trim()}>
              <Send className="h-4 w-4 mr-2" />
              Envoyer la réponse
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Fonction auxiliaire pour rendre la liste des questions
const renderQuestionsList = (
  questions: Question[],
  loading: boolean,
  onReply: (question: Question) => void
) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement des questions...</p>
        </div>
      </div>
    );
  }
  
  if (questions.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center text-center p-12">
          <MessageSquare className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-xl font-medium mb-2">Aucune question trouvée</h2>
          <p className="text-muted-foreground">
            Vous n'avez pas encore reçu de questions correspondant à vos critères.
          </p>
        </CardContent>
      </Card>
    );
  }
  
  return questions.map(question => (
    <Card key={question.id} className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <img
              src={question.studentAvatar}
              alt={question.studentName}
              className="w-10 h-10 rounded-full"
            />
            <div className="space-y-1">
              <div>
                <p className="font-medium">{question.studentName}</p>
                <p className="text-xs text-muted-foreground">
                  {question.date} • {question.courseName} - {question.moduleName}
                </p>
              </div>
              <p className="text-sm">{question.question}</p>
              
              {question.isAnswered && (
                <div className="mt-3 pl-4 border-l-2 border-muted">
                  <p className="text-xs font-medium">Votre réponse:</p>
                  <p className="text-sm">{question.answer}</p>
                </div>
              )}
            </div>
          </div>
          
          <Button
            variant={question.isAnswered ? "outline" : "default"}
            size="sm"
            onClick={() => onReply(question)}
          >
            {question.isAnswered ? "Modifier" : "Répondre"}
          </Button>
        </div>
      </CardContent>
    </Card>
  ));
};

export default Questions;
