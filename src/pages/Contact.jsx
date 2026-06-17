import { useLang } from "../context/LangContext";
import content from "../lang/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faGlobe, faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "../styles/Contact.css";

export default function Contact() {
  const { t } = useLang();
  const c = content.contact;

  return (
    <section className="contact">
      <div className="container">
        <span className="section-tag">{t(c.tag)}</span>
        <h2 className="section-title">{t(c.title)}</h2>
        <p className="section-subtitle">{t(c.subtitle)}</p>

        <div className="contact-grid">

          <div>
            <div className="contact-info-block">
              <div className="contact-info-label">
                <FontAwesomeIcon icon={faLocationDot} />
                {t(c.addressTitle)}
              </div>
              <div className="contact-info-value">
                Gambians Family Sisters Association<br />
                in Dortmund (GFSA-DO.) e.V.<br />
                C/O Kaddy Sanneh<br />
                Tiefe Straße 38<br />
                44143 Dortmund, Deutschland
              </div>
            </div>
            db
            <hr className="contact-divider" />

            <div className="contact-info-block">
              <div className="contact-info-label">
                <FontAwesomeIcon icon={faPhone} />
                {t(c.phoneTitle)}
              </div>
              <div className="contact-info-value">
                <a href="tel:+491738998505">+49 173 8998505</a>
              </div>
            </div>

            <hr className="contact-divider" />

            <div className="contact-info-block">
              <div className="contact-info-label">
                <FontAwesomeIcon icon={faEnvelope} />
                {t(c.webTitle)}
              </div>
              <div className="contact-info-value">
                <a href="mailto:info@gfsa-do.org" target="_blank" rel="noreferrer">info@gfsa-do.org</a>
              </div>
            </div>

          </div>

          <div className="contact-form">
            <h3 className="contact-form-title">{t(c.formTitle)}</h3>

            <div className="form-group">
              <label className="form-label">{t(c.nameLabel)}</label>
              <input className="form-input" type="text" placeholder={t(c.namePH)} />
            </div>

            <div className="form-group">
              <label className="form-label">{t(c.emailLabel)}</label>
              <input className="form-input" type="email" placeholder={t(c.emailPH)} />
            </div>

            <div className="form-group">
              <label className="form-label">{t(c.msgLabel)}</label>
              <textarea className="form-textarea" placeholder={t(c.msgPH)} />
            </div>

            <button className="btn-submit">
              <FontAwesomeIcon icon={faPaperPlane} />
              {t(c.sendBtn)}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}