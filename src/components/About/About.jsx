import "./About.css"

function About() {
    return (
        <section className="about section-padding" id="sobre">
            <div className="section-kicker">Sobre a Luminus</div>

            <div className="about-grid">
                <div>
                    <h2>
                        Um estúdio feito para dar presença, ritmo e identidade a cada voz.
                    </h2>
                </div>

                <div className="about-copy">
                    <p>
                        A Luminus é um estúdio brasileiro de dublagem e produção vocal
                        dedicado a transformar personagens, marcas e narrativas em 
                        experiências sonoras memoráveis.
                    </p>

                    <p>
                        Atuamos com direção artística, escalação de vozes, gravação,
                        localização, edição e finalização, mantendo cuidado criativo em 
                        cada etapa do processo.
                    </p>
                </div>
            </div>

            <div className="stats-grid">
            <article>
                <strong>+120</strong>
                <span>Projetos adaptados</span>
            </article>

            <article>
                <strong>4</strong>
                <span>Salas de gravação</span>
            </article>

            <article>
                <strong>BR</strong>
                <span>Talentos de todo o país</span>
            </article>
            </div>

        </section>
    )
}

export default About;
