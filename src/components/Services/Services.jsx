    import { services } from "../../data/services.js";
    import "./Services.css";

    function Services() {
    return (
        <section className="services section-padding" id="servicos">
        <div className="services-header">
            <div>
            <div className="section-kicker">Serviços</div>
            <h2>Da escalação de vozes à entrega final do áudio.</h2>
            </div>

            <p>
            Trabalhamos com equipes criativas, produtoras e marcas que precisam
            de uma produção vocal cuidadosa, expressiva e tecnicamente confiável.
            </p>
        </div>

        <div className="services-grid">
            {services.map((service) => (
            <article className="service-card" key={service.title}>
                <span></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </article>
            ))}
        </div>
        </section>
    );
    }

    export default Services;