/* eslint-disable react/jsx-no-duplicate-props */

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Zeus LiveStream React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import tv from "assets/images/tv.png";
import multiplatform from "assets/images/multiplatform.png";
import firestick from "assets/images/firestick2.jpg";

function InfoTV() {
  return (
    <MKBox component="section">
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h2" pb={5}>
            Cuando quieras, donde quieras{" "}
          </MKTypography>{" "}
        </Grid>{" "}
        <Grid container alignItems="center">
          <Grid item md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h3"> Disfruta en tu TV </MKTypography>{" "}
            <MKTypography variant="body1" color="text" mb={3}>
              Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu - ray y
              más.{" "}
            </MKTypography>{" "}
          </Grid>{" "}
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={tv} alt="tv" width="100%" />
            </MKBox>{" "}
          </Grid>{" "}
        </Grid>{" "}
        <Grid container alignItems="center">
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={firestick} alt="firestick" width="100%" />
            </MKBox>{" "}
          </Grid>{" "}
          <Grid item md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h3"> Disfruta en tu Firestick 4 K </MKTypography>{" "}
            <MKTypography variant="body1" color="text" mb={3}>
              Canales, películas y series ilimitadas en tu teléfono, tablet, laptop y TV.{" "}
            </MKTypography>{" "}
          </Grid>{" "}
        </Grid>{" "}
        <Grid container alignItems="center">
          <Grid item md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h3"> Disfruta donde quieras </MKTypography>{" "}
            <MKTypography variant="body1" color="text" mb={3}>
              Canales películas y series ilimitadas en tu teléfono, tablet, laptop y TV.{" "}
            </MKTypography>{" "}
          </Grid>{" "}
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={multiplatform} alt="multiplatform" width="100%" />
            </MKBox>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Container>{" "}
    </MKBox>
  );
}

export default InfoTV;
