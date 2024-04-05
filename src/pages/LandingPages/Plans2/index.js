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
import CardPlan from "pages/LandingPages/Plans/sections/CardPlan";

// Routes
import routes from "routes";
import Footer from "pages/LandingPages/Footer/Footer";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function Index() {
  const planes = [
    {
      pricePlansId: 1,
      planName: "Plan Bronze",
      planDescription: "Valido por 2 meses",
      durationPlan: 60,
      price: 800,
      combos: [
        {
          comboId: 1,
          comboName: "Combo Bronze 1",
          comboDescription: "Combo con serie y plan Premium",
          comboPrice: 6800.0,
          products: [
            {
              productId: 1,
              productName: "Película A",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
            {
              productId: 2,
              productName: "Película B",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
          ],
        },
        {
          comboId: 1,
          comboName: "Combo Bronze 2",
          comboDescription: "Combo con serie y plan Premium",
          comboPrice: 6800.0,
          products: [
            {
              productId: 1,
              productName: "Película A",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
            {
              productId: 1,
              productName: "Película B",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
            {
              productId: 1,
              productName: "Película C",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
          ],
        },
      ],
    },
    {
      pricePlansId: 1,
      planName: "FireStick 4K",
      planDescription: "Valido por 2 meses",
      durationPlan: 60,
      price: 3800,
      combos: [
        {
          comboId: 1,
          comboName: "Combo FireStick 4K 1",
          comboDescription: "Combo con serie y plan Premium",
          comboPrice: 6800.0,
          products: [
            {
              productId: 1,
              productName: "Película A",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
            {
              productId: 2,
              productName: "Película B",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
          ],
        },
        {
          comboId: 1,
          comboName: "Combo FireStick 4K 2",
          comboDescription: "Combo con serie y plan Premium",
          comboPrice: 6800.0,
          products: [
            {
              productId: 1,
              productName: "Película A",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
            {
              productId: 1,
              productName: "Película B",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
            {
              productId: 1,
              productName: "Película C",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
          ],
        },
      ],
    },
    {
      pricePlansId: 1,
      planName: "Suscribcion anual",
      planDescription: "Valido por 2 meses",
      durationPlan: 60,
      price: 3200,
      combos: [
        {
          comboId: 1,
          comboName: "Combo anual 1",
          comboDescription: "Combo con serie y plan Premium",
          comboPrice: 6800.0,
          products: [
            {
              productId: 1,
              productName: "Película A",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
            {
              productId: 2,
              productName: "Película B",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
          ],
        },
        {
          comboId: 1,
          comboName: "Combo anual 2",
          comboDescription: "Combo con serie y plan Premium",
          comboPrice: 6800.0,
          products: [
            {
              productId: 1,
              productName: "Película A",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
            {
              productId: 1,
              productName: "Película B",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
            {
              productId: 1,
              productName: "Película C",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
          ],
        },
      ],
    },
    {
      pricePlansId: 1,
      planName: "Combo Gold",
      planDescription: "Valido por 2 meses",
      durationPlan: 60,
      price: 6800,
      combos: [
        {
          comboId: 1,
          comboName: "Combo Gold 1",
          comboDescription: "Combo con serie y plan Premium",
          comboPrice: 6800.0,
          products: [
            {
              productId: 1,
              productName: "Película A",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
            {
              productId: 2,
              productName: "Película B",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
          ],
        },
        {
          comboId: 1,
          comboName: "Combo Gold 2",
          comboDescription: "Combo con serie y plan Premium",
          comboPrice: 6800.0,
          products: [
            {
              productId: 1,
              productName: "Película A",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
            {
              productId: 1,
              productName: "Película B",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
            {
              productId: 1,
              productName: "Película C",
              productDescription: null,
              productImagePath: null,
              price: 10.0,
              stock: 0,
              category: "Peliculas",
            },
          ],
        },
      ],
    },
  ];
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
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
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
              Sus programas y canales favoritos en cualquier dispositivo, desde cualquier ubicación.{" "}
            </MKTypography>{" "}
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Consulte ahora por precios y planes.{" "}
            </MKTypography>{" "}
            <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              Crear cuenta{" "}
            </MKButton>{" "}
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Encuentranos{" "}
            </MKTypography>{" "}
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>{" "}
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>{" "}
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>{" "}
              <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-whatsapp"> </i>{" "}
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
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Grid container display={"flex"} justifyContent={"center"} spacing={10} mb={2} mt={1}>
          {" "}
          {planes.map((plan) => {
            return (
              <Grid item>
                <CardPlan
                  title={plan.planName}
                  price={plan.price}
                  combos={plan.combos}
                  discount={"20% descuento en primera compra"}
                />{" "}
              </Grid>
            );
          })}{" "}
        </Grid>{" "}
      </Card>{" "}
      <MKBox pt={6} px={1} mt={6}>
        <Footer />
      </MKBox>{" "}
    </>
  );
}

export default Index;
