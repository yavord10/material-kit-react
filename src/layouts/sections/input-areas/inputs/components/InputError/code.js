const inputErrorCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Tokenomics 2.0 components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function InputError() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <MKInput label="Error" fullWidth error />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InputError;`;

export default inputErrorCode;
