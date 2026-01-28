import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";

// TỔNG QUAN: Giới thiệu năng lực sản xuất 7-10 tấn/tháng tại Cần Thơ
const CompanyOverview = lazy(
  () => import("./components/layout/CompanyOverview"),
);

// CỐT LÕI: Công nghệ sấy thăng hoa (Lyophilization) - Trái tim của sự khác biệt
const CoreTechnology = lazy(() => import("./components/layout/CoreTechnology"));

// PHÁP LÝ: Chứng chỉ FDA, ISO 22000 & lộ trình Halal để vươn ra toàn cầu
const StrategicCertifications = lazy(
  () => import("./components/layout/StrategicCertifications"),
);

// SẢN PHẨM: Danh mục B2B đa dạng từ Sữa chua sấy (10 tỷ lợi khuẩn) đến Nấm dược liệu
const ProductPortfolio = lazy(
  () => import("./components/layout/ProductPortfolio"),
);

// CON NGƯỜI: Đội ngũ chuyên gia từ Israel & Đại học Cần Thơ dẫn dắt R&D
const Leadership = lazy(() => import("./components/layout/Leadership"));

// HÀNH ĐỘNG: Kêu gọi đối tác liên hệ để nhận tư vấn giải pháp dinh dưỡng
const ContactCTA = lazy(() => import("./components/layout/ContactCTA"));

// MINH BẠCH: Truy xuất nguồn gốc 100% từ nông trại Mekong Delta đến thành phẩm
const Traceability = lazy(() => import("./components/layout/Traceability"));

// ƯU THẾ: So sánh khoa học giữa sấy lạnh -50°C (giữ 97% dưỡng chất) vs sấy nhiệt
const TechComparison = lazy(() => import("./components/layout/TechComparison"));

// Giải thích cách Surio hỗ trợ từ công thức R&D đến thành phẩm
const OEMWorkflow = lazy(() => import("./components/layout/OEMWorkflow"));

// Hiển thị logo Mycospring, Can Tho University, ...
const StrategicPartners = lazy(
  () => import("./components/layout/StrategicPartners"),
);

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

                    {/* Để khách hàng thấy ngay sự minh bạch từ nông trại địa phương */}
                    <Traceability />

                    <CoreTechnology />

                    {/* Phân tích sâu về dải nhiệt $-40^{\circ}C$ đến $-50^{\circ}C$ */}
                    <TechComparison />

                    <StrategicCertifications />

                    <ProductPortfolio />

                    {/* Để khách hàng biết "Làm thế nào để đặt hàng OEM?" */}
                    <OEMWorkflow />

                    <Leadership />

                    {/* Tạo niềm tin cuối cùng thông qua các đối tác hiện hữu */}
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
