import React from "react";

import styles from "App.module.scss";

const Game = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        zIndex: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3rem",
      }}
    >
      <h2 style={{ zIndex: 5, color: "white", marginBottom: "1rem" }}>
        Play Megaman while enjoying your reflections!
      </h2>
      <iframe
        id="myFrame"
        src="https://retrogamesonline.io/play/mega-man-x4"
        width="850"
        height="650"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        className={styles.gameIframe}
        style={{
          border: "none",
          position: "relative",
          zIndex: 5,
          background: "white",
        }}
      ></iframe>
    </div>
  );
};

export default Game;
