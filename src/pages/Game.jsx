import React from "react";

import styles from "App.module.scss";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import xKey from "assets/images/x_keyboard-removebg-preview.png";
import sKey from "assets/images/s_keyboard-removebg-preview.png";

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            margin: "5px 0 10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={styles.keyFlex} style={{ marginLeft: "-35px" }}>
              <img className={styles.key} src={sKey} alt="s-key" />
              <span>Press to shoot!</span>
            </div>
            <div className={styles.keyFlex}>
              <img className={styles.key} src={xKey} alt="x-key" />
              <span>Press to jump!</span>
            </div>
            <div className={styles.text}></div>
          </div>
          <span
            style={{
              color: "white",
            }}
          >
            Have fun playing while <br />
            receive your reflections <br />
            straight in your wallet!
          </span>
        </div>
        <iframe
          id="myFrame"
          src="https://retrogamesonline.io/play/mega-man-x4"
          width="750"
          height="550"
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
