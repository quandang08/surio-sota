import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";

const CompanyOverview = lazy(
  () => import("./components/layout/CompanyOverview"),
);
const CoreTechnology = lazy(() => import("./components/layout/CoreTechnology"));
const StrategicCertifications = lazy(
  () => import("./components/layout/StrategicCertifications"),
);
const ProductPortfolio = lazy(
  () => import("./components/layout/ProductPortfolio"),
);
const Leadership = lazy(() => import("./components/layout/Leadership"));
const ContactCTA = lazy(() => import("./components/layout/ContactCTA"));

const App = () => {
  return (
    <Router>
      <div className="font-inter bg-surio-offwhite text-surio-emerald min-h-screen overflow-x-hidden">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Suspense
                    fallback={
                      <div className="py-20 text-center uppercase tracking-widest text-xs opacity-50">
                        Loading Capabilities...
                      </div>
                    }
                  >
                    <Hero />
                    <CompanyOverview />
                    <CoreTechnology />
                    <StrategicCertifications />
                    <ProductPortfolio />
                    <Leadership />
                    <ContactCTA />
                  </Suspense>
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
