
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import ImageUploader from '@/components/app/ImageUploader';
import ModuleEditor from '@/components/app/ModuleEditor';
import { CourseModule } from '@/pages/app/CourseCreate';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Settings, Copy, Link, Eye, ArrowLeft } from 'lucide-react';

// Schéma de validation pour le formulaire
const courseFormSchema = z.object({
  title: z.string().min(5, "Le titre doit contenir au moins 5 caractères"),
  description: z.string().min(20, "La description doit contenir au moins 20 caractères"),
  coverImage: z.string().optional(),
  price: z.coerce.number().min(0, "Le prix ne peut pas être négatif"),
  isFree: z.boolean().default(false),
  slug: z.string().min(5, "Le slug doit contenir au moins 5 caractères"),
});

type CourseFormValues = z.infer<typeof courseFormSchema>;

// Données fictives pour un cours existant
const fakeCourseData: CourseFormValues & { modules: CourseModule[] } = {
  title: "Apprendre React en 30 jours",
  description: "Un cours complet pour maîtriser React, des bases aux concepts avancés. Idéal pour les débutants souhaitant devenir des développeurs React compétents rapidement.",
  coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  price: 49.99,
  isFree: false,
  slug: "apprendre-react-30-jours",
  modules: [
    {
      id: "m1",
      title: "Introduction à React",
      type: "video",
      content: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      pdfUrl: "https://example.com/intro-react.pdf",
      question: "Qu'est-ce qui vous a motivé à apprendre React?"
    },
    {
      id: "m2",
      title: "Les fondamentaux de JSX",
      type: "text",
      content: "JSX est une extension syntaxique de JavaScript qui permet de décrire à quoi devrait ressembler l'interface utilisateur. Il ressemble à du HTML mais possède toute la puissance de JavaScript.\n\nExemple de JSX :\n```jsx\nconst element = <h1>Hello, world!</h1>;\n```",
    }
  ]
};

const CourseEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>("content");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [modules, setModules] = useState<CourseModule[]>([]);
  const [publicUrl, setPublicUrl] = useState<string>("");
  const [shareDialogOpen, setShareDialogOpen] = useState<boolean>(false);
  
  // Initialiser le formulaire avec react-hook-form
  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      title: "",
      description: "",
      coverImage: "",
      price: 0,
      isFree: false,
      slug: "",
    }
  });
  
  const isFree = form.watch("isFree");
  
  // Charger les données du cours
  useEffect(() => {
    // Dans un cas réel, cela serait une requête API
    // Simulation du chargement des données
    setTimeout(() => {
      form.reset({
        title: fakeCourseData.title,
        description: fakeCourseData.description,
        coverImage: fakeCourseData.coverImage,
        price: fakeCourseData.price,
        isFree: fakeCourseData.isFree,
        slug: fakeCourseData.slug
      });
      
      setModules(fakeCourseData.modules);
      setPublicUrl(`${window.location.origin}/c/${fakeCourseData.slug}`);
    }, 500);
  }, [id]);
  
  // Gestion des modules
  const addModule = () => {
    const newModule: CourseModule = {
      id: Date.now().toString(),
      title: `Module ${modules.length + 1}`,
      type: 'text',
      content: '',
    };
    setModules([...modules, newModule]);
  };
  
  const updateModule = (updatedModule: CourseModule) => {
    setModules(modules.map(module => 
      module.id === updatedModule.id ? updatedModule : module
    ));
  };
  
  const deleteModule = (moduleId: string) => {
    setModules(modules.filter(module => module.id !== moduleId));
  };
  
  // Soumission du formulaire
  const onSubmit = async (data: CourseFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Données du cours mises à jour:', data);
      console.log('Modules mis à jour:', modules);
      
      toast({
        title: "Cours mis à jour avec succès!",
        description: "Toutes les modifications ont été enregistrées.",
      });
    } catch (error) {
      toast({
        title: "Erreur lors de la mise à jour",
        description: "Veuillez réessayer ultérieurement.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Copier l'URL publique dans le presse-papier
  const copyPublicUrl = () => {
    navigator.clipboard.writeText(publicUrl);
    toast({
      title: "URL copiée!",
      description: "L'URL publique du cours a été copiée dans le presse-papier.",
    });
  };

  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold">Éditer le cours</h1>
        </div>
        <div className="flex items-center gap-2">
          <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Link className="h-4 w-4" />
                Partager
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Partager le cours</DialogTitle>
                <DialogDescription>
                  Copiez le lien public de votre cours pour le partager avec vos étudiants.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2 mt-4">
                <Input readOnly value={publicUrl} />
                <Button size="sm" onClick={copyPublicUrl}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <DialogFooter className="mt-6">
                <Button onClick={() => window.open(publicUrl, '_blank')}>
                  <Eye className="h-4 w-4 mr-2" />
                  Voir la page publique
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Button onClick={() => navigate(`/courses/${id}/view`)}>
            <Eye className="h-4 w-4 mr-2" />
            Prévisualiser
          </Button>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="content">Contenu du cours</TabsTrigger>
          <TabsTrigger value="settings">Paramètres</TabsTrigger>
        </TabsList>
        
        <TabsContent value="content" className="space-y-6">
          {/* Modules du cours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Modules du cours</span>
                <Button onClick={addModule}>
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter un module
                </Button>
              </CardTitle>
              <CardDescription>
                Gérez les modules (leçons) de votre cours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {modules.length === 0 ? (
                <div className="text-center p-12 border-2 border-dashed rounded-lg">
                  <p className="text-muted-foreground">
                    Aucun module dans ce cours. Ajoutez-en un pour commencer.
                  </p>
                </div>
              ) : (
                modules.map((module, index) => (
                  <ModuleEditor
                    key={module.id}
                    module={module}
                    index={index}
                    onUpdate={updateModule}
                    onDelete={deleteModule}
                  />
                ))
              )}
            </CardContent>
            <CardFooter className="border-t p-6">
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={addModule}
              >
                <Plus className="h-4 w-4 mr-2" />
                Ajouter un module
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informations générales</CardTitle>
                  <CardDescription>
                    Modifiez les détails principaux de votre cours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Titre du cours */}
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Titre du cours</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Description du cours */}
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Image de couverture */}
                  <FormField
                    control={form.control}
                    name="coverImage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image de couverture</FormLabel>
                        <FormControl>
                          <ImageUploader
                            value={field.value || ''}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Slug pour l'URL */}
                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slug (URL)</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>
                          L'identifiant unique utilisé dans l'URL de votre cours: {window.location.origin}/c/{field.value}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Option cours gratuit/payant */}
                  <FormField
                    control={form.control}
                    name="isFree"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Cours gratuit</FormLabel>
                          <FormDescription>
                            Offrez ce cours gratuitement à vos étudiants
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  {/* Prix du cours (visible uniquement si le cours est payant) */}
                  {!isFree && (
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prix (€)</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" step="0.01" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </CardContent>
                <CardFooter className="flex justify-end gap-2 border-t p-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate('/dashboard')}
                  >
                    Annuler
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enregistrement..." : "Enregistrer"}
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </Form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CourseEdit;
