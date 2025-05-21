
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Edit3, Video, Share2, Users, CreditCard, MessageSquare } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Comment ça marche</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Créer et vendre un cours en ligne n'a jamais été aussi simple qu'avec FunCours
          </p>
        </div>
        
        {/* Step by Step Guide */}
        <div className="max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
            <div className="md:col-span-5 flex justify-center md:order-2">
              <div className="bg-secondary rounded-xl p-4 shadow-sm w-full max-w-sm">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Création de cours" 
                  className="rounded-lg w-full object-cover aspect-video"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:order-1 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Edit3 className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">1. Créez votre cours</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Commencez par donner un titre accrocheur à votre cours, rédigez une description claire qui présente votre contenu et ajoutez une image de couverture attractive. Choisissez ensuite si votre cours sera gratuit ou payant.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                  <span>Interface intuitive sans connaissances techniques requises</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                  <span>Personnalisez le prix de vente selon votre expertise</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                  <span>Prévisualisez votre page de cours avant publication</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
            <div className="md:col-span-5 flex justify-center">
              <div className="bg-secondary rounded-xl p-4 shadow-sm w-full max-w-sm">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                  alt="Ajout de contenu" 
                  className="rounded-lg w-full object-cover aspect-video"
                />
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">2. Ajoutez votre contenu</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Structurez votre cours en modules pédagogiques. Chaque module peut contenir une vidéo (uploadée directement ou via un lien YouTube/Vimeo), du texte formaté avec notre éditeur simple, et des documents complémentaires au format PDF.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                  <span>Éditeur de texte WYSIWYG facile à utiliser</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                  <span>Upload de vidéos ou intégration de liens externes</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                  <span>Ajoutez une question pour encourager l'interaction</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 flex justify-center md:order-2">
              <div className="bg-secondary rounded-xl p-4 shadow-sm w-full max-w-sm">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Partage de cours" 
                  className="rounded-lg w-full object-cover aspect-video"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:order-1 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Share2 className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">3. Partagez et vendez</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Une fois votre cours prêt, vous recevez un lien unique à partager avec vos élèves potentiels. Si votre cours est payant, les élèves pourront l'acheter via notre système de paiement sécurisé et y accéder instantanément.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                  <span>Lien unique pour chaque cours créé</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                  <span>Paiements sécurisés via Stripe</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                  <span>Accès immédiat après paiement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Additional Features */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités clés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card border border-border p-6 rounded-lg">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Suivi des élèves</h3>
              <p className="text-muted-foreground">
                Visualisez la progression de vos élèves dans chaque cours et analysez leur taux de complétion des modules.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-card border border-border p-6 rounded-lg">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Paiements simplifiés</h3>
              <p className="text-muted-foreground">
                Recevez automatiquement vos revenus sur votre compte bancaire tous les 7 jours via notre intégration Stripe Connect.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-card border border-border p-6 rounded-lg">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Questions & Réponses</h3>
              <p className="text-muted-foreground">
                Interagissez directement avec vos élèves via un système de Q&R privé pour chaque module de votre cours.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-20 text-center py-12 px-6 bg-primary text-primary-foreground rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Prêt à partager votre savoir ?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
            Créez votre premier cours gratuitement en quelques minutes et commencez à partager votre expertise
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full bg-white text-primary hover:bg-white/90">
            <Link to="/signup">
              Commencer maintenant <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
