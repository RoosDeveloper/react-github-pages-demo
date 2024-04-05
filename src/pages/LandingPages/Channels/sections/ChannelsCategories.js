// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Zeus LiveStream React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Zeus LiveStream React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
//import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import img_default from "assets/images/default.png";
//import post4 from "assets/images/examples/blog2.jpg";

function Places() {
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
              Encuentra miles de Canales{" "}
            </MKTypography>{" "}
            <MKTypography variant="body2" color="dark" opacity={0.8}>
              Encuentra miles de canales y programas de television.{" "}
            </MKTypography>{" "}
          </Grid>{" "}
        </Grid>{" "}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={img_default}
              title="Canales Nacionales"
              description="Clasificado por paises"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Instagram",
              }}
            />{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={img_default}
              title="Canales de niños"
              description="Jovenes y adultos"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Instagram",
              }}
            />{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={img_default}
              title="Entretenimiento"
              description="Canales de variedades ingles y español"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Instagram",
              }}
            />{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={img_default}
              title="Religión"
              description="Programacion educativo y predicaciones"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Instagram",
              }}
            />{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={img_default}
              title="Canales Deportivos"
              description="MLB, NFL, NBA y muchos mas"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Instagram",
              }}
            />{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={img_default}
              title="Canales Culturales"
              description="Canales de educacion y filosofia"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Instagram",
              }}
            />{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={img_default}
              title="Canales Política"
              description="Todo sobre política y muchos mas"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Instagram",
              }}
            />{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={img_default}
              title="Canales de Música"
              description="Veras a tus artistas favoritos"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Instagram",
              }}
            />{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Container>{" "}
    </MKBox>
  );
}

export default Places;
