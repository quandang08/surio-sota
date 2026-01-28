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
// 1. THÊM TẠI ĐÂY: Traceability (Truy xuất nguồn gốc)
// Tài liệu nhấn mạnh nguồn nguyên liệu từ Mekong Delta [cite: 13, 191]
const Traceability = lazy(() => import("./components/layout/Traceability"));

// 2. THÊM TẠI ĐÂY: TechComparison (So sánh công nghệ)
// Cần làm rõ ưu thế 97% dinh dưỡng của sấy thăng hoa so với sấy nhiệt [cite: 28, 41]
const TechComparison = lazy(() => import("./components/layout/TechComparison"));

// 3. THÊM TẠI ĐÂY: OEMWorkflow (Quy trình hợp tác)
// Giải thích cách Surio hỗ trợ từ công thức R&D đến thành phẩm [cite: 194, 522]
const OEMWorkflow = lazy(() => import("./components/layout/OEMWorkflow"));

// 4. THÊM TẠI ĐÂY: StrategicPartners (Đối tác chiến lược)
// Hiển thị logo Mycospring, Can Tho University, Mămmy... 
const StrategicPartners = lazy(() => import("./components/layout/StrategicPartners"));

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

                    {/* VỊ TRÍ 1: Thêm Traceability ngay sau Overview */}
                    {/* Để khách hàng thấy ngay sự minh bạch từ nông trại địa phương [cite: 77, 401] */}
                    <Traceability />

                    <CoreTechnology />

                    {/* VỊ TRÍ 2: Thêm TechComparison để bổ trợ cho CoreTechnology */}
                    {/* Phân tích sâu về dải nhiệt $-40^{\circ}C$ đến $-50^{\circ}C$ [cite: 40, 319] */}
                    <TechComparison />

                    <StrategicCertifications />
                    <ProductPortfolio />

                    {/* VỊ TRÍ 3: Thêm OEMWorkflow sau khi show sản phẩm */}
                    {/* Để khách hàng biết "Làm thế nào để đặt hàng OEM?" [cite: 536, 537] */}
                    <OEMWorkflow />

                    <Leadership />

                    {/* VỊ TRÍ 4: Thêm StrategicPartners trước khi chốt hạ bằng Contact */}
                    {/* Tạo niềm tin cuối cùng thông qua các đối tác hiện hữu [cite: 81] */}
                    <StrategicPartners />

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
