// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Zeus LiveStream React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Zeus LiveStream React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// About Us page sections
import InfoRecount from "pages/LandingPages/Information/sections/InfoRecount";
import MoviesCategories from "pages/LandingPages/Movies/sections/MoviesCategories";
import InfoSuscripcion from "pages/LandingPages/Information/sections/InfoSuscripcion";
import Footer from "pages/LandingPages/Footer/Footer";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/fondo/fondo6.webp";

function Index() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        // type: "external",
        // route: "https://www.creative-tim.com/product/material-kit-react",
        // label: "free download",
        // color: "default",
        // }}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0),
              rgba(gradients.dark.state, 0.9)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Tus películas favoritas Y más...{" "}
            </MKTypography>{" "}
            <MKTypography variant="body1" color="white" opacity={0.9} mt={8} mb={3}>
              Disfruta donde quieras Cancela cuando quieras{" "}
            </MKTypography>{" "}
            <MKButton color="info" variant="gradient" size="large">
              Prueba Gratis{" "}
            </MKButton>{" "}
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Encuentranos{" "}
            </MKTypography>{" "}
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>{" "}
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://www.instagram.com/lrstreamingtv/"
                mr={3}
              >
                <i className="fab fa-instagram" />
              </MKTypography>{" "}
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-whatsapp"> </i>{" "}
              </MKTypography>{" "}
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://www.tiktok.com/@lriptv"
              >
                <i className="fab fa-tiktok" />
              </MKTypography>{" "}
            </MKBox>{" "}
          </Grid>{" "}
        </Container>{" "}
      </MKBox>{" "}
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.9),
          backdropFilter: "saturate(100%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MoviesCategories />
      </Card>{" "}
      <InfoSuscripcion />
      <MKBox pt={6} px={1} mt={6}>
        <Footer />
      </MKBox>{" "}
    </>
  );
}

export default Index;
