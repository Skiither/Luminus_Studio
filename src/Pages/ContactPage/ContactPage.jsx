import Contact from "../../components/Contact/Contact";
import "./ContactPage.css";

const contactOptions = [
    {title: "Orçamentos",
    description:
    "Envie detalhes do projeto, formato, duração, idioma e prazo desejado.",
    },
    {
        title: "Casting",
        description:
        "Fale com a equipe para seleção de vozes, testes ou direção de elenco.",
    },
    {
        title: "Parcerias",
        description: 
        "Entre em contato para produtoras, agências, estúdios e equipes criativas.",
    },
];

function ContactPage() {
    return (
        <main className="page contact-page">
            <section className="page-hero">
                <p className="section-kicker">Contato</p>

                <h1>Vamos conversar sobre o seu projeto.</h1>

                <p>
                    Envie uma mensagem para orçamento, parcerias, casting ou dúvidas
                    sobre produção vocal.
                </p>
            </section>

            <section className="contact-options section-padding">
                {contactOptions.map((option) => (
                    <article key={option.title}>
                        <h2>{option.title}</h2>
                        <p>{option.description}</p>
                    </article>
                ))}
            </section>

            <Contact />
        </main>
    );
}

export default ContactPage;