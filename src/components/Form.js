import React from "react";


class Form extends React.Component {
render() {
    return (
<div className="contacts" class="container-fluid px-0">
        <div class="row align-items-center content flex-column-reverse flex-md-row">
          <div class="col-md-6" id= "contactForm">
            <div className = "contactTitle">CONTACT US</div>
            <div>First Name*</div>
            <div className="formField"></div>
            <div>Last Name*</div>
            <div className="formField"></div>
            <div>Email*</div>
            <div className="formField"></div>
            <div className = "formShortRow">
              <div className = "shortOne">
              <div>Comapny Name</div>
              <div className="formFieldShort"></div>
              </div>
              <div className="shortTwo">
              <div>Phone*</div>
              <div className="formFieldShort"></div>
              </div>
            </div>
            <div>Project Type Product*</div>
            <div className="formFieldProduct"></div>
            <div className ="formWarn">Please select option from the dropdown menu...</div>
            <div>Message*</div>
            <div className="formMessage"></div>
            </div>
          <div className="contactInfo" class="col-md-6">
          <div className= "contactTitle">CONTACT US FOR ANY OF YOUR POLE BARN NEEDS</div>
          <div className= "contactPhone">303.999.1234</div>
          <div className= "contactAddress">1234 NEVER ENDING DRIVE <br></br> FORT COLLINS, CO 80521 </div>
          <div className= "contactEmail">amcepolebarns@gmail.com</div>
          <div className= "contactBlurb">Our projects are made to order with the highest standards.
            We are committed to taking the time needed to design projects that meets
            meets or exceeds our clients expecations and looking great doing it.</div>
            </div>
        </div>
        </div>
    )
}
}
export default Form;