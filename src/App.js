import { useEffect, useState } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Megamoon themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Megamoon routes
import routes from "routes";
import styles from "./App.module.scss";
import megaMan from "assets/images/ZZ58.gif";

import song from "assets/fireMan.mp3";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

export default function App() {
  const [audio] = useState(new Audio(song));
  const [isPlaying, setIsPlaying] = useState(false);
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const handlePlay = () => {
    audio.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audio.pause();
    setIsPlaying(false);
  };

  /*   useEffect(() => {
    runAnimation(styles.particleNetworkAnimation);
  }, []); */

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <span
        className={styles.muteButton}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          color: "white",
          zIndex: "5",
          fontSize: "40px",
          marginRight: "8px",
          cursor: "pointer",
        }}
      >
        {!isPlaying && <VolumeOffIcon onClick={handlePlay} />}
        {isPlaying && <VolumeUpIcon onClick={handleStop} />}
      </span>
      <div className={styles.particleNetworkAnimation}></div>
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <img className={styles.megaMan} src={megaMan} />
    </ThemeProvider>
  );
}
