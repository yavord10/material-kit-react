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

// Megamoon examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              prefix="$"
              count={8519}
              suffix="+"
              title="Supply burnt"
              description=""
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <DefaultCounterCard count={3} suffix="+" title="Buybacks done" description="" />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              prefix="$"
              count={841}
              suffix="+"
              title="Reflections"
              description=""
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
