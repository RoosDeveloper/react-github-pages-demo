// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Zeus LiveStream React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Zeus LiveStream React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h2" pb={10}>
            Nuestro servicio{" "}
          </MKTypography>{" "}
        </Grid>{" "}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={5} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png"
              title="Suscribete Ahora!"
              description="Revisa nuestros planes y combos"
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "Planes",
              }}
            />{" "}
          </Grid>{" "}
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="En todo el mundo!"
                    description="Encuentranos en todo el mundo"
                  />
                </MKBox>{" "}
              </Grid>{" "}
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Multiples opciones de pago"
                    description="Puedes realizar el pago con tarjeta de debito, credito o Paypal"
                  />
                </MKBox>{" "}
              </Grid>{" "}
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Multiples dispositivos"
                    description="Disfrútalo en tu pantalla favorita, ya sea tu TV, tableta, computadora, teléfono y otros. Además, puedes ver en tres pantallas en simultáneo para que nadie se quede afuera."
                  />
                </MKBox>{" "}
              </Grid>{" "}
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Soporte 24/7"
                    description="Estamos para apoyarte los 7 días de la semana, 365 días del año, las 24 horas del día."
                  />
                </MKBox>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Container>{" "}
    </MKBox>
  );
}

export default Information;
