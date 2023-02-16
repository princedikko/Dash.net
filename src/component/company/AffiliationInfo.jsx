import React from "react";
import AffiImg from '../pages/profile/picture/hij.jpg'
function AffiliationInfo() {
    return(
        <section className="sectionAffiliationInfo">
            <div className="affiCont">
                <figure className="affiTopCard">
                    <div className="affiTopDisc">
                        <h3>Become an Affiliate Partner</h3>
                        <p>Thanks for your interest in becoming a Dash Affiliate! We have created a program which will allow you to make great money by linking to our site. We automatically track your commissions and send them each month. Refer new customers to Dash and earn up to 20% of every purchase you deliver to us.</p>
                    </div>
                    <figure className="affiTopImg">
                        <img src={AffiImg} alt="dash.net" />
                    </figure>
                </figure>
                <div className="affiStepsCont">
                    <div>
                    <h2>How it Works?</h2>
                    <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div className="affiSteps">
                        <div className="affiStepOne">
                            <div className="stepDiscription">
                                <h5>Step 1: Sign Up and Get the Referral Link</h5>
                                <p>Create an affiliate account. Once you’ve signed up, you will have the access to your data overview dashboard as well as your EXCLUSIVE referral link.</p>
                            </div>
                            <figure>
                               <img src={AffiImg} alt="dash.net" />
                            </figure>
                        </div>
                    </div>



                </div>
            </div>

        </section>
    )
}

export default AffiliationInfo;
