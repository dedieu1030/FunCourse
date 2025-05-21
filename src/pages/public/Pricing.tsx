
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Tarification simple et transparente</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deux formules adaptées à vos besoins pour créer et vendre vos cours en ligne
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="border border-border rounded-lg overflow-hidden bg-card">
            <div className="p-6 border-b border-border">
              <h2 className="text-2xl font-bold">Gratuit</h2>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold">0€</span>
                <span className="text-muted-foreground ml-2">/ mois</span>
              </div>
              <p className="text-muted-foreground">Parfait pour débuter</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>3 cours maximum</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>10 modules par cours</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Upload vidéo limité à 100 Mo</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Vente de cours avec frais de 8%</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Support par email</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Cours privés</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Analytics avancés</span>
                </li>
              </ul>
              <Button asChild className="w-full mt-6 rounded-full">
                <Link to="/signup">Commencer gratuitement</Link>
              </Button>
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="border-2 border-primary rounded-lg overflow-hidden bg-card relative">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground py-1 px-3 text-xs font-medium">
              Recommandé
            </div>
            <div className="p-6 border-b border-border">
              <h2 className="text-2xl font-bold">Pro</h2>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold">19€</span>
                <span className="text-muted-foreground ml-2">/ mois</span>
              </div>
              <p className="text-muted-foreground">Pour les créateurs sérieux</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Cours illimités</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Modules illimités par cours</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Upload vidéo limité à 2 Go</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Vente de cours avec frais réduits de 3%</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Support prioritaire</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Cours privés avec accès par mot de passe</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Analytics avancés et exportations</span>
                </li>
              </ul>
              <Button asChild className="w-full mt-6 rounded-full">
                <Link to="/signup">Commencer l'essai Pro</Link>
              </Button>
              <p className="text-xs text-center mt-2 text-muted-foreground">14 jours d'essai gratuit, sans engagement</p>
            </div>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Questions fréquentes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Puis-je passer du plan gratuit au plan Pro à tout moment ?</h3>
              <p className="text-muted-foreground">
                Oui, vous pouvez passer au plan Pro à tout moment. Tous vos cours et données seront conservés lors de la mise à niveau.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Comment fonctionnent les frais sur les ventes ?</h3>
              <p className="text-muted-foreground">
                Les frais sont prélevés uniquement sur les ventes réalisées. Par exemple, pour un cours vendu 50€ avec le plan gratuit, vous recevrez 46€ (8% de frais).
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Comment sont versés les paiements ?</h3>
              <p className="text-muted-foreground">
                Les paiements sont versés directement sur votre compte bancaire via Stripe Connect. Les versements sont effectués tous les 7 jours.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Puis-je annuler mon abonnement Pro à tout moment ?</h3>
              <p className="text-muted-foreground">
                Oui, vous pouvez annuler votre abonnement à tout moment. Vous conserverez les avantages Pro jusqu'à la fin de la période facturée.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Prêt à partager votre savoir ?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Commencez dès aujourd'hui avec notre offre gratuite ou essayez notre offre Pro pendant 14 jours sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/signup">Créer mon compte</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/how-it-works">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
