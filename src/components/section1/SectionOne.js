import React, { useState } from "react";
import "../../Css/SectionOne.css";

function SectionOne() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <p className="close" onClick={() => setOpen(!open)}>
        {open ? (
          <span className="bgClose">❌</span>
        ) : (
          <span className="bgOpen">🍔</span>
        )}
      </p>
      {open ? (
        <div className="mainDivOne">
          <div className="titleNav">
            <span>עמוד הבית</span>
          </div>
          <div className="titleNav">
            <span>מי אנחנו</span>
          </div>
          <div className="titleNav">
            <span>השירותים שלנו</span>
          </div>
          <div className="titleNav">
            <span>יצירת קשר</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SectionOne;
