import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={`site-header ${isMenuOpen ? "menu-open" : ""}`}>
      <NavLink className="brand" to="/" aria-label="Luminus" onClick={closeMenu}>
      <img src="/imagens/logo-luminus.jpg" alt="Luminus" />
      </NavLink>

      <button
      className="menu-toggle"
      type="button"
      aria-label="Abrir menu"
      aria-expanded={isMenuOpen}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
      </button>

      <nav className="main-nav" aria-label="Navegacao principal">
        <NavLink to="/sobre" onClick={closeMenu}>
        Sobre
        </NavLink>
        <NavLink to="/servicos" onClick={closeMenu}>
        Servicos
        </NavLink>
        <NavLink to="/portfolio" onClick={closeMenu}>
        Portfolio
        </NavLink>
      </nav>

      <NavLink className="header-cta" to="/contato" onClick={closeMenu}>
      Fale conosco
      </NavLink>

    </header>
    );
}

export default Header;
