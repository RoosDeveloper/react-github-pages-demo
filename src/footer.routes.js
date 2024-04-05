// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Zeus LiveStream React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";
import { Instagram, WhatsApp } from "@mui/icons-material";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Zeus LiveStream",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <Instagram />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <WhatsApp />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "company",
      items: [],
    },
    {
      name: "resources",
      items: [],
    },
    {
      name: "help & support",
      items: [],
    },
    {
      name: "legal",
      items: [ ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      <MKTypography
        component="a"
        href="https://www.ZeusLivestream.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
      </MKTypography>
      All rights reserved. Copyright @ZeusLivestream
    </MKTypography>
  ),
};
