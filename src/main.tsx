import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createHashRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import DocumentationLayout from "./components/DocumentationLayout";
import QuickStart from "./pages/docs/QuickStart";
import CudaSetup from "./pages/docs/CudaSetup";
import OllamaSetup from "./pages/docs/OllamaSetup";
import ModelInstallation from "./pages/docs/ModelInstallation";
import SystemOptimization from "./pages/docs/SystemOptimization";
import ApiIntegration from "./pages/docs/ApiIntegration";
import PerformanceMonitoring from "./pages/docs/PerformanceMonitoring";
import SystemDownloads from "./pages/docs/SystemDownloads";
import SalesSupport from "./pages/docs/SalesSupport";
import "./index.css";

const isGithubPages = window.location.hostname.includes("dotku.us");
const createRouter = isGithubPages ? createHashRouter : createBrowserRouter;

const router = createRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "docs",
    element: <DocumentationLayout />,
    children: [
      { index: true, element: <QuickStart /> },
      { path: "quick-start", element: <QuickStart /> },
      { path: "cuda-setup", element: <CudaSetup /> },
      { path: "ollama-setup", element: <OllamaSetup /> },
      { path: "model-installation", element: <ModelInstallation /> },
      { path: "system-optimization", element: <SystemOptimization /> },
      { path: "api-integration", element: <ApiIntegration /> },
      { path: "performance-monitoring", element: <PerformanceMonitoring /> },
      { path: "system-downloads", element: <SystemDownloads /> },
      { path: "sales-support", element: <SalesSupport /> },
    ],
  },
  // 404 Handling
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
