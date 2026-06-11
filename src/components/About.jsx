import { useLang } from "../context/LangContext";
import content from "../lang/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faUser, faImage } from "@fortawesome/free-solid-svg-icons";
import KaddySannehImg from "../assets/Kaddy Sanneh.jpg";
import NyimaSanyangImg from "../assets/Nyima Sanyang.jpg";
import LalaSillahImg from "../assets/Lala Sillah.jpg";
import FatouJadamaImg from "../assets/Fatou Jadama.png";
import "../styles/About.css";

export default function About() {
  const { t } = useLang();
  const c = content.about;

  const profileImages = {
    "Kaddy Sanneh": KaddySannehImg,
    "Nyima Sanyang": NyimaSanyangImg,
    "Lala Sillah": LalaSillahImg,
    "Fatou Jadama": FatouJadamaImg,
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <span className="section-tag">{t(c.tag)}</span>

        <div className="about-grid">

          <div>
            <h2 className="section-title">{t(c.title)}</h2>
            <p className="about-intro">{t(c.intro)}</p>

            <h3 className="about-subtitle">{t(c.goalsTitle)}</h3>
            <ul className="goals-list">
              {c.goals.map((goal, i) => (
                <li key={i}>
                  <FontAwesomeIcon icon={faCheckCircle} className="goal-icon" />
                  {t(goal)}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-img-slot">
            {/* Replace with: <img src="/team.jpg" alt="Our Team" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"12px"}} /> */}
            <FontAwesomeIcon icon={faImage} style={{ fontSize: 36, color: "rgba(196,154,60,0.5)" }} />
            <span>{t(c.imageCaption)}</span>
            <p>← Insert image here</p>
          </div>

        </div>

        {/* Board Section */}
        <div className="board-section">
          <h3 className="about-subtitle">{t(c.boardTitle)}</h3>
          <div className="board-grid">
            {c.board.map((member, i) => (
              <div className="board-card" key={i}>
                <div className="board-photo-slot">
                  <img
                    src={profileImages[member.name]}
                    alt={member.name}
                    className="board-photo"
                  />
                </div>
                <div className="board-name">{member.name}</div>
                <div className="board-role">{t(member.role)}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}