import React from "react";
import NavBar from "../header/NavBar";
import Logo from "../pages/login/logImage/photo2.png"
import { Link } from "react-router-dom";


// icons
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";


function ReportProblems() {
  return (
    <section className="sectionReportProblems">
      <div className="RpHeader">
        <NavBar />
      </div>
      <div className="rptProblem">
        <h2 class="heading--secondary">Have Problem?</h2><p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.Repellat, id in doloribus a minus ex quod!
        </p>
      </div>
      <div className="RpBody golf golf2">
        <div className="RpIllustration">
          <div className="RpImg">
            <img src={Logo} alt="dash.net" />
          </div>
          <div className="Rpgride golf golf2">

          <div className="RpLinkto">
            <h4>Have general question?</h4>
            <p><Link>Check our FAQs</Link></p>
          </div>
          <div className="RpLinkto">
            <h4>Customer support</h4>
            <p><Link>info@dash.com</Link></p>
          </div>
          <div className="RpLinkto">
            <h4>Social media</h4>
            <figure className="golf golf4">
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
          </div>
          <div className="RpLinkto">
            <h4>Support Line</h4>
            <p>Calls are being recieved  and end at 6pm</p>
            <p><Link>+2348 0694 50870</Link></p>
          </div>
          </div>
        </div>
        <div className="RpForm">
          <form action="#">
            
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" placeholder="Full Name.." required/>
            <label htmlFor="email">Email </label>
            <input type="email" name="Rpemail" id="" placeholder="Email" required/>
            <label htmlFor="inquiry">Your inquiry</label>
            <select name="Rpinquire" id="inquiryRp" required>
              <option value=" " style={{color: "gray"}}  disabled selected hidden >select..</option>
              <option value="caseOne" >Case One</option>
              <option value="caseOne" >Case One</option>
              <option value="caseOne" >Case One</option>
              <option value="caseOne" >Case One</option>
            </select>
            <label htmlFor="helping">How can we help you?</label>
            <textarea name="Rpmessage" id="messaging" cols="30" rows="10" placeholder="I would like to know about..." required></textarea>
            <input type="submit" value="Send message" />
          </form>
        </div>
        </div>
    </section>
  );
}

export default ReportProblems;
