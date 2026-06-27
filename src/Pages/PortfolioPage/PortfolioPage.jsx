import Portfolio from "../../components/Portfolio/Portfolio.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import "./PortfolioPage.css";

const formats = [
    "Séries",
    "Animação",
    "Games",
    "Publicidade",
    "Instituional",
    "Streaming",
    "E-learning",
    "Trailers",
];

function PortfolioPage() {
    return (
        <main className="page portfolio-page">
            <section className="page-hero">
                <p className="section-kicker">Portfólio</p>

                <h1>Voz para diferentes telas, linguagens e públicos.</h1>

                <p>
                    A Luminus atua em projetos que exigem presença vocal, adaptação
                    cultural e direção artística alinhada ao formato de cada obra.
                </p>
            </section>

            <Portfolio />

            <section className="portfolio-formats section-padding">
                <div className="portfolio-formats-header">
                    <h2>Formatos que podemos atender.</h2>

                    <p>
                        Cada projeto tem uma dinâmica própria. por isso, ajustamos fluxo,
                        casting e entrega técnica conforme o canal, público e objetivo.
                    </p>
                </div>

                <div className="portfolio-formats-list">
                    {formats.map((format) => (
                        <span key={format}>{format}</span>
                    ))}
                </div>
            </section>

            <Contact />
        </main>
    );
}

export default PortfolioPage;