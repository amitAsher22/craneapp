import React from "react";
import ".././Css/sectionFive.css";

function Sectionfive() {
  return (
    <div>
      <div className="div-main-five">
        <p className="second-title-five"> צור קשר</p>
        <div>
          <div className="div-input-five">
            <input className="input-text" placeholder="שם" />
            <input className="input-text" placeholder="טלפון" />
            <input className="input-text" placeholder="אימייל" />
          </div>
          <textarea className="textArea" placeholder="הודעה" />
          <button className="btn-send-five">שליחה</button>
        </div>
      </div>
      <div className="developer">
        <p className="name-developer">יוצר amit Asher</p>
      </div>
    </div>
  );
}

export default Sectionfive;
