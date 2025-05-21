
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Questions: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Mes questions</h1>
      
      <Card>
        <CardHeader>
          <h2 className="text-xl font-medium">Questions des élèves</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Cette page affichera toutes les questions que vos élèves ont posées sur vos cours.
            Fonctionnalité en cours de développement.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Questions;
