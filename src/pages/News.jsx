import { useLang } from "../context/LangContext";
import content from "../lang/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faClock } from "@fortawesome/free-solid-svg-icons";
import "../styles/News.css";
import newsImg1 from '../assets/news.jpg'
import newsImg2 from '../assets/news1.jpg'

export default function News() {
  const { t } = useLang();
  const c = content.news;
  const images = [newsImg1, newsImg2];

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
  );
}