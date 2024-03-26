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
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
//import post4 from "assets/images/examples/blog2.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Caterorías
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Canales Nacionales"
              description="Clasificado por paises"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Instagram",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Canales de niños"
              description="Jovenes y adultos"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Instagram",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Entretenimiento"
              description="Canales de variedades ingles y español"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Instagram",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Religión"
              description="Programacion educativo y predicaciones"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Instagram",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Canales Deportivos"
              description="MLB, NFL, NBA y muchos mas"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Instagram",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Canales Culturales"
              description="Canales de educacion y filosofia"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Instagram",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
