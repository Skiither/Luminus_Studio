import Services from "../../components/Services/Services.jsx";
import Process from "../../components/Process/Process.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import "./ServicesPage.css";

function ServicesPage() {
    return (
        <main className="page services-page">
            <section className="page-hero">
                <p className="section-kicker">Serviços</p>

                <h1>Dublagem, captação de áudio e produções artísticas.</h1>

                <p>
                    Estrutura preparada para projetos audiovisuais em Home Video, DVD, Televisão, Vídeo Mix, Sellthru, Vídeo Treinamento, Institucionais, Audio Book e demais mídias.
                </p>
            </section>

            <Services />

            <section className="services-detail section-padding">
                <div className="services-detail-header">
                    <h2>Formatos atendidos pela Luminus.</h2>

                    <p>
                        Os serviços acompanham as necessidades de cada mídia, sempre com foco em qualidade, respeito ao trabalho e cuidado com o produto do cliente.
                    </p>
                </div>

                <div className="services-detail-grid">
                    <article>
                        <span>01</span>
                        <h3>Home Video, DVD e Televisão</h3>
                        <p>
                            Captação de áudio e dublagem para conteúdos destinados a diferentes canais de exibição.
                        </p>
                    </article>

                    <article>
                        <span>02</span>
                        <h3>Vídeo Mix e Sellthru</h3>
                        <p>
                            Produção de áudio para materiais de distribuição e circulação audiovisual.
                        </p>
                    </article>

                    <article>
                        <span>03</span>
                        <h3>Vídeo Treinamento</h3>
                        <p>
                            Voz e dublagem para materiais corporativos, educativos e treinamentos.
                        </p>
                    </article>

                    <article>
                        <span>04</span>
                        <h3>Institucionais e Audio Book</h3>
                        <p>
                            Captação de voz para conteúdos institucionais, narrativos e demais mídias.
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