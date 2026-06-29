import { useMemo, useState } from "react";
import { portfolioCategories, portfolioItems } from "../../data/portfolio";
import "./Portfolio.css";

const ITEMS_PER_PAGE = 12;

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(() => {
    if (activeCategory === "Todos") {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  function selectCategory(category) {
    setActiveCategory(category);
    setCurrentPage(1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => Math.max(page - 1, 1));
  }

  function goToNextPage() {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  }

  return (
    <section className="portfolio section-padding" id="portfolio">
      <div className="portfolio-header">
        <div>
          <div className="section-kicker">Portfolio</div>
          <h2>Nosso catalogo de producoes.</h2>
        </div>

        <p>
          Explore os projetos por categoria. Cada capa representa um formato de
          trabalho que pode receber dublagem, voz original, localizacao ou direcao vocal.
        </p>
      </div>

      <div className="portfolio-filters" aria-label="Categorias do portfolio">
        {portfolioCategories.map((category) => (
          <button
            className={activeCategory === category ? "active" : ""}
            type="button"
            key={category}
            aria-pressed={activeCategory === category}
            onClick={() => selectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {visibleItems.map((item) => (
          <article className="portfolio-card" key={item.title}>
            <img src={item.cover} alt={`Capa de ${item.title}`} loading="lazy" />

            <div className="portfolio-card-info">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.type}</p>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="portfolio-pagination" aria-label="Paginacao do portfolio">
          <button type="button" onClick={goToPreviousPage} disabled={currentPage === 1}>
            Anterior
          </button>

          <span>
            Pagina {currentPage} de {totalPages}
          </span>

          <button
            type="button"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Proxima
          </button>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
