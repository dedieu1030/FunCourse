
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { Plus, Trash, Upload, Link, Image, Book, Edit } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import ModuleEditor from '@/components/app/ModuleEditor';
import ImageUploader from '@/components/app/ImageUploader';

// Définition du schéma de validation pour le formulaire
const courseFormSchema = z.object({
  title: z.string().min(5, "Le titre doit contenir au moins 5 caractères"),
  description: z.string().min(20, "La description doit contenir au moins 20 caractères"),
  coverImage: z.string().optional(),
  price: z.coerce.number().min(0, "Le prix ne peut pas être négatif"),
  isFree: z.boolean().default(false),
});

type CourseFormValues = z.infer<typeof courseFormSchema>;

// Type pour un module de cours
export type CourseModule = {
  id: string;
  title: string;
  type: 'video' | 'text';
  content: string;
  pdfUrl?: string;
  question?: string;
};

const CourseCreate: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [modules, setModules] = useState<CourseModule[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialisation du formulaire avec react-hook-form et zod
  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      title: "",
      description: "",
      coverImage: "",
      price: 0,
      isFree: true,
    },
  });

  const isFree = form.watch("isFree");

  // Ajout d'un nouveau module
  const addModule = () => {
    const newModule: CourseModule = {
      id: Date.now().toString(),
      title: `Module ${modules.length + 1}`,
      type: 'text',
      content: '',
    };
    setModules([...modules, newModule]);
  };

  // Mise à jour d'un module
  const updateModule = (updatedModule: CourseModule) => {
    setModules(modules.map(module => 
      module.id === updatedModule.id ? updatedModule : module
    ));
  };

  // Suppression d'un module
  const deleteModule = (moduleId: string) => {
    setModules(modules.filter(module => module.id !== moduleId));
  };

  // Soumission du formulaire
  const onSubmit = async (data: CourseFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Si le cours est gratuit, le prix est à 0
      if (data.isFree) {
        data.price = 0;
      }
      
      // Ici, vous enverriez les données au backend
      console.log('Données du cours:', data);
      console.log('Modules:', modules);
      
      // Simulation d'un délai de traitement
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Cours créé avec succès!",
        description: "Vous allez être redirigé vers l'éditeur de cours.",
      });
      
      // Redirection vers la page d'édition du cours (ici avec un ID factice)
      // Dans une implémentation réelle, vous utiliseriez l'ID retourné par le backend
      setTimeout(() => navigate('/courses/new-course-id/edit'), 1500);
    } catch (error) {
      console.error('Erreur lors de la création du cours:', error);
      toast({
        title: "Erreur lors de la création du cours",
        description: "Veuillez réessayer ultérieurement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 pb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Créer un nouveau cours</h1>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Informations générales</CardTitle>
              <CardDescription>
                Définissez les informations principales de votre cours
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
                      <Input placeholder="ex: Apprendre React en 30 jours" {...field} />
                    </FormControl>
                    <FormDescription>
                      Un titre clair et concis pour attirer vos étudiants.
                    </FormDescription>
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
                        placeholder="Décrivez ce que les étudiants apprendront..." 
                        className="min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Une description détaillée de ce que votre cours propose.
                    </FormDescription>
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
                    <FormDescription>
                      Une image attrayante pour représenter votre cours (formats recommandés: JPG, PNG - 1280x720px).
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
                        Offrez ce cours gratuitement à vos étudiants.
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
                      <FormDescription>
                        Définissez un prix compétitif pour votre cours.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </CardContent>
          </Card>
          
          {/* Section des modules */}
          <Card>
            <CardHeader>
              <CardTitle>Modules du cours</CardTitle>
              <CardDescription>
                Ajoutez les modules (leçons) que contiendra votre cours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {modules.length === 0 ? (
                <div className="text-center p-8 border-2 border-dashed rounded-lg">
                  <Book className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                  <h3 className="text-lg font-medium">Aucun module</h3>
                  <p className="text-muted-foreground mb-4">
                    Commencez à créer le contenu de votre cours en ajoutant des modules.
                  </p>
                  <Button type="button" onClick={addModule}>
                    <Plus className="mr-2 h-4 w-4" />
                    Ajouter un module
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {modules.map((module, index) => (
                    <ModuleEditor
                      key={module.id}
                      module={module}
                      index={index}
                      onUpdate={updateModule}
                      onDelete={deleteModule}
                    />
                  ))}
                  <Button type="button" variant="outline" onClick={addModule} className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Ajouter un module
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between border-t p-6">
              <Button type="button" variant="outline" onClick={() => navigate('/dashboard')}>
                Annuler
              </Button>
              <Button type="submit" disabled={isSubmitting || modules.length === 0}>
                {isSubmitting ? "Création en cours..." : "Créer le cours"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default CourseCreate;
