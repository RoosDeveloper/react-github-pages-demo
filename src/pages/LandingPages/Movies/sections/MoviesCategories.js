// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Zeus LiveStream React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Zeus LiveStream React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images

import category1 from "assets/images/Category/1.jpeg";
import category2 from "assets/images/Category/2.jpeg";
import category3 from "assets/images/Category/3.jpeg";
import category4 from "assets/images/Category/4.jpeg";
import category5 from "assets/images/Category/5.jpeg";
import category6 from "assets/images/Category/6.jpeg";

function MoviesCategories() {
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
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="dark">
              Encuentra miles de Peliculas{" "}
            </MKTypography>{" "}
            <MKTypography variant="body2" color="dark" opacity={0.8}>
              Películas ilimitadas de Acción, Aventura, Ciencia Ficción, Comedia, Drama, Fantasía...{" "}
            </MKTypography>{" "}
          </Grid>{" "}
        </Grid>{" "}
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={category1}
                name="Godzilla y Kong: El nuevo imperio"
                position={{ color: "warning", label: "Acción" }}
                description="¡La batalla épica continúa! La película de Legendary Pictures continúa el explosivo enfrentamiento de “Godzilla vs. Kong”"
              />
            </MKBox>{" "}
          </Grid>{" "}
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={category2}
                name="Kung Fu Panda 4"
                position={{ color: "info", label: "Animación" }}
                description="Después de tres aventuras desafiando a la muerte y derrotando a villanos de clase mundial con su incomparable coraje y sus alocadas habilidades en las artes marciales"
              />
            </MKBox>{" "}
          </Grid>{" "}
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={category3}
                name="Bob Marley: La Leyenda"
                position={{ color: "info", label: "Biografía" }}
                description="Bob Marley: La Leyenda celebra la vida y la música de un ícono que inspiró a generaciones a través de su mensaje de amor y unidad"
              />
            </MKBox>{" "}
          </Grid>{" "}
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={category4}
                name="Atrapados en lo Profundo"
                position={{ color: "error", label: "Acción" }}
                description="Un grupo de vacacionistas se ve unido por el destino cuando el avión en el que viajan se desploma en el mar a causa de la explosión de una turbina"
              />
            </MKBox>{" "}
          </Grid>{" "}
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={category5}
                name="Los Diez Mandamientos 1956"
                position={{ color: "success", label: "Drama" }}
                description="Drama bíblico ambientado en el Antiguo Egipto que narra la historia de Moisés (Charlton Heston)"
              />
            </MKBox>{" "}
          </Grid>{" "}
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={category6}
                name="Alicia en el País de las pesadillas"
                position={{ color: "info", label: "Terror" }}
                description="Es una inquietante versión del clásico cuento de Lewis Carroll, que transporta al espectador a un mundo retorcido y oscuro"
              />
            </MKBox>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Container>{" "}
    </MKBox>
  );
}

export default MoviesCategories;
