import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingCTA from "@/components/FloatingCTA";
import Index from "./pages/Index";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

// Course Pages
import SoftwareTestingTraining from "./pages/SoftwareTestingTraining";
import FullStackJavaDevelopment from "./pages/FullStackJavaDevelopment";
import FullStackPythonDevelopment from "./pages/FullStackPythonDevelopment";
import FullStackWebDevelopment from "./pages/FullStackWebDevelopment";
import DataScienceWithPython from "./pages/DataScienceWithPython";
import JavaDevelopmentTraining from "./pages/JavaDevelopmentTraining";
import PythonDevelopmentTraining from "./pages/PythonDevelopmentTraining";
import WebDesigningTraining from "./pages/WebDesigningTraining";
import ReactTraining from "./pages/ReactTraining";
import AngularTraining from "./pages/AngularTraining";
import RPATraining from "./pages/RPATraining";

// Non-IT Course Pages
import DigitalMarketing from "./pages/DigitalMarketing";
import DataAnalysisVisualization from "./pages/DataAnalysisVisualization";
import GraphicDesigning from "./pages/GraphicDesigning";
import WebGraphicDesigning from "./pages/WebGraphicDesigning";
import ManagementInformationSystems from "./pages/ManagementInformationSystems";
import InformationTechnologyProgramme from "./pages/InformationTechnologyProgramme";
import FinancialAccounting from "./pages/FinancialAccounting";
import Accounting from "./pages/Accounting";
import Taxation from "./pages/Taxation";

// Dual Degree Pages
import BCA from "./pages/BCA";
import QuastechDegreeProgram from "./pages/QuastechDegreeProgram";

// Quick Links Pages
import PlacementPage from "./pages/PlacementPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Global Floating CTA - Appears on all pages */}
        <FloatingCTA />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* IT Course Pages */}
          <Route path="/software-testing-training" element={<SoftwareTestingTraining />} />
          <Route path="/full-stack-java-development" element={<FullStackJavaDevelopment />} />
          <Route path="/full-stack-python-development" element={<FullStackPythonDevelopment />} />
          <Route path="/web-development-course" element={<FullStackWebDevelopment />} />
          <Route path="/python-data-science" element={<DataScienceWithPython />} />
          <Route path="/java-training" element={<JavaDevelopmentTraining />} />
          <Route path="/python-training" element={<PythonDevelopmentTraining />} />
          <Route path="/web-designing-training" element={<WebDesigningTraining />} />
          <Route path="/react-course" element={<ReactTraining />} />
          <Route path="/angular-course" element={<AngularTraining />} />
          <Route path="/rpa" element={<RPATraining />} />
          
          {/* Non-IT Course Pages */}
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/data-analysis-visualization" element={<DataAnalysisVisualization />} />
          <Route path="/graphic-designing" element={<GraphicDesigning />} />
          <Route path="/web-graphic-designing" element={<WebGraphicDesigning />} />
          <Route path="/management-information-systems" element={<ManagementInformationSystems />} />
          <Route path="/information-technology-programme" element={<InformationTechnologyProgramme />} />
          <Route path="/financial-accounting" element={<FinancialAccounting />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/taxation" element={<Taxation />} />
          
          {/* Dual Degree Pages */}
          <Route path="/bca" element={<BCA />} />
          <Route path="/quastech-degree-program" element={<QuastechDegreeProgram />} />
          
          {/* Quick Links Pages */}
          <Route path="/placement" element={<PlacementPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
