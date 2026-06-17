import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LangContext";
import content from "../lang/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logoImg from "../assets/hero.png";
import "../styles/Navbar.css";

const navItems = [
  { path: "/",         label: content.nav.home },
  { path: "/about",    label: content.nav.about },
  { path: "/services", label: content.nav.services },
  { path: "/news",     label: content.nav.news },
  { path: "/contact",  label: content.nav.contact },
];

export default function Navbar() {
  const { lang, toggle, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/" onClick={() => setMenuOpen(false)}>
        <div className="logo-slot">
          <img src={logoImg} alt="GFSA Logo" className="logo-img" />
        </div>
        <div className="brand-name">
          GFSA-DO. e. V.
          <span> Dortmund</span>
        </div>
      </Link>

      <ul className={`nav-links${menuOpen ? " open" : ""}`}>
        {navItems.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={location.pathname === path ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {t(label)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <div className="lang-toggle">
          <button className={`lang-btn${lang === "de" ? " active" : ""}`} onClick={() => lang !== "de" && toggle()}>DE</button>
          <button className={`lang-btn${lang === "en" ? " active" : ""}`} onClick={() => lang !== "en" && toggle()}>EN</button>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} style={{ color: "var(--green)", fontSize: 20 }} />
        </button>
      </div>
    </nav>
  );
}