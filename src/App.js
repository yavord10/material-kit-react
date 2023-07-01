/**
=========================================================
* Tokenomics 2.0 - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Tokenomics 2.0 themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Tokenomics 2.0 routes
import routes from "routes";
import runAnimation from "runAnimation";
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

  useEffect(() => {
    runAnimation(styles.particleNetworkAnimation);
  }, []);

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
