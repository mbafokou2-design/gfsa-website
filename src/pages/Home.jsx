import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext";
import content from "../lang/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faImage, faFemale, faHandshake, faGlobe, faClock } from "@fortawesome/free-solid-svg-icons";
import heroImg from "../assets/hero.png";
import "../styles/Hero.css";
import "../styles/Mission.css";
import "../styles/News.css";

const missionIcons = [faFemale, faHandshake, faGlobe];

export default function Home() {
  const { t } = useLang();
  const navigate = useNavigate();
  const h = content.hero;
  const m = content.mission;
  const n = content.news;

  const missionCards = [
    { title: m.c1Title, text: m.c1Text },
    { title: m.c2Title, text: m.c2Text },
    { title: m.c3Title, text: m.c3Text },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-text">
              <div className="hero-eyebrow">
                <FontAwesomeIcon icon={faArrowRight} />
                {t(h.eyebrow)}
              </div>
              <h1 className="hero-title">
                Gambians <em>Family Sisters</em> Association
              </h1>
              <p className="hero-subtitle">{t(h.subtitle)}</p>
              <button className="btn-primary" onClick={() => navigate("/about")}>
                {t(h.cta)}
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <div className="hero-img-slot">
              <img src={heroImg} alt="GFSA Team" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"12px"}} />
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="mission">
        <div className="container">
          <span className="section-tag">{t(m.tag)}</span>
          <h2 className="section-title">{t(m.title)}</h2>
          <div className="mission-grid">
            {missionCards.map((card, i) => (
              <div className="mission-card" key={i}>
                <div className="mission-card-icon">
                  <FontAwesomeIcon icon={missionIcons[i]} />
                </div>
                <div className="mission-card-title">{t(card.title)}</div>
                <div className="mission-card-text">{t(card.text)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="news">
        <div className="container">
          <span className="section-tag">{t(n.tag)}</span>
          <h2 className="section-title">{t(n.title)}</h2>
          <p className="section-subtitle">{t(n.subtitle)}</p>
          <div className="news-grid">
            {n.list.slice(0, 3).map((item, i) => (
              <div className="news-card" key={i}>
                <div className="news-img-slot">
                  <FontAwesomeIcon icon={faImage} style={{ fontSize: 32, color: "rgba(196,154,60,0.5)" }} />
                  <span>{t(item.title)}</span>
                  <p>← Insert image here</p>
                </div>
                <div className="news-body">
                  <span className="news-tag">{t(item.tag)}</span>
                  <div className="news-title">{t(item.title)}</div>
                  <div className="news-text">{t(item.text)}</div>
                  <div className="news-badge">
                    <FontAwesomeIcon icon={faClock} />
                    {t(n.comingSoon)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-primary" style={{marginTop: "40px"}} onClick={() => navigate("/news")}>
            View All News
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </section>
    </>
  );
}