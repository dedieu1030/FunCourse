
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Payments: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Mes paiements</h1>
      
      <Card>
        <CardHeader>
          <h2 className="text-xl font-medium">Historique des paiements</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Cette page affichera l'historique de tous vos paiements reçus pour vos cours.
            Fonctionnalité en cours de développement.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payments;
