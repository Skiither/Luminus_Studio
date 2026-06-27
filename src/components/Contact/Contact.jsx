import "./Contact.css"

function Contact() {
    return (
        <section className="contact section-padding" id="contato">
            <div className="contact-grid">
                <div className="contact-content">
                    <div className="section-kicker">Contato</div>

                    <h2>Tem um projeto que precisa encontrar a voz certa?</h2>

                    <p>
                        Envie uma mensagem para falar sobre dublagel, localização, voz
                        original, casting, parcerias ou orçamento
                    </p>
                    <div className="contact-info">
                        <a href="mailto:ccontato@luminus.com.br">contato@luminus.com.br</a>
                        <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
                        WhatsApp
                        </a>
                        <span>Brasil Atendimento remoto</span>
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
                        Tipo de projeto
                        <select name="projectType" defaultValue="">
                            <option value="" disabled>
                                Selecione uma opção
                            </option>
                            <option value="dublagem">Dublagem</option>
                            <option value="gamer">Games</option>
                            <option value="publicidade">Publicidade</option>
                            <option value="licalizacao">Localização</option>
                            <option value="outro">Outro</option>
                        </select>
                    </label>

                    <label>
                        Mensagem
                        <textarea
                        name="message"
                        rows="5"
                        placeholder="Conte um pouco sobre o projeto"
                        ></textarea>

                        <button className="button button-primary" type="submit">
                            Enviar mensagem
                        </button>
                    </label>
                </form>
            </div>
        </section>
    );
}

export default Contact;