import "./studio.css";

function Studio() {
    return (
        <section className="studio section-padding">
            <div className="studio-grid">
                <div className="studio-content">
                    <div className="section-kicker">Estúdio</div>

                    <h2>Estrutura pensada para performance, direção e precisão técnica.</h2>

                    <p>
                        A Luminus combina salas preparadas para captação vocal, direção
                        artística próxima e fluxo de edição ágil para acompanhar projetos
                        locais e remotos.
                    </p>

                    <div className="studio-features">
                        <article>
                            <strong>Salas tratadas</strong>
                            <span>Ambientes preparados para gravação vocal limpa e consistente</span>
                        </article>

                        <article>
                            <strong>Direção remota</strong>
                            <span>Gravação acompanhadas por equipes criativas em qualquer lugar.</span>
                        </article>

                        <article>
                            <strong>Entrega técninca</strong>
                            <span>Arquivos organizados, revisados e prontos para integração.</span>
                        </article>
                    </div>
                </div>

                <div className="studio-panel" aria-hidden="true">
                    <div className="studio-panel-top">
                        <span>REC</span>
                        <span>48khz</span>
                    </div>

                    <div className="studio-meter">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="studio-timeline">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Studio;