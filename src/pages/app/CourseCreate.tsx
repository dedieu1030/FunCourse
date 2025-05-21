
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const CourseCreate: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Créer un nouveau cours</h1>
      
      <Card>
        <CardHeader>
          <h2 className="text-xl font-medium">Détails du cours</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Cette page permettra de créer un nouveau cours avec titre, description, image de couverture et prix.
            Fonctionnalité en cours de développement.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseCreate;
