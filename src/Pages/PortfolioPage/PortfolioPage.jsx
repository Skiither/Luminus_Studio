import Portfolio from "../../components/Portfolio/Portfolio.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import "./PortfolioPage.css";

function PortfolioPage() {
  return (
    <main className="page portfolio-page">
      <section className="page-hero">
        <p className="section-kicker">Portfolio</p>

        <h1>Projetos, formatos e vozes em um catalogo simples de navegar.</h1>

        <p>
          Filtre por categoria para conhecer os tipos de producao que a Luminus
          pode desenvolver, da dublagem de personagens a campanhas e games.
        </p>
      </section>

      <Portfolio />
      <Contact />
    </main>
  );
}

export default PortfolioPage;
