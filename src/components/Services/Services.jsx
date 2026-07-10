import { services } from "../../data/services.js";
import "./Services.css";

function Services() {
  return (
    <section className="services section-padding" id="servicos">
      <div className="services-header">
        <div>
          <div className="section-kicker">Servicos</div>
          <h2>Captação de áudio e dublagem para diferentes mídias.</h2>
        </div>

        <p>
          Atuando no segmento de áudio visual, nossos estúdios estão preparados
          para captação de áudio e dublagem em Home Video, DVD, televisão,
          vídeo treinamento, institucionais, audio book e demais mídias.
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