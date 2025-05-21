
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '@/components/app/DashboardSidebar';
import DashboardHeader from '@/components/app/DashboardHeader';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex flex-col flex-1">
        <DashboardHeader />
        <main className="flex-grow p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
