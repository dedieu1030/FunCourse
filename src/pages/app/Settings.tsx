
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Mail, 
  Lock, 
  CreditCard, 
  Trash,
  Upload
} from 'lucide-react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Settings: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isConnectedToStripe, setIsConnectedToStripe] = useState(false);
  
  // État pour simuler les formulaires
  const [userInfo, setUserInfo] = useState({
    email: "utilisateur@example.com",
    name: "Utilisateur Test",
  });
  
  // Gestionnaires d'événements
  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setProfileImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'une mise à jour de profil
    console.log("Profil mis à jour", userInfo);
  };
  
  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'une mise à jour de mot de passe
    console.log("Mot de passe mis à jour");
  };
  
  const handleConnectToStripe = () => {
    // Simulation d'une connexion à Stripe
    setIsConnectedToStripe(true);
  };
  
  const handleDeleteAccount = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")) {
      console.log("Compte supprimé");
    }
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Réglages</h1>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList>
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Profil
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Sécurité
          </TabsTrigger>
          <TabsTrigger value="payments" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            Paiements
          </TabsTrigger>
        </TabsList>
        
        {/* Onglet Profil */}
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Photo de profil</CardTitle>
              <CardDescription>
                Cette photo apparaîtra sur votre profil et sera visible par vos élèves.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="relative h-24 w-24 rounded-full overflow-hidden border bg-secondary">
                  {profileImage ? (
                    <img 
                      src={profileImage} 
                      alt="Photo de profil" 
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-secondary text-muted-foreground">
                      <User size={32} />
                    </div>
                  )}
                </div>
                <div>
                  <Label htmlFor="profile-image" className="cursor-pointer">
                    <div className="flex items-center space-x-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md">
                      <Upload className="h-4 w-4" />
                      <span>Changer de photo</span>
                    </div>
                    <Input 
                      id="profile-image" 
                      type="file"
                      accept="image/*"
                      onChange={handleProfileImageChange}
                      className="hidden" 
                    />
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
              <CardDescription>
                Mettez à jour vos informations personnelles.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleUpdateProfile}>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input 
                        id="name" 
                        value={userInfo.name}
                        onChange={(e) => setUserInfo({...userInfo, name: e.target.value})} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Adresse email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <Button type="submit">Enregistrer les modifications</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Onglet Sécurité */}
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Modifier votre mot de passe</CardTitle>
              <CardDescription>
                Assurez-vous de choisir un mot de passe sécurisé.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleUpdatePassword}>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Mot de passe actuel</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nouveau mot de passe</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  <Button type="submit">Mettre à jour le mot de passe</Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-destructive">Supprimer votre compte</CardTitle>
              <CardDescription>
                La suppression de votre compte est définitive et supprimera toutes vos données.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="destructive" 
                onClick={handleDeleteAccount}
              >
                <Trash className="mr-2 h-4 w-4" />
                Supprimer mon compte
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Onglet Paiements */}
        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configuration Stripe</CardTitle>
              <CardDescription>
                Connectez votre compte Stripe pour recevoir des paiements pour vos cours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!isConnectedToStripe ? (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Pour recevoir des paiements, vous devez connecter votre compte Stripe.
                    Stripe est notre partenaire de confiance pour le traitement des paiements.
                  </p>
                  <Button onClick={handleConnectToStripe}>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Connecter Stripe
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-green-50 border border-green-200 rounded-md">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-green-800">Compte Stripe connecté</p>
                      <p className="text-sm text-green-600">Vous pouvez maintenant recevoir des paiements.</p>
                    </div>
                  </div>
                  <Button variant="outline" onClick={() => setIsConnectedToStripe(false)}>
                    Déconnecter Stripe
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
