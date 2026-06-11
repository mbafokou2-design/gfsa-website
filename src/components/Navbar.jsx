import { useState, useEffect } from "react";
import { useLang } from "../context/LangContext";
import content from "../lang/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import heroImage from "../assets/hero.png";
import "../styles/Navbar.css";

const navItems = [
  { id: "home",     label: content.nav.home },
  { id: "about",    label: content.nav.about },
  { id: "services", label: content.nav.services },
  { id: "news",     label: content.nav.news },
  { id: "contact",  label: content.nav.contact },
];

export default function Navbar() {
  const { lang, toggle, t } = useLang();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.4 }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>
        <div className="logo-slot">
          <img src={heroImage} alt="GFSA Logo" className="logo-img" />
        </div>
        <div className="brand-name">
          GFSA-DO.
          <span>e.V. · Dortmund</span>
        </div>
      </a>

      <ul className={`nav-links${menuOpen ? " open" : ""}`}>
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            >
              {t(label)}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <div className="lang-toggle">
          <button className={`lang-btn${lang === "de" ? " active" : ""}`} onClick={() => lang !== "de" && toggle()}>DE</button>
          <button className={`lang-btn${lang === "en" ? " active" : ""}`} onClick={() => lang !== "en" && toggle()}>EN</button>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} style={{ color: "white", fontSize: 20 }} />
        </button>
      </div>
    </nav>
  );
}