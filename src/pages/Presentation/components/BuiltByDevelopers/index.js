/*
=========================================================
* Megamoon - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Megamoon components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/8bitmegamoonbg2.webp";

function BuiltByDevelopers() {
  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "contain",
        backgroundPosition: "bottom",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h3" color="white" mb={1}>
            Tokenomics
          </MKTypography>
          <div style={{ display: "flex", flexDirection: "column " }}>
            <MKTypography variant="h5" color="white" fontWeight="bold">
              Buy tax: 0%
            </MKTypography>
            <MKTypography variant="h5" color="white" fontWeight="bold" mb={1}>
              Sell tax: 0% - 20%
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
              Depending on the health of the chart the sell tax will fluctuate between 0-20%. It
              increases as the chart descends, and decreases while the chart moves upward on each
              transaction.
            </MKTypography>
          </div>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
