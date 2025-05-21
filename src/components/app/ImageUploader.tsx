
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Link, Image } from 'lucide-react';

interface ImageUploaderProps {
  value: string;
  onChange: (value: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ value, onChange }) => {
  const [activeTab, setActiveTab] = useState<string>("upload");
  const [imageUrl, setImageUrl] = useState<string>(value || '');
  
  // Dans une implémentation réelle, cette fonction enverrait le fichier à un serveur
  // et récupérerait l'URL de l'image téléchargée
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Simuler le téléchargement
      console.log("Fichier à télécharger:", file);
      
      // Créer une URL temporaire pour prévisualiser l'image
      const tempUrl = URL.createObjectURL(file);
      setImageUrl(tempUrl);
      onChange(tempUrl);
    }
  };
  
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
    onChange(e.target.value);
  };
  
  return (
    <div className="space-y-4">
      <Tabs defaultValue="upload" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload" className="flex items-center gap-2">
            <Upload size={16} />
            Télécharger
          </TabsTrigger>
          <TabsTrigger value="url" className="flex items-center gap-2">
            <Link size={16} />
            URL externe
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-4">
          <div className="flex items-center justify-center w-full">
            <label htmlFor="image-upload" className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-3 text-gray-500" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Cliquez pour télécharger</span> ou glissez-déposez
                </p>
                <p className="text-xs text-gray-500">PNG, JPG (MAX. 2MB)</p>
              </div>
              <Input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
            </label>
          </div>
        </TabsContent>
        
        <TabsContent value="url">
          <Input
            type="url"
            placeholder="https://example.com/image.jpg"
            value={imageUrl}
            onChange={handleUrlChange}
          />
        </TabsContent>
      </Tabs>
      
      {imageUrl && (
        <Card>
          <CardContent className="p-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <img 
                src={imageUrl} 
                alt="Aperçu de l'image" 
                className="w-full h-full object-cover"
                onError={() => {
                  setImageUrl('');
                  onChange('');
                }} 
              />
              <Button
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => {
                  setImageUrl('');
                  onChange('');
                }}
              >
                Supprimer
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ImageUploader;
