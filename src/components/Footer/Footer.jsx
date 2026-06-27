import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <NavLink className="footer-brand" to="/">
            Luminus
          </NavLink>

          <p>
            Estudio brasileiro de dublagem, localizacao e producao vocal para
            historias que precisam ser ouvidas com intencao.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Navegacao do rodape">
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/servicos">Servicos</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>

        <div className="footer-contact">
          <a href="mailto:contato@luminus.com.br">contato@luminus.com.br</a>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>2026 Luminus Studio</span>
        <span>Brasil - atendimento remoto</span>
      </div>
    </footer>
  );
}

export default Footer;
