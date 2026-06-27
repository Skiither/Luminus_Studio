    import "./Process.css";

    const processSteps = [
    {
        number: "01",
        title: "Briefing",
        description:
        "Entendemos o formato, público, idioma, intenção criativa e requisitos técnicos do projeto.",
    },
    {
        number: "02",
        title: "Adaptação",
        description:
        "Ajustamos texto, ritmo e naturalidade para que cada fala funcione em português brasileiro.",
    },
    {
        number: "03",
        title: "Casting",
        description:
        "Selecionamos vozes alinhadas à personalidade dos personagens, marca ou narrativa.",
    },
    {
        number: "04",
        title: "Gravação",
        description:
        "Conduzimos a performance em estúdio com direção vocal, precisão de intenção e cuidado técnico.",
    },
    {
        number: "05",
        title: "Finalização",
        description:
        "Editamos, limpamos, sincronizamos e entregamos o áudio pronto para aprovação e publicação.",
    },
    ];

    function Process() {
    return (
        <section className="process section-padding">
        <div className="process-header">
            <div className="section-kicker">Processo</div>
            <h2>Um fluxo claro para transformar texto em performance.</h2>
        </div>

        <div className="process-list">
            {processSteps.map((step) => (
            <article className="process-step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
            </article>
            ))}
        </div>
        </section>
    );
    }

    export default Process;