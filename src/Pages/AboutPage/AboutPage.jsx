import About from "../../components/About/About.jsx";
import Studio from "../../components/Studio/Studio.jsx";
import Process from "../../components/Process/Process.jsx";
import "./AboutPage.css";

function AboutPage() {
    return (
        <main className="page about-page">
            <section className="page-hero">
                <p className="section-kicker">Nossa empresa</p>

                <h1>Qualidade e respeito sempre.</h1>

                <p>
                    A Luminus atua na área de dublagem e produções artísticas, valorizando o produto de seus clientes e os profissionais envolvidos em cada trabalho.
                </p>
            </section>

            <section className="about-page-story section-padding">
                <div>
                    <h2>Mais de 10 anos de experiência no segmento audiovisual.</h2>
                </div>

                <div className="about-page-copy">
                    <p>
                        Formada por profissionais que estão na área há mais de 10 anos, a Luminus tem como responsabilidade valorizar o produto de seus clientes.
                    </p>

                    <p>
                        Atuando no segmento de áudio visual, nossos estúdios estão preparados para captação de áudio e dublagem para Home Video, DVD, Televisão, Vídeo Mix, Sellthru, Vídeo Treinamento, Institucionais, Audio Book e demais mídias.
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