
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // This is just a mock authentication function
  // In a real application, this would connect to your authentication service
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Mock successful login
      // In a real app, you would authenticate with a backend service here
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Connexion réussie",
        description: "Bienvenue sur FunCours !",
      });
      
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Échec de la connexion",
        description: "Email ou mot de passe incorrect",
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
          <h1 className="mt-6 text-2xl font-bold">Connexion</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Accédez à votre espace personnel
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Mot de passe</Label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Mot de passe oublié ?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full rounded-full" disabled={isLoading}>
            {isLoading ? "Connexion en cours..." : "Se connecter"}
          </Button>
          
          {/* Optionally add Google Sign-in here */}
          
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              Pas encore de compte ?{' '}
              <Link to="/signup" className="font-medium text-primary hover:underline">
                Créer un compte
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
