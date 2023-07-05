/* eslint-disable */

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Megamoon components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Megamoon examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import styles from "App.module.scss";

// Images
import logo from "assets/images/megamoon_logo.png";

function Presentation() {
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
          background: "black",
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
          width: "100%",
          minHeight: "75vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <img
            src={logo}
            style={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "300px",
              zIndex: 5,
            }}
          />
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
              style={{ zIndex: 5 }}
              className={styles.heroDesc}
            >
              We have created the most bullish tokenomics out there. 'The Meganomics' incorporate a
              MEGA deflationary mechanism and provide MEGA reflections to holders, whilst ensuring a
              MEGA healthy, strong chart.
            </MKTypography>
          </Grid>
        </div>
      </div>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
        }}
      >
        <Counters />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="flag"
                title="Reflections"
                description="40% of tax goes to massive reflections for holders"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Buybacks/Burn"
                description="40% of tax goes to buybacks and burns"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Marketing"
                description="20% of tax goes to marketing and growth"
              />
            </Grid>
          </Grid>
        </Container>
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h6" fontWeight="bold" mb={0.5} mt={1}>
                  Thank you for your support!
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/MEGAMOON_eth"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1, mt: 1 }}
                >
                  <i className="fab fa-twitter" style={{ fontSize: "20px" }} />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://t.me/MEGAMOON_eth"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1, mt: 1 }}
                >
                  <i className="fab fa-telegram" style={{ fontSize: "20px" }} />
                  &nbsp;Join
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="mailto:megamooneth@gmail.com"
                  target="_blank"
                  color="youtube"
                  sx={{ mr: 1, mt: 1 }}
                >
                  <i className="fas fa-envelope" style={{ fontSize: "20px" }} />
                  &nbsp;Email
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
