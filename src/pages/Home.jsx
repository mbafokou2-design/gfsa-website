import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext";
import content from "../lang/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faImage, faFemale, faHandshake, faGlobe, faClock, faChildren } from "@fortawesome/free-solid-svg-icons";
import heroImg from "../assets/hero.png";
import "../styles/Hero.css";
import "../styles/Mission.css";
import "../styles/News.css";
import newsImg1 from '../assets/news.jpg'
import newsImg2 from '../assets/news1.jpg'

const missionIcons = [faFemale, faHandshake, faGlobe, faChildren];

export default function Home() {
  const { t } = useLang();
  const navigate = useNavigate();
  const h = content.hero;
  const m = content.mission;
  const n = content.news;

  const c = content.news;
  const images = [newsImg1, newsImg2];

  const missionCards = [
    { title: m.c1Title, text: m.c1Text },
    { title: m.c2Title, text: m.c2Text },
    { title: m.c3Title, text: m.c3Text },
    { title: m.c4Title, text: m.c4Text },
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
                Gambians <em>Family Sisters</em> Association e. V.
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
        <span className="section-tag">{t(c.tag)}</span>
        <h2 className="section-title">{t(c.title)}</h2>
        <p className="section-subtitle">{t(c.subtitle)}</p>
        <div className="news-grid">
          {c.list.map((item, i) => (
            <div className="news-card" key={i}>
              <div className="news-img-slot">
                <img src={images[i]} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}} />
              </div>
              <div className="news-body">
                <span className="news-tag">{t(item.tag)}</span>
                <div className="news-title">{t(item.title)}</div>
                <div className="news-text">{t(item.text)}</div>
                <div className="news-badge">
                  <FontAwesomeIcon icon={faClock} />
                  {t(c.comingSoon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}