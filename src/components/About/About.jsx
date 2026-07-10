import "./About.css";

function About() {
    return (
        <section className="about section-padding" id="sobre">
            <div className="section-kicker">Nossa empresa</div>

            <div className="about-grid">
                <div>
                    <h2>
                        Qualidade e respeito sempre.
                    </h2>
                </div>

                <div className="about-copy">
                    <p>
                        A Luminus e uma empresa que atua na area de dublagem e producoes artisticas. Formada por profissionais que estao na area ha mais de 10 anos, a Luminus tem como responsabilidade valorizar o produto de seus clientes.
                    </p>

                    <p>
                        Tambem valorizamos os profissionais envolvidos, dando a cada um o respeito merecido pelo seu trabalho.
                    </p>
                </div>
            </div>

            <div className="stats-grid">
                <article>
                    <strong>+10</strong>
                    <span>Anos de experiencia no segmento</span>
                </article>

                <article>
                    <strong>SP</strong>
                    <span>Atendimento em Sao Paulo - Lapa</span>
                </article>

                <article>
                    <strong>AV</strong>
                    <span>Dublagem e producoes artisticas</span>
                </article>
            </div>
        </section>
    );
}

export default About;