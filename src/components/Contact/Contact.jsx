import "./Contact.css";

function Contact() {
    return (
        <section className="contact section-padding" id="contato">
            <div className="contact-grid">
                <div className="contact-content">
                    <div className="section-kicker">Contate-nos</div>

                    <h2>Faça um orçamento ou agende uma visita.</h2>

                    <p>
                        Para fazer um orçamento, agendar uma visita ou deixar a sua opinião sobre nossa empresa, utilize os campos abaixo ou entre em contato diretamente.
                    </p>
                    <div className="contact-info">
                        <a href="mailto:luminussp@luminussp.com">luminussp@luminussp.com</a>
                        <span>Rua Apodi, 22 - Siciliano / Lapa</span>
                        <span>São Paulo - SP</span>
                    </div>
                </div>

                <form className="contact-form">
                    <label>
                        Nome
                        <input type="text" name="name" placeholder="Seu nome" />
                    </label>

                    <label>
                        E-mail
                        <input type="email" name="email" placeholder="voce@email.com" />
                    </label>

                    <label>
                        Assunto
                        <input type="text" name="subject" placeholder="Orçamento, visita ou mensagem" />
                    </label>

                    <label>
                        Mensagem
                        <textarea
                        name="message"
                        rows="5"
                        placeholder="Conte um pouco sobre o projeto"
                        ></textarea>

                        <button className="button button-primary" type="submit">
                            Enviar
                        </button>
                    </label>
                </form>
            </div>
        </section>
    );
}

export default Contact;