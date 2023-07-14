// @mui material components
import Grid from "@mui/material/Grid";

// Megamoon components
import MKBox from "components/MKBox";

// Megamoon examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <div
        style={{
          background: "rgba(255,255,255, 0.8)",
          borderRadius: "20px",
          padding: "1rem 0",
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
          zIndex: 5,
        }}
      >
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              prefix="$"
              count={117060}
              suffix="+"
              title="Supply burnt"
              description=""
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <DefaultCounterCard count={23} suffix="+" title="Buybacks" description="" />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              prefix="$"
              count={22015}
              suffix="+"
              title="Reflections"
              description=""
            />
          </Grid>
        </Grid>
      </div>
    </MKBox>
  );
}

export default Counters;
