import React from "react";

function ToTop(props) {
  return (
    <div className="top" onClick={() => window.scrollTo(0, 0)}>
      <img src="./assets/arrow-icon.svg" alt="arrow to top page" />
    </div>
  );
}

export default ToTop;
