import Services from "../../components/Services/Services.jsx";
import Process from "../../components/Process/Process.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import "./ServicesPage.css";

function ServicesPage() {
    return (
        <main className="page services-page">
            <section className="page-hero">
                <p className="section-kicker">Serviços</p>

                <h1>Produção vocal completa para dublagem, gamer e marcas.</h1>

                <p>
                    Da adaptação do texto á entrega final, a Luminus estrutura cada etapa
                    para que voz, emoção e técnica acminhem juntas.
                </p>
            </section>

            <Services />

            <section className="services-detail section-padding">
                <div className="services-detail-header">
                    <h2>O que pode entrar no seu projeto.</h2>

                    <p>
                        Cada entrega pode ser ajustada conforme o formato, prazo, equipe
                        envolvida e necessidades técnicas.
                    </p>
                </div>

                <div className="services-detail-grid">
                    <article>
                        <span>01</span>
                        <h3>Adaptação de roteiro</h3>
                        <p>
                            Ajuste de falas, expressões e ritmo para preservar sentido,
                            intenção e naturalidade em português brasileiro.
                        </p>
                    </article>

                    <article>
                        <span>02</span>
                        <h3>Casting vocal</h3>
                        <p>
                            Seleção de vozes alinhadas ao perfil da obra, personagem, público
                            ou identidade da marca
                        </p>
                    </article>

                    <article>
                        <span>03</span>
                        <h3>Direção de gravação</h3>
                        <p>
                            Acompanhamento de interpretação, emoção, timing e consistência
                            entre cenas, personagens ou campanhas.
                        </p>
                    </article>

                    <article>
                        <span>04</span>
                        <h3>Edição e sincronização</h3>
                        <p>
                            Limpeza, organização, tratamento e sincronização do áudio para 
                            aprovação e uso final.
                        </p>
                    </article>
                </div>
            </section>

            <Process />
            <Contact />
        </main>
    );
}

export default ServicesPage;