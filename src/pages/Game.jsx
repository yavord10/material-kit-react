import React from "react";

const Game = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5rem" }}
    >
      <iframe
        src="https://www.retrogames.cc/embed/19499-megaman-zero-u-venom.html"
        width="750"
        height="550"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        style={{
          border: "none",
          position: "relative",
          zIndex: 5,
        }}
      ></iframe>
    </div>
  );
};

export default Game;
