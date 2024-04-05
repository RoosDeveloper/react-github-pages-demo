// @mui material components
import Icon from "@mui/material/Icon";
import Index from "pages/LandingPages/Index";
// @mui icons
import Channels from "pages/LandingPages/Channels";
import Movies from "pages/LandingPages/Movies";
import Series from "pages/LandingPages/Series";
import Plans from "pages/LandingPages/Plans";

const routes = [
  {
    name: "Principal",
    icon: <Icon> dashboard </Icon>,
    route: "/Index",
    component: <Index />,
    key: 1,
  },
  {
    name: "Canales",
    icon: <Icon> live_tv </Icon>,
    route: "/Channels",
    component: <Channels />,
    key: 2,
  },
  {
    name: "peliculas",
    icon: <Icon> movie </Icon>,
    route: "/Movies",
    component: <Movies />,
    key: 3,
  },
  {
    name: "Series",
    icon: <Icon> theaters </Icon>,
    route: "/Series",
    component: <Series />,
    key: 4,
  },
  {
    name: "Planes",
    icon: <Icon> view_day </Icon>,
    route: "/Plans",
    component: <Plans />,
    key: 5,
  },
  // {
  //   name: "docs",
  //   icon: <Icon>article</Icon>,
  //   route: "/pages/landing-pages/about-us",
  //   component: <Index />,
  //   key: 3,
  // },
];

export default routes;
