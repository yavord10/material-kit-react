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
import routes from "routes";
import styles from "./App.module.scss";

export default function App() {
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

  /*   useEffect(() => {
    runAnimation(styles.particleNetworkAnimation);
  }, []); */

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.particleNetworkAnimation}></div>
      <Routes>
        {getRoutes(routes)}
        <Route path="/tech" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/tech" />} />
      </Routes>
    </ThemeProvider>
  );
}
