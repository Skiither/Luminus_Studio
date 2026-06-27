import { PortfolioItems } from "../../data/portfolio";
import "./Portfolio.css";

function Portfolio() {
    return (
        <section className="portfolio section-padding" id="portfolio">
            <div className="portfolio-header">
                <div>
                    <div className="section-kicker">Portfólio</div>
                    <h2>Projetos que pedem voz, intenção e acabamento</h2>
                </div>

                <p>
                    A Luminus trabalha com diferentes formatos audiovisuais, sempre
                    adaptando direção, elenco e entrega técnica ao objetivo de cada obra.
                </p>
            </div>

            <div className="portfolio-grid">
                {PortfolioItems.map((item) => (
                    <article className="portfolio-card" key={item.title}>
                        <span>{item.category}</span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;