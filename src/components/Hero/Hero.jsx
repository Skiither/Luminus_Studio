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
                <p className="eyebrow">Estúdio de dublagem no Brasil</p>

                <h1>
                    Voz, direção e emoção para histórias que precisam atravessar telas.
                </h1>

                <p className="hero-copy">
                    A Luminus cria experiências de dublagem, voz original, localização e produção sonora para séries, games, filmes, publicidade e marcas.
                </p>

                <div className="hero-actions">
                    <Link className="button button-primary" to="/servicos">
                        Ver serviços
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Hero
