import { useLang } from "../context/LangContext";
import content from "../lang/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faGlobe, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.css";

const navItems = [
  { id: "home",     label: content.nav.home },
  { id: "about",    label: content.nav.about },
  { id: "services", label: content.nav.services },
  { id: "news",     label: content.nav.news },
  { id: "contact",  label: content.nav.contact },
];

export default function Footer() {
  const { t } = useLang();
  const c = content.footer;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div>
          <div className="footer-brand-name">GFSA-DO.</div>
          <div className="footer-brand-sub">e.V. · Dortmund</div>
          <p className="footer-brand-desc">
            Gambians Family Sisters Association in Dortmund e.V.
          </p>
        </div>

        <div>
          <div className="footer-col-title">Navigation</div>
          <ul className="footer-links">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
                  <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 11 }} />
                  {t(label)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Kontakt / Contact</div>
          <div className="footer-contact-item">
            <FontAwesomeIcon icon={faLocationDot} className="footer-contact-icon" />
            <span>Tiefe Straße 38, 44143 Dortmund, Deutschland</span>
          </div>
          <div className="footer-contact-item">
            <FontAwesomeIcon icon={faPhone} className="footer-contact-icon" />
            <a href="tel:+491738998505">+49 173 8998505</a>
          </div>
          <div className="footer-contact-item">
            <FontAwesomeIcon icon={faGlobe} className="footer-contact-icon" />
            <a href="https://gfsa-do.org" target="_blank" rel="noreferrer">gfsa-do.org</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span>{t(c.copy)}</span>
        <span>{t(c.register)}</span>
      </div>
    </footer>
  );
}