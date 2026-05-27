import { BrowserRouter, Navigate, Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToHash } from "./components/ScrollToHash";
import { LocalizedShell } from "./components/LocalizedShell";
import { HomePage } from "./pages/HomePage";
import { CurrentStatePage } from "./pages/CurrentStatePage";
import { PricingPage } from "./pages/PricingPage";
import { DemoPage } from "./pages/DemoPage";
import { AboutPage } from "./pages/AboutPage";
import { DEFAULT_LANGUAGE } from "../i18n/config";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-white">
        <Header />
        <main className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
          <Routes>
            <Route path="/" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />
            <Route path="/:lang" element={<LocalizedShell />}>
              <Route index element={<HomePage />} />
              <Route path="current-state" element={<CurrentStatePage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="demo" element={<DemoPage />} />
              <Route path="about" element={<AboutPage />} />
            </Route>
            <Route path="*" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
