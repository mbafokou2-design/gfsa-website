import { useLang } from "../context/LangContext";
import content from "../lang/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faClock } from "@fortawesome/free-solid-svg-icons";
import "../styles/News.css";

export default function News() {
  const { t } = useLang();
  const c = content.news;

  return (
    <section className="news">
      <div className="container">
        <span className="section-tag">{t(c.tag)}</span>
        <h2 className="section-title">{t(c.title)}</h2>
        <p className="section-subtitle">{t(c.subtitle)}</p>
        <div className="news-grid">
          {c.list.map((item, i) => (
            <div className="news-card" key={i}>
              <div className="news-img-slot">
                {/* Replace with: <img src={newsImg} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}} /> */}
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
                  {t(c.comingSoon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}