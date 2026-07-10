import Contact from "../../components/Contact/Contact";
import "./ContactPage.css";

const contactOptions = [
    {
        title: "Orçamentos",
        description:
        "Envie informações do projeto, mídia, duração e prazo para que a equipe possa avaliar a melhor forma de atendimento.",
    },
    {
        title: "Visitas",
        description:
        "Você pode agendar uma visita para conhecer melhor a empresa e conversar sobre necessidades de produção.",
    },
    {
        title: "Contato direto",
        description:
        "Fale com a Luminus pelo email luminussp@luminussp.com ou pelo endereço na Lapa, em São Paulo.",
    },
];

function ContactPage() {
    return (
        <main className="page contact-page">
            <section className="page-hero">
                <p className="section-kicker">Contato</p>

                <h1>Teremos prazer em receber o seu contato.</h1>

                <p>
                    Para fazer um orçamento, agendar uma visita ou deixar sua opinião sobre a empresa, entre em contato com a Luminus.
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