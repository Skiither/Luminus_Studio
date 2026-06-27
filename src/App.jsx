import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import AboutPage from "./Pages/AboutPage/AboutPage.jsx";
import ServicesPage from "./Pages/ServicesPage/ServicesPage.jsx";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage.jsx";
import ContactPage from "./Pages/ContactPage/ContactPage.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="site">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;