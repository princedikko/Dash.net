import React from "react";
import NavBar from "../../header/NavBar";
import { Link } from "react-router-dom";
function FeedBack() {
  return <section className="sectionFeedBack">
    
    <div className="feedbackHead">
        <NavBar />
      </div>
      <div className="feedbackCont ">
        <h2>Give us feedback</h2>
        <div className="RpForm">
          <form action="#" id="feedback">
            
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" placeholder="Full Name.." required/>
            <label htmlFor="email">Email or Phone number </label>
            <input type="text" name="Rpemail" id="" placeholder="Enter email or number" required/>
            <label htmlFor="inquiry">I'm from</label>
            <select name="Rpinquire" id="inquiryRp" required>
              <option value=" "  disabled selected hidden >select your state..</option>
              <option value="caseOne" >Sokoto State</option>
              <option value="caseOne" >Kaduna State</option>
              <option value="caseOne" >Lagos State</option>
              <option value="caseOne" >Kwara State</option>
            </select>
            <label htmlFor="helping">Your Message:</label>
            <textarea name="Rpmessage" id="messaging" cols="30" rows="10" placeholder="I would like to say about..." required></textarea>
            <input type="submit" value="Send message" />
          </form>
        </div>
        </div>
  </section>;
}

export default FeedBack;
