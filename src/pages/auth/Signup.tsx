
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // This is just a mock registration function
  // In a real application, this would connect to your authentication service
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !email || !password) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
      });
      return;
    }
    
    if (!acceptTerms) {
      toast({
        title: "Erreur",
        description: "Vous devez accepter les conditions générales d'utilisation",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Mock successful signup
      // In a real app, you would register with a backend service here
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Compte créé avec succès",
        description: "Bienvenue sur FunCours !",
      });
      
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Échec de l'inscription",
        description: "Une erreur s'est produite lors de la création de votre compte",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-card p-8 rounded-lg border border-border">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <span className="text-2xl font-bold text-primary">FunCours</span>
          </Link>
          <h1 className="mt-6 text-2xl font-bold">Créer un compte</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Commencez à créer et vendre vos cours en ligne
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName">Prénom</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="lastName">Nom</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground mt-1">
                Min. 8 caractères, incluant une majuscule et un chiffre
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <Checkbox
                  id="acceptTerms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="acceptTerms" className="text-muted-foreground cursor-pointer">
                  J'accepte les{" "}
                  <Link to="/terms-of-service" className="text-primary hover:underline">
                    conditions générales d'utilisation
                  </Link>
                  {" "}et la{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline">
                    politique de confidentialité
                  </Link>
                </label>
              </div>
            </div>
          </div>
          
          <Button type="submit" className="w-full rounded-full" disabled={isLoading}>
            {isLoading ? "Création en cours..." : "Créer mon compte"}
          </Button>
          
          {/* Optionally add Google Sign-up here */}
          
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              Déjà un compte ?{' '}
              <Link to="/login" className="font-medium text-primary hover:underline">
                Se connecter
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
