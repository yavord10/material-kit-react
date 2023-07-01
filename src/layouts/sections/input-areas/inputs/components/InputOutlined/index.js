/* eslint-disable no-param-reassign */
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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Tokenomics 2.0 components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function InputOutlined() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <MKInput label="Outline" fullWidth />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InputOutlined;
