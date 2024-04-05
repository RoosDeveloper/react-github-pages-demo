// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Zeus LiveStream React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Zeus LiveStream React components
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

// Images
//import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post1 from "assets/images/default.png";

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
              Encuentra miles de Series{" "}
            </MKTypography>{" "}
            <MKTypography variant="body2" color="dark" opacity={0.8}>
              Todas las series premiadas y queridas por la afición.{" "}
            </MKTypography>{" "}
          </Grid>{" "}
        </Grid>{" "}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4} sx={{ mb: 3 }}>
            <CenteredBlogCard
              image={post1}
              title="Título de Serie"
              description="Descripción corta de serie"
              action={{
                type: "internal",
                route: "#",
                color: "info",
                label: "Suscribirse",
              }}
            />{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={6} lg={4} sx={{ mb: 3 }}>
            <CenteredBlogCard
              image={post1}
              title="Título de Serie"
              description="Descripción corta de serie"
              action={{
                type: "internal",
                route: "#",
                color: "info",
                label: "Suscribirse",
              }}
            />{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={6} lg={4} sx={{ mb: 3 }}>
            <CenteredBlogCard
              image={post1}
              title="Título de Serie"
              description="Descripción corta de serie"
              action={{
                type: "internal",
                route: "#",
                color: "info",
                label: "Suscribirse",
              }}
            />{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={6} lg={4} sx={{ mb: 3 }}>
            <CenteredBlogCard
              image={post1}
              title="Título de Serie"
              description="Descripción corta de serie"
              action={{
                type: "internal",
                route: "#",
                color: "info",
                label: "Suscribirse",
              }}
            />{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={6} lg={4} sx={{ mb: 3 }}>
            <CenteredBlogCard
              image={post1}
              title="Título de Serie"
              description="Descripción corta de serie"
              action={{
                type: "internal",
                route: "#",
                color: "info",
                label: "Suscribirse",
              }}
            />{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={6} lg={4}>
            <CenteredBlogCard
              image={post1}
              title="Título de Serie"
              description="Descripción corta de serie"
              action={{
                type: "internal",
                route: "#",
                color: "info",
                label: "Suscribirse",
              }}
            />{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Container>{" "}
    </MKBox>
  );
}

export default Places;
