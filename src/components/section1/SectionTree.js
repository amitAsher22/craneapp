import React from "react";
import "../../Css/sectionTree.css";

function SectionTree() {
  return (
    <div>
      <div className="containerSectionTree">
        <div>
          <h1>אודותינו</h1>
          <hr style={{ width: "30%" }} />
          <p className="text-section-tree">
            מנופאים (ע.י.) הינה חברה ייעודית המתמחה בהעסקת מנופאים מקצועיים
            ופועלת בהתאם היתר המיוחד שניתן לה מטעם משרד הכלכלה. החברה היא חברה
            בת בקבוצת מעוף, מהמובילות את תחום המשאב האנושי בישראל. התמחותה של
            החברה הינה בהעסקה והפעלת עגורני צריח ומפעילי עגורנים שונים באתרי
            בנייה.
          </p>
          <div className="div-Cards">
            <div className="div-Small">
              <p className="title-Card">מנופאים מוסמכים</p>
              <p>
                מנופאים המגוייסים ומועסקים על ידי חברת מנופאים (ע.י.) בע"מ הינם
                בעלי הסמכה, מקצועיים המיומנים בציוד המופעל על ידם
              </p>
            </div>
            <div className="div-Small">
              <p className="title-Card">בטיחות מעל הכל</p>
              <p>המנופאים עוברים הכשרות וסדנאות בתחום נהלי הבטיחות</p>
            </div>
            <div className="div-Small">
              <p className="title-Card">רענון תקופתי</p>
              <p>
                המנופאים המועסקים על ידי מנופאים (ע.י.) בע"מ עוברים רענון תקופתי
              </p>
            </div>
            <div className="div-Small">
              <p className="title-Card"> נהלי עבודה מוקפדים</p>
              <p>
                מנופאים המועסקים בחברת מנופאים (ע.י.) בע"מ, מנוהלים על ידי מנהלי
                תפעול ואבטחה הפועלים תחת נהלי עבודה מוקפדים
              </p>
            </div>
          </div>
        </div>

        <img
          className="img-section-tree"
          src="https://manofayim.co.il/wp-content/uploads/2021/03/man.png"
        />
      </div>
    </div>
  );
}

export default SectionTree;
