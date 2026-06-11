import { useLang } from "../context/LangContext";
import content from "../lang/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import heroImage from "../assets/hero.png";
import "../styles/Hero.css";

export default function Hero() {
  const { t } = useLang();
  const c = content.hero;

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-inner">

          <div className="hero-text">
            <div className="hero-eyebrow">
              <FontAwesomeIcon icon={faArrowRight} />
              {t(c.eyebrow)}
            </div>
            <h1 className="hero-title">
              Gambians <em>Family Sisters</em> Association
            </h1>
            <p className="hero-subtitle">{t(c.subtitle)}</p>
            <button className="btn-primary" onClick={scrollToAbout}>
              {t(c.cta)}
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <div className="hero-img-slot">
            <img src={heroImage} alt="GFSA hero" className="hero-image" />
          </div>

        </div>
      </div>
    </section>
  );
}