
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Réglages</h1>
      
      <Card>
        <CardHeader>
          <h2 className="text-xl font-medium">Votre compte</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Cette page vous permettra de gérer vos informations de compte, vos paramètres et vos préférences.
            Fonctionnalité en cours de développement.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
