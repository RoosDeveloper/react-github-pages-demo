// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Zeus LiveStream React components
import MKBox from "components/MKBox";

// Zeus LiveStream React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={5}>
      <Container>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={1700}
              separator=","
              suffix="+"
              title="Canales de TV"
              description="Mejor rango de actualizacion"
            />
          </Grid>{" "}
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={3215}
              separator=","
              suffix="+"
              title="Peliculas"
              description="Tenemos una amplia variedad de peliculas"
            />
          </Grid>{" "}
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={2504}
              suffix="+"
              title="Series"
              description="Premiadas y favoritas del público"
            />
          </Grid>{" "}
        </Grid>{" "}
      </Container>{" "}
    </MKBox>
  );
}

export default Featuring;
