import { useState } from "react";
import { useLang } from "../context/LangContext";
import content from "../lang/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import VideoModal from "../components/VideoModal";
import "../styles/News.css";
import newsImg1 from "../assets/news.jpg";
import newsImg2 from "../assets/news1.jpg";
import localVideo from "../assets/video.mp4";

export default function News() {
  const { t } = useLang();
  const c = content.news;
  const images = [newsImg1, newsImg2];
  const [showModal, setShowModal] = useState(false);

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
                <img src={images[i]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="news-body">
                <span className="news-tag">{t(item.tag)}</span>
                <div className="news-title">{t(item.title)}</div>
                <div className="news-text">{t(item.text)}</div>

                {item.comingSoon && (
                  <div className="news-badge">
                    <FontAwesomeIcon icon={faClock} />
                    {t(item.comingSoon)}
                  </div>
                )}

                {item.youtube && (
                  <a href={item.youtube} target="_blank" rel="noopener noreferrer" className="news-youtube-link">
                    <FontAwesomeIcon icon={faYoutube} />
                    {t(c.youtubeLabel)}
                  </a>
                )}

                {item.localVideo && (
                  <button className="news-video-btn" onClick={() => setShowModal(true)}>
                    <FontAwesomeIcon icon={faPlay} />
                    {t(c.videoLabel)}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && <VideoModal src={localVideo} onClose={() => setShowModal(false)} />}
    </section>
  );
}