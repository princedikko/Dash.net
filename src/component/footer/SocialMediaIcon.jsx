import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import { fontSize } from "@mui/system";

function SocialMediaIcons() {
  return (
    <figure className="footerMediaIcons flex">
      <Link>
        <TwitterIcon style={{ fontSize: "2.1rem" }} />
      </Link>
      <Link>
        <FacebookIcon style={{ fontSize: "2.1rem" }} />
      </Link>
      <Link>
        <LinkedInIcon style={{ fontSize: "2.1rem" }} />
      </Link>
      <Link>
        <InstagramIcon style={{ fontSize: "2.1rem" }} />
      </Link>
      <Link>
        <WhatsAppIcon style={{ fontSize: "2.1rem" }} />
      </Link>
      <Link>
        <TelegramIcon style={{ fontSize: "2.1rem" }} />
      </Link>
    </figure>
  );
}

export default SocialMediaIcons;
