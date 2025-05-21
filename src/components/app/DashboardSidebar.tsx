
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Home,
  Plus,
  Book,
  MessageSquare,
  CreditCard,
  Settings,
  LogOut,
} from 'lucide-react';

const DashboardSidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <aside className="w-64 border-r border-border h-screen bg-sidebar sticky top-0 hidden md:block">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-border flex items-center">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">FunCours</span>
          </Link>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-1">
            <Link to="/dashboard">
              <Button
                variant={isActive('/dashboard') ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  isActive('/dashboard') && 'bg-primary/10 text-primary'
                )}
              >
                <Home className="mr-2 h-4 w-4" />
                Tableau de bord
              </Button>
            </Link>
            
            <Link to="/courses/create">
              <Button
                variant={isActive('/courses/create') ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  isActive('/courses/create') && 'bg-primary/10 text-primary'
                )}
              >
                <Plus className="mr-2 h-4 w-4" />
                Créer un cours
              </Button>
            </Link>
            
            <Link to="/purchased-courses">
              <Button
                variant={isActive('/purchased-courses') ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  isActive('/purchased-courses') && 'bg-primary/10 text-primary'
                )}
              >
                <Book className="mr-2 h-4 w-4" />
                Mes cours achetés
              </Button>
            </Link>
            
            <Link to="/questions">
              <Button
                variant={isActive('/questions') ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  isActive('/questions') && 'bg-primary/10 text-primary'
                )}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Mes questions
              </Button>
            </Link>
            
            <Link to="/payments">
              <Button
                variant={isActive('/payments') ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  isActive('/payments') && 'bg-primary/10 text-primary'
                )}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Mes paiements
              </Button>
            </Link>
            
            <Link to="/settings">
              <Button
                variant={isActive('/settings') ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  isActive('/settings') && 'bg-primary/10 text-primary'
                )}
              >
                <Settings className="mr-2 h-4 w-4" />
                Réglages
              </Button>
            </Link>
          </div>
        </nav>
        
        <div className="p-4 border-t border-border">
          <Link to="/login">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground">
              <LogOut className="mr-2 h-4 w-4" />
              Se déconnecter
            </Button>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
