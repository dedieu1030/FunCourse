
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const PurchasedCourses: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Mes cours achetés</h1>
      
      <Card>
        <CardHeader>
          <h2 className="text-xl font-medium">Vos cours</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Cette page affichera la liste de tous les cours que vous avez achetés.
            Fonctionnalité en cours de développement.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PurchasedCourses;
