// @mui material components
import Icon from "@mui/material/Icon";
import Index from "pages/LandingPages/Index";
// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import Author from "pages/LandingPages/Author";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    route: "/Index",
    component: <Index />,
    key: 1,
  },
  {
    name: "sections",
    icon: <Icon>view_day</Icon>,
    route: "/pages/landing-pages/about-us",
    component: <Index />,
    key: 2,
  },
  {
    name: "docs",
    icon: <Icon>article</Icon>,
    route: "/pages/landing-pages/about-us",
    component: <Index />,
    key: 3,
  },
  {
    name: "github",
    icon: <GitHubIcon />,
    route: "/Author",
    component: <Author />,
    key: 4,
  },
];

export default routes;
