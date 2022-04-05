import "./introduction.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import { faBlackberry } from "@fortawesome/free-brands-svg-icons";

function Introduction({ hook }) {
  return (
    <div>
      <div
        className="simple-intro"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h>Cho Hyeonwoo</h>
          <span>student</span>
        </div>
        <img src={img2} className="photo2"></img>
      </div>
      <div className="bio-container">
        <img src={img1} className="photo"></img>

        <div
          style={{
            marginTop: "-15vh",
            width: "0",
            height: "10vw",
          }}
          ref={hook}
        ></div>
        <div className="bio-text">
          <h
            style={{ fontWeight: "bold", textDecoration: "underline" }}
            className="bio-title"
          >
            Bio
          </h>
          <ul className="bio-p">
            <li>
              <p>
                <strong>1999</strong> Born in Daegu,South Korea
              </p>
            </li>
            <li>
              <p>
                <strong>`15~`18</strong> GyeongSin HighSchool
              </p>
            </li>
            <li>
              <p>
                <strong>`18~</strong> KyoungPook National University(major in
                Mobile Engineering)
              </p>
            </li>
            <li>
              <p>
                <strong>`20~`21</strong> Air Force
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
