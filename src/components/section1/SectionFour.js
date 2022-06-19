import React from "react";
import "../../Css/sectionFour.css";

function SectionFour() {
  return (
    <div className="color-bg">
      <div className="div-maiv-section-four">
        <div>
          <p className="four-text-sectionmain">השירותים שלנו</p>
          <p className="paragrap-text">
            ביולי 2019 נכנס לתוקף נספח בחוק העסקת עובדים על ידי חברות כ"א, נספח
            המסדיר את העסקתם של מנופאים ומפעילי עגורנים. מנופאים (ע.י.) בע"מ היא
            חברה מתמחה בתחום הגיוס והפעלת מנופאים בשרות מנוהל, בעלת היתר להעסקת
            מנופאים ואישור ממפקח עבודה ראשי על עמידה בדרישות הבטיחות עפ"י החוק.
          </p>
        </div>
        <div className="all-card-four">
          <div className="card-four">
            <img
              className="img-section-four"
              src="https://manofayim.co.il/wp-content/uploads/2021/03/services-12.png"
            />
            <p className="main-text-title">גיוס</p>
            <p className="main-text-section-four">
              מנופאים (ע.י) בע"מ מגייסת מנופאים מיומנים בהפעלת המנופים והציוד על
              פי דרישת הלקוח
            </p>
            <div className="div-button-four">
              <button className="service-btn">להמשך קריאה</button>
            </div>
          </div>
          <div className="card-four">
            <img
              className="img-section-four"
              src="https://manofayim.co.il/wp-content/uploads/2021/03/services-11.png"
            />
            <p className="main-text-title">הכשרה</p>
            <p className="main-text-section-four">
              קורסי הכשרה והסמכה למפעילי מנופי הרמה ועגורנים, בהתאם לדרישות משרד
              העבודה
            </p>
            <div className="div-button-four">
              <button className="service-btn">להמשך קריאה</button>
            </div>
          </div>
          <div className="card-four">
            <img
              className="img-section-four"
              src="https://manofayim.co.il/wp-content/uploads/2021/03/services-10.png"
            />
            <p className="main-text-title">הפעלה</p>
            <p className="main-text-section-four">
              העסקת המנופאים כשרות מנוהל בשטח הלקוח, באמצעות מנופאים (ע.י.) בע"מ
              המעסיקה ומנהלת צוותי מנופאים בעלי רשיון ממשרד העבודה
            </p>
            <div className="div-button-four">
              <button className="service-btn">להמשך קריאה</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
