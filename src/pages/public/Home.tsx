
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, Video, Share2 } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            Créez et vendez vos cours en ligne, en toute simplicité
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            FunCours vous permet de partager votre savoir sans complexité et de générer des revenus en toute autonomie
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-full text-base px-8">
              <Link to="/signup">Créer mon cours</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full text-base px-8">
              <Link to="/login">Se connecter</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* How it works - 3 Step Process */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Comment ça marche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">1. Créer</h3>
              <p className="text-muted-foreground">
                Créez votre cours avec un titre accrocheur, une description claire et une image attrayante
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">2. Ajouter</h3>
              <p className="text-muted-foreground">
                Ajoutez vos modules avec du texte, des vidéos et des documents pour construire votre contenu pédagogique
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Share2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">3. Partager</h3>
              <p className="text-muted-foreground">
                Partagez le lien de votre cours à vos élèves et recevez directement les paiements sur votre compte
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="rounded-full">
              <Link to="/how-it-works">
                En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Une plateforme simple et efficace</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <p><span className="font-medium">Pas de marketplace</span> - Partagez vos liens uniquement avec les personnes que vous souhaitez</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <p><span className="font-medium">Paiements sécurisés</span> - Recevez directement les revenus de vos ventes sur votre compte</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <p><span className="font-medium">Support interactif</span> - Échangez avec vos élèves via un système de questions-réponses</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <p><span className="font-medium">Analytics simples</span> - Suivez les ventes et la progression de vos élèves</p>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild className="rounded-full">
                  <Link to="/pricing">
                    Voir nos tarifs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-secondary rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-w-16 aspect-h-9 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Interface de FunCours" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials (Optional) */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Ils utilisent FunCours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-primary/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">Marie L.</h4>
                  <p className="text-sm text-muted-foreground">Professeur de yoga</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "FunCours m'a permis de créer facilement mes cours de yoga en ligne et de générer un revenu complémentaire sans avoir à gérer une plateforme compliquée."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-primary/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">Thomas D.</h4>
                  <p className="text-sm text-muted-foreground">Développeur web</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "J'ai créé un mini-cours sur JavaScript que je vends à mes abonnés. La simplicité de FunCours me fait gagner un temps précieux."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-primary/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">Sophie M.</h4>
                  <p className="text-sm text-muted-foreground">Consultante marketing</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Grâce à FunCours, j'ai monétisé mon expertise en marketing digital avec un cours que je peux partager uniquement avec mes clients."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à partager votre savoir ?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Rejoignez FunCours dès aujourd'hui et commencez à créer et vendre vos cours en toute simplicité
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full bg-white text-primary hover:bg-white/90">
            <Link to="/signup">
              Créer mon compte gratuitement <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
