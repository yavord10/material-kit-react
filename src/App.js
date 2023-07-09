import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Megamoon themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Megamoon routes
import styles from "./App.module.scss";
import megaMan from "assets/images/ZZ58.gif";
import megaMoon from "assets/images/8bitmoon.png";
import Game from "pages/Game";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  /*   useEffect(() => {
    runAnimation(styles.particleNetworkAnimation);
  }, []); */

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.particleNetworkAnimation}></div>
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/play" element={<Game />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <img className={styles.megaMoon} src={megaMoon} />
      <img className={styles.megaMan} src={megaMan} />
    </ThemeProvider>
  );
}
