import { BrowserRouter, Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToHash } from "./components/ScrollToHash";
import { LocalizedShell } from "./components/LocalizedShell";
import { RootRedirect } from "./components/RootRedirect";
import { HomePage } from "./pages/HomePage";
import { CurrentStatePage } from "./pages/CurrentStatePage";
import { PricingPage } from "./pages/PricingPage";
import { DemoPage } from "./pages/DemoPage";
import { AboutPage } from "./pages/AboutPage";
import { PolicyPage } from "./pages/PolicyPage";
import { FaqPage } from "./pages/FaqPage";
import { DownloadPage } from "./pages/DownloadPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-white">
        <Header />
        <main className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
          <Routes>
            <Route path="/" element={<RootRedirect />} />
            <Route path="/:lang" element={<LocalizedShell />}>
              <Route index element={<HomePage />} />
              <Route path="current-state" element={<CurrentStatePage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="demo" element={<DemoPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="policy" element={<PolicyPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="download" element={<DownloadPage />} />
            </Route>
            <Route path="*" element={<RootRedirect />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
