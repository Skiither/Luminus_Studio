import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <NavLink className="footer-brand" to="/">
            Grupo Luminus
          </NavLink>

          <p>
            Empresa de dublagem e produções artísticas em São Paulo, formada por profissionais com mais de 10 anos de atuação.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Navegacao do rodape">
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/servicos">Servicos</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>

        <div className="footer-contact">
          <a href="mailto:luminussp@luminussp.com">luminussp@luminussp.com</a>
          <span>Rua Apodi, 22 - Siciliano / Lapa</span>
          <span>São Paulo - SP</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2021 Grupo Luminus</span>
        <span>Qualidade e Respeito Sempre</span>
      </div>
    </footer>
  );
}

export default Footer;