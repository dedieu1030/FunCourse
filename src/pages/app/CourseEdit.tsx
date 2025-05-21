
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const CourseEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Modifier le cours</h1>
      
      <Card>
        <CardHeader>
          <h2 className="text-xl font-medium">Édition du cours #{id}</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Cette page permettra de modifier un cours existant et ses modules.
            Fonctionnalité en cours de développement.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseEdit;
