import React, { useState } from "react";

const Testcomponent = () => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        backgroundColor: hover ? "blue" : "red",
      }}
     >
      Hover me!
    </button>
  );
};

export default Testcomponent;