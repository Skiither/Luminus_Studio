import Portfolio from "../../components/Portfolio/Portfolio.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import "./PortfolioPage.css";

function PortfolioPage() {
  return (
    <main className="page portfolio-page">
      <Portfolio />
      <Contact />
    </main>
  );
}

export default PortfolioPage;
