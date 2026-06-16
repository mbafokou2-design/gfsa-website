import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import content from "../lang/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.css";

const navItems = [
  { path: "/", label: content.nav.home },
  { path: "/about", label: content.nav.about },
  { path: "/services", label: content.nav.services },
  { path: "/news", label: content.nav.news },
  { path: "/contact", label: content.nav.contact },
];

export default function Footer() {
  const { t } = useLang();
  const c = content.footer;

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div>
          <div className="footer-brand-name">GFSA-DO.</div>
          <div className="footer-brand-sub">e. V. · Dortmund</div>
          <p className="footer-brand-desc">
            Gambians Family Sisters Association in Dortmund e. V.
          </p>
        </div>

        <div>
          <div className="footer-col-title">Navigation</div>
          <ul className="footer-links">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link to={path}>
                  <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 11 }} />
                  {t(label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Kontakt / Contact</div>
          <div className="footer-contact-item">
            <FontAwesomeIcon icon={faLocationDot} className="footer-contact-icon" />
            <span>C/O Kaddy Sanneh Tiefe Straße 38, 44143 Dortmund, Deutschland</span>
            
          </div>
          <div className="footer-contact-item">
            <FontAwesomeIcon icon={faPhone} className="footer-contact-icon" />
            <a href="tel:+491738998505">+49 173 8998505</a>
          </div>
          <div className="footer-contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="footer-contact-icon" />
            <a href="mailto:info@gfsa-do.org">
              info@gfsa-do.org
            </a>
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