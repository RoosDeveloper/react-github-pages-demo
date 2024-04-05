// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Zeus LiveStream React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Zeus LiveStream React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import CardPlan from "pages/LandingPages/Plans/sections/Cards/Plan/CardPlan";

// Images

import category1 from "assets/images/Category/1.jpeg";
import category2 from "assets/images/Category/2.jpeg";
import category3 from "assets/images/Category/3.jpeg";

function PlansCategories() {
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
    <MKBox
      component="section"
      variant="gradient"
      bgColor="light"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 3 }}>
            <MKTypography variant="h3" color="dark">
              Elige tu plan{" "}
            </MKTypography>{" "}
            <MKTypography variant="body2" color="dark" opacity={0.8}>
              Puedes cancelar en cualquier momento.{" "}
            </MKTypography>{" "}
          </Grid>{" "}
        </Grid>{" "}
        <Grid container display={"flex"} justifyContent={"center"} spacing={3} mb={2} mt={1}>
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
      </Container>{" "}
    </MKBox>
  );
}

export default PlansCategories;
