import { useState } from "react";
import { portfolioCategories, portfolioItems } from "../../data/portfolio";
import "./Portfolio.css";

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredItems =
    activeCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="portfolio section-padding" id="portfolio">
      <div className="portfolio-header">
        <div>
          <div className="section-kicker">Portfolio</div>
          <h2>Trabalhos que ja ganharam voz com a Luminus.</h2>
        </div>

        <p>
          Uma selecao simples de projetos por formato, para mostrar onde nossa
          direcao vocal, adaptacao e finalizacao podem entrar.
        </p>
      </div>

      <div className="portfolio-filters" aria-label="Categorias do portfolio">
        {portfolioCategories.map((category) => (
          <button
            className={activeCategory === category ? "active" : ""}
            type="button"
            key={category}
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredItems.map((item) => (
          <article
            className="portfolio-card"
            key={item.title}
            style={{ "--card-accent": item.accent }}
          >
            <div className="portfolio-cover" aria-hidden="true">
              <span>{item.category}</span>
              <strong>{item.title.slice(0, 2)}</strong>
            </div>

            <div className="portfolio-card-content">
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
