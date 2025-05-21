
import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  CreditCard, 
  Download, 
  Search, 
  Calendar, 
  Link, 
  Plus,
  ArrowUpDown,
  Check,
  Book
} from 'lucide-react';

// Interface pour les paiements
interface Payment {
  id: string;
  date: string;
  courseName: string;
  courseId: string;
  studentName: string;
  amount: number;
  status: 'Payé' | 'En attente' | 'Remboursé';
}

const Payments: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [stripeConnected, setStripeConnected] = useState<boolean>(false);
  const [sortField, setSortField] = useState<keyof Payment>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [dateFilter, setDateFilter] = useState<string>("all");
  const [courseFilter, setCourseFilter] = useState<string>("all");
  
  // Charger les données des paiements
  useEffect(() => {
    // Simuler un appel API
    setTimeout(() => {
      // Données fictives pour les paiements
      const fakePayments: Payment[] = [
        { 
          id: 'PAY-1234',
          date: '15/04/2025',
          courseName: 'Introduction à React',
          courseId: 'c1',
          studentName: 'Marie Dupont',
          amount: 29.99,
          status: 'Payé'
        },
        { 
          id: 'PAY-1235',
          date: '16/04/2025',
          courseName: 'Les bases du JavaScript',
          courseId: 'c2',
          studentName: 'Thomas Martin',
          amount: 19.99,
          status: 'Payé'
        },
        { 
          id: 'PAY-1236',
          date: '18/04/2025',
          courseName: 'Introduction à React',
          courseId: 'c1',
          studentName: 'Julie Dubois',
          amount: 29.99,
          status: 'Payé'
        },
        { 
          id: 'PAY-1237',
          date: '20/04/2025',
          courseName: 'Les bases du JavaScript',
          courseId: 'c2',
          studentName: 'Nicolas Lefebvre',
          amount: 19.99,
          status: 'Payé'
        },
        { 
          id: 'PAY-1238',
          date: '22/04/2025',
          courseName: 'Introduction à React',
          courseId: 'c1',
          studentName: 'Sophie Bernard',
          amount: 29.99,
          status: 'En attente'
        },
        { 
          id: 'PAY-1239',
          date: '10/04/2025',
          courseName: 'API REST avec Node.js',
          courseId: 'c3',
          studentName: 'Alexandre Moreau',
          amount: 39.99,
          status: 'Payé'
        },
        { 
          id: 'PAY-1240',
          date: '05/04/2025',
          courseName: 'API REST avec Node.js',
          courseId: 'c3',
          studentName: 'Camille Petit',
          amount: 39.99,
          status: 'Remboursé'
        }
      ];
      
      setPayments(fakePayments);
      setLoading(false);
      setStripeConnected(true);
    }, 1000);
  }, []);

  // Fonction pour trier les paiements
  const sortPayments = (field: keyof Payment) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Filtrer et trier les paiements
  const filteredAndSortedPayments = () => {
    let result = [...payments];
    
    // Appliquer les filtres
    if (searchTerm) {
      result = result.filter(payment =>
        payment.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (dateFilter !== "all") {
      const now = new Date();
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      const ninetyDaysAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
      
      result = result.filter(payment => {
        const paymentDate = parseDate(payment.date);
        if (dateFilter === "30days") {
          return paymentDate >= thirtyDaysAgo;
        } else if (dateFilter === "90days") {
          return paymentDate >= ninetyDaysAgo;
        }
        return true;
      });
    }
    
    if (courseFilter !== "all") {
      result = result.filter(payment => payment.courseId === courseFilter);
    }
    
    // Trier les résultats
    return result.sort((a, b) => {
      if (sortField === 'amount') {
        return sortDirection === 'asc' 
          ? a.amount - b.amount 
          : b.amount - a.amount;
      } else if (sortField === 'date') {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return sortDirection === 'asc' 
          ? dateA.getTime() - dateB.getTime() 
          : dateB.getTime() - dateA.getTime();
      } else {
        const valA = String(a[sortField]).toLowerCase();
        const valB = String(b[sortField]).toLowerCase();
        return sortDirection === 'asc' 
          ? valA.localeCompare(valB) 
          : valB.localeCompare(valA);
      }
    });
  };
  
  // Helper pour parser les dates au format DD/MM/YYYY
  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  };
  
  // Calculer les statistiques
  const totalRevenue = payments
    .filter(payment => payment.status === 'Payé')
    .reduce((total, payment) => total + payment.amount, 0);
  
  const salesCount = payments.filter(payment => payment.status === 'Payé').length;
  
  const averageAmount = salesCount > 0 
    ? totalRevenue / salesCount 
    : 0;
    
  const pendingAmount = payments
    .filter(payment => payment.status === 'En attente')
    .reduce((total, payment) => total + payment.amount, 0);

  // Extraire les cours uniques pour le filtre
  const uniqueCourses = [
    { id: 'all', name: 'Tous les cours' },
    ...Array.from(
      new Map(payments.map(p => [p.courseId, { id: p.courseId, name: p.courseName }])).values()
    )
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Mes paiements</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <Download size={16} />
          Exporter les données
        </Button>
      </div>
      
      {!stripeConnected ? (
        <Card>
          <CardContent className="p-10 flex flex-col items-center text-center">
            <CreditCard className="h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-xl font-bold mb-2">Connectez Stripe pour recevoir des paiements</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Connectez votre compte Stripe pour commencer à vendre vos cours et recevoir des paiements.
            </p>
            <Button className="flex items-center gap-2">
              <Link size={16} />
              Connecter Stripe
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Cartes de statistiques */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6 flex flex-col">
                <p className="text-sm text-muted-foreground">Total des revenus</p>
                <p className="text-3xl font-bold mt-2">{totalRevenue.toFixed(2)} €</p>
                <p className="text-sm text-muted-foreground mt-2">
                  <span className="text-green-500">↑ 12%</span> depuis le mois dernier
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col">
                <p className="text-sm text-muted-foreground">Nombre de ventes</p>
                <p className="text-3xl font-bold mt-2">{salesCount}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  <span className="text-green-500">↑ 8%</span> depuis le mois dernier
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col">
                <p className="text-sm text-muted-foreground">Panier moyen</p>
                <p className="text-3xl font-bold mt-2">{averageAmount.toFixed(2)} €</p>
                <p className="text-sm text-muted-foreground mt-2">
                  <span className="text-green-500">↑ 3%</span> depuis le mois dernier
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col">
                <p className="text-sm text-muted-foreground">Paiements en attente</p>
                <p className="text-3xl font-bold mt-2">{pendingAmount.toFixed(2)} €</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {payments.filter(p => p.status === 'En attente').length} paiements
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Filtres et tableau des paiements */}
          <Card>
            <CardHeader>
              <CardTitle>Historique des paiements</CardTitle>
              <CardDescription>
                Consultez et gérez tous les paiements reçus pour vos cours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher par cours, étudiant ou ID..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Select value={dateFilter} onValueChange={setDateFilter}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <Calendar className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Période" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les périodes</SelectItem>
                    <SelectItem value="30days">30 derniers jours</SelectItem>
                    <SelectItem value="90days">90 derniers jours</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={courseFilter} onValueChange={setCourseFilter}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <Book className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Cours" />
                  </SelectTrigger>
                  <SelectContent>
                    {uniqueCourses.map(course => (
                      <SelectItem key={course.id} value={course.id}>
                        {course.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Chargement des paiements...</p>
                  </div>
                </div>
              ) : filteredAndSortedPayments().length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Aucun paiement trouvé avec ces critères.</p>
                </div>
              ) : (
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead 
                          className="cursor-pointer"
                          onClick={() => sortPayments('id')}
                        >
                          <div className="flex items-center">
                            ID
                            {sortField === 'id' && (
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            )}
                          </div>
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer"
                          onClick={() => sortPayments('date')}
                        >
                          <div className="flex items-center">
                            Date
                            {sortField === 'date' && (
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            )}
                          </div>
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer"
                          onClick={() => sortPayments('courseName')}
                        >
                          <div className="flex items-center">
                            Cours
                            {sortField === 'courseName' && (
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            )}
                          </div>
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer"
                          onClick={() => sortPayments('studentName')}
                        >
                          <div className="flex items-center">
                            Étudiant
                            {sortField === 'studentName' && (
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            )}
                          </div>
                        </TableHead>
                        <TableHead 
                          className="text-right cursor-pointer"
                          onClick={() => sortPayments('amount')}
                        >
                          <div className="flex items-center justify-end">
                            Montant
                            {sortField === 'amount' && (
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            )}
                          </div>
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer"
                          onClick={() => sortPayments('status')}
                        >
                          <div className="flex items-center">
                            Statut
                            {sortField === 'status' && (
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            )}
                          </div>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredAndSortedPayments().map((payment) => (
                        <TableRow key={payment.id}>
                          <TableCell className="font-medium">{payment.id}</TableCell>
                          <TableCell>{payment.date}</TableCell>
                          <TableCell>{payment.courseName}</TableCell>
                          <TableCell>{payment.studentName}</TableCell>
                          <TableCell className="text-right">{payment.amount.toFixed(2)} €</TableCell>
                          <TableCell>
                            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                              payment.status === 'Payé'
                                ? 'bg-green-50 text-green-700'
                                : payment.status === 'En attente'
                                ? 'bg-yellow-50 text-yellow-700'
                                : 'bg-red-50 text-red-700'
                            }`}>
                              {payment.status === 'Payé' && <Check className="mr-1 h-3 w-3" />}
                              {payment.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Information sur Stripe Connect */}
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CreditCard className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Compte Stripe connecté</p>
                  <p className="text-sm text-muted-foreground">
                    Vos paiements sont traités automatiquement via Stripe
                  </p>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Gérer mon compte Stripe</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Gérer mon compte Stripe</DialogTitle>
                    <DialogDescription>
                      Accédez à votre tableau de bord Stripe pour gérer vos paiements, voir les transactions détaillées et configurer vos préférences.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      En cliquant sur le bouton ci-dessous, vous serez redirigé vers votre tableau de bord Stripe dans une nouvelle fenêtre.
                    </p>
                  </div>
                  <DialogFooter>
                    <Button onClick={() => window.open('https://dashboard.stripe.com', '_blank')}>
                      Ouvrir le tableau de bord Stripe
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default Payments;
