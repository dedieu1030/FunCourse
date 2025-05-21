
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Trash, Video, Text, Edit, ArrowUp, ArrowDown } from 'lucide-react';
import { CourseModule } from '@/pages/app/CourseCreate';

interface ModuleEditorProps {
  module: CourseModule;
  index: number;
  onUpdate: (module: CourseModule) => void;
  onDelete: (moduleId: string) => void;
}

const ModuleEditor: React.FC<ModuleEditorProps> = ({ 
  module, 
  index, 
  onUpdate, 
  onDelete 
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editedModule, setEditedModule] = useState<CourseModule>({...module});
  const [activeTab, setActiveTab] = useState<string>(module.type);

  // Mettre à jour un champ du module
  const handleChange = (field: keyof CourseModule, value: string) => {
    setEditedModule({
      ...editedModule,
      [field]: value
    });
  };

  // Changer le type de module (vidéo/texte)
  const handleTypeChange = (value: string) => {
    if (value === 'video' || value === 'text') {
      setEditedModule({
        ...editedModule,
        type: value as 'video' | 'text',
        content: '' // Réinitialiser le contenu quand on change de type
      });
      setActiveTab(value);
    }
  };

  // Sauvegarder les modifications
  const saveChanges = () => {
    onUpdate(editedModule);
    setIsDialogOpen(false);
  };

  return (
    <Card className="border border-gray-200 hover:border-primary/50 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between p-4 space-y-0">
        <div className="font-medium flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs">
            {index + 1}
          </span>
          {module.title || `Module ${index + 1}`}
        </div>
        <div className="flex items-center gap-2">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
                <span className="sr-only">Éditer</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Éditer le module</DialogTitle>
                <DialogDescription>
                  Configurez les détails de ce module d'apprentissage
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                {/* Titre du module */}
                <div className="space-y-2">
                  <Label htmlFor="module-title">Titre du module</Label>
                  <Input
                    id="module-title"
                    value={editedModule.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    placeholder="ex: Introduction à React Hooks"
                  />
                </div>
                
                {/* Type de contenu */}
                <div className="space-y-2">
                  <Label htmlFor="module-type">Type de contenu</Label>
                  <Select 
                    value={editedModule.type} 
                    onValueChange={handleTypeChange}
                  >
                    <SelectTrigger id="module-type">
                      <SelectValue placeholder="Sélectionnez un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video" className="flex items-center gap-2">
                        <Video className="h-4 w-4" /> Vidéo
                      </SelectItem>
                      <SelectItem value="text" className="flex items-center gap-2">
                        <Text className="h-4 w-4" /> Texte
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Contenu du module */}
                <div className="space-y-2">
                  <Label>Contenu</Label>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger 
                        value="video" 
                        disabled={editedModule.type !== 'video'}
                        className="flex items-center gap-2"
                      >
                        <Video className="h-4 w-4" />
                        Vidéo
                      </TabsTrigger>
                      <TabsTrigger 
                        value="text" 
                        disabled={editedModule.type !== 'text'}
                        className="flex items-center gap-2"
                      >
                        <Text className="h-4 w-4" />
                        Texte
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="video" className="space-y-4">
                      <div className="space-y-2">
                        <Input
                          type="url"
                          value={editedModule.content}
                          onChange={(e) => handleChange('content', e.target.value)}
                          placeholder="URL de la vidéo (YouTube, Vimeo, etc.)"
                        />
                        <p className="text-sm text-muted-foreground">
                          Collez l'URL d'une vidéo YouTube, Vimeo, ou un lien direct vers votre vidéo.
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="text" className="space-y-4">
                      <Textarea
                        value={editedModule.content}
                        onChange={(e) => handleChange('content', e.target.value)}
                        placeholder="Écrivez le contenu du module ici..."
                        className="min-h-[200px]"
                      />
                    </TabsContent>
                  </Tabs>
                </div>
                
                {/* PDF optionnel */}
                <div className="space-y-2">
                  <Label htmlFor="module-pdf">PDF optionnel</Label>
                  <Input
                    id="module-pdf"
                    type="url"
                    value={editedModule.pdfUrl || ''}
                    onChange={(e) => handleChange('pdfUrl', e.target.value)}
                    placeholder="URL du fichier PDF"
                  />
                  <p className="text-sm text-muted-foreground">
                    Ajoutez un lien vers un document PDF complémentaire (facultatif).
                  </p>
                </div>
                
                {/* Question du formateur */}
                <div className="space-y-2">
                  <Label htmlFor="module-question">Question pour les étudiants (facultatif)</Label>
                  <Textarea
                    id="module-question"
                    value={editedModule.question || ''}
                    onChange={(e) => handleChange('question', e.target.value)}
                    placeholder="ex: Quels sont les avantages des React Hooks par rapport aux classes?"
                  />
                  <p className="text-sm text-muted-foreground">
                    Posez une question pour encourager la participation et les échanges.
                  </p>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Annuler
                </Button>
                <Button onClick={saveChanges}>
                  Enregistrer
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Button variant="ghost" size="sm" onClick={() => onDelete(module.id)}>
            <Trash className="h-4 w-4" />
            <span className="sr-only">Supprimer</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="text-sm text-muted-foreground flex items-center gap-2">
          {module.type === 'video' ? (
            <>
              <Video className="h-4 w-4" />
              <span>Vidéo</span>
            </>
          ) : (
            <>
              <Text className="h-4 w-4" />
              <span>Texte</span>
            </>
          )}
          {module.pdfUrl && <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">PDF inclus</span>}
          {module.question && <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">Question</span>}
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleEditor;
