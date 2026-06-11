import { useLang } from "../context/LangContext";
import content from "../lang/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFemale, faHandshake, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "../styles/Mission.css";

const icons = [faFemale, faHandshake, faGlobe];

export default function Mission() {
  const { t } = useLang();
  const c = content.mission;

  const cards = [
    { title: c.c1Title, text: c.c1Text },
    { title: c.c2Title, text: c.c2Text },
    { title: c.c3Title, text: c.c3Text },
  ];

  return (
    <section className="mission">
      <div className="container">
        <span className="section-tag">{t(c.tag)}</span>
        <h2 className="section-title">{t(c.title)}</h2>
        <div className="mission-grid">
          {cards.map((card, i) => (
            <div className="mission-card" key={i}>
              <div className="mission-card-icon">
                <FontAwesomeIcon icon={icons[i]} />
              </div>
              <div className="mission-card-title">{t(card.title)}</div>
              <div className="mission-card-text">{t(card.text)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}