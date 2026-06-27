import About from "../../components/About/About.jsx";
import Studio from "../../components/Studio/Studio.jsx"
import Process from "../../components/Process/Process.jsx"
import "./AboutPage.css";

function AboutPage() {
    return (
        <main className="page about-page">
            <section className="page-hero">
                <p className="section-kicker">Sobre</p>

                <h1>Um estúdio brasileiro para histórias que precisam ganhar voz.</h1>

                <p>
                    A Luminus nasce para unir direção artística, cuidado técnico e
                    sensisbilidade vocal em projetos de dublagem, localização e produção 
                    sonora.
                </p>
            </section>

            <section className="about-page-story section-padding">
                <div>
                    <h2>Trabalhamos para que cada fala soe viva, natural e presente.</h2>
                </div>

                    <div className="about-page-copy">
                        <p>
                            nossa proposta é construir pontes entre histórias e públicos. Para 
                            isso, cuidamos de interpretação, ritmo, adaptação cultural,
                            intenção, escolha de elenco e acabamento técnico.
                        </p>

                        <p>
                            Mais do que gravar vozes, busamos preservar emoção, contexto e
                            identidade. Cada projeto pede uma escuta diferente, e é isso que
                            guia nosso processo.
                        </p>
                    </div>
            </section>
            <About />
            <Studio />
            <Process />
        </main>
    );
}

export default AboutPage;