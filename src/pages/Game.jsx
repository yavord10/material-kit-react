import React from "react";

import styles from "App.module.scss";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";

const Game = () => {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route:
            "https://www.dextools.io/app/en/ether/pair-explorer/0x24cd9d59f20752ed4eb3cb53821671da22fce505",
          label: "Dextools",
          color: "info",
        }}
        sticky
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          zIndex: 5,
          justifyContent: "center",
          alignItems: "center",
          top: "8rem",
          width: "100%",
        }}
      >
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
    </>
  );
};

export default Game;
