
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import NotFound from "./pages/NotFound";
import Home from "./pages/public/Home";
import Pricing from "./pages/public/Pricing";
import HowItWorks from "./pages/public/HowItWorks";
import TermsOfService from "./pages/public/TermsOfService";
import PrivacyPolicy from "./pages/public/PrivacyPolicy";
import LegalNotice from "./pages/public/LegalNotice";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/app/Dashboard";
import CourseCreate from "./pages/app/CourseCreate";
import CourseEdit from "./pages/app/CourseEdit";
import PurchasedCourses from "./pages/app/PurchasedCourses";
import Questions from "./pages/app/Questions";
import Payments from "./pages/app/Payments";
import Settings from "./pages/app/Settings";
import CourseView from "./pages/app/CourseView";
import PublicCourse from "./pages/public/PublicCourse";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingLayout />}>
            <Route index element={<Home />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="legal-notice" element={<LegalNotice />} />
          </Route>
          
          {/* Public Course Page */}
          <Route path="/c/:slug" element={<PublicCourse />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Protected App Routes - Will add authentication check later */}
          <Route path="/" element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="courses/create" element={<CourseCreate />} />
            <Route path="courses/:id/edit" element={<CourseEdit />} />
            <Route path="courses/:id/view" element={<CourseView />} />
            <Route path="purchased-courses" element={<PurchasedCourses />} />
            <Route path="questions" element={<Questions />} />
            <Route path="payments" element={<Payments />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
