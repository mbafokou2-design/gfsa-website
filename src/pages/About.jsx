import { useLang } from "../context/LangContext";
import content from "../lang/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faImage } from "@fortawesome/free-solid-svg-icons";
import heroImg from "../assets/hero.png";
import KaddySannehImg from "../assets/Kaddy Sanneh.jpg";
import NyimaSanyangImg from "../assets/Nyima Sanyang.jpg";
import LalaSillahImg from "../assets/Lala Sillah.jpg";
import FatouJadamaImg from "../assets/Fatou Jadama.png";
import Img1 from "../assets/group.jpg";
import "../styles/About.css";

const profileImages = {
  "Kaddy Sanneh": KaddySannehImg,
  "Nyima Sanyang": NyimaSanyangImg,
  "Lala Sillah": LalaSillahImg,
  "Fatou Jadama": FatouJadamaImg,
};

export default function About() {
  const { t } = useLang();
  const c = content.about;

  return (
    <section className="about">
      <div className="container">
        <span className="section-tag">{t(c.tag)}</span>

        <div className="about-grid">
          <div>
            <h2 className="section-title">{t(c.title)}</h2>
            {t(c.intro).split("\n\n").map((para, i) => (
              <p className="about-intro" key={i}>{para}</p>
            ))}
          </div>

          <div className="about-img-slot">
            <img src={heroImg} alt="Our Team" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
          </div>
        </div>

        {/* Goals */}
        <div className="goals-section">
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

        {/* Board */}
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
        {/* Group Photo Banner */}
        <div className="group-banner">
          <img src={Img1} alt="GFSA Group" className="group-banner-img" />
        </div>

      </div>
    </section>
  );
}