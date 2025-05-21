
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const CourseView: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Consultation du cours</h1>
      
      <Card>
        <CardHeader>
          <h2 className="text-xl font-medium">Cours #{id}</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Cette page permettra de consulter et suivre un cours acheté.
            Fonctionnalité en cours de développement.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseView;
