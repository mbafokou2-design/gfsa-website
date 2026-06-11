import { useLang } from "../context/LangContext";
import content from "../lang/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faLanguage, faPeopleGroup, faEarthAfrica } from "@fortawesome/free-solid-svg-icons";
import "../styles/Services.css";

const icons = [faBookOpen, faLanguage, faPeopleGroup, faEarthAfrica];

export default function Services() {
  const { t } = useLang();
  const c = content.services;

  return (
    <section id="services" className="services">
      <div className="container">
        <span className="section-tag">{t(c.tag)}</span>
        <h2 className="section-title">{t(c.title)}</h2>
        <p className="section-subtitle">{t(c.subtitle)}</p>
        <div className="services-grid">
          {c.list.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="service-card-icon">
                <FontAwesomeIcon icon={icons[i]} />
              </div>
              <div className="service-card-title">{t(service.title)}</div>
              <div className="service-card-text">{t(service.text)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}