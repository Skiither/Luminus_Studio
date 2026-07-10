import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="inicio">
            <div className="hero-media" aria-hidden="true">
                <div className="studio-light studio-light-one"></div>
                <div className="studio-light studio-light-two"></div>

                <div className="sound-wave">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="hero-content">
                <p className="eyebrow">Grupo Luminus - Sao Paulo</p>

                <h1>
                    Qualidade e respeito sempre em dublagem e producoes artisticas.
                </h1>

                <p className="hero-copy">
                    A Luminus atua na area de dublagem e producoes artisticas com profissionais que estao ha mais de 10 anos no segmento audiovisual.
                </p>

                <div className="hero-actions">
                    <Link className="button button-primary" to="/servicos">
                        Conheca os servicos
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;