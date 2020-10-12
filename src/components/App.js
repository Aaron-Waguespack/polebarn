import React from 'react';
import '../styles.css';
import ProjectList from './ProjectList.js';
import BootstrapCarousel from './BootstrapCarousel.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects:[
        {
          name:"Project 1",
          header_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR_SXjCMKCZhzFijR82Qe99ykQ1qayJI9fZdULfnRUvwA3O7rlaFQi2QeE5ek&usqp=CAc"
        },
        {
          name:"Project 2",
          header_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR_SXjCMKCZhzFijR82Qe99ykQ1qayJI9fZdULfnRUvwA3O7rlaFQi2QeE5ek&usqp=CAc"
        },
        {
          name:"Project 3",
          header_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShnXqCb1hVmRUAiGnYqywRpEbJhcX027b0ng&usqp=CAU"

        }
        ,
        {
          name:"Project 4",
          header_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShnXqCb1hVmRUAiGnYqywRpEbJhcX027b0ng&usqp=CAU"

        }
        ,
        {
          name:"Project 5",
          header_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShnXqCb1hVmRUAiGnYqywRpEbJhcX027b0ng&usqp=CAU"

        }
        ,
        {
          name:"Project 6",
          header_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShnXqCb1hVmRUAiGnYqywRpEbJhcX027b0ng&usqp=CAU"

        }
      ]
    }
  };


  render() {
    return (
      <div>
        {/* <div className="flex-container  nav-a">
          <div>SIGNUP</div>
          <div>LOG IN</div>
        </div> */}
        <div className="flex-container nav-b">
          <div>CONTACT</div>
          <div>EXPERTISE</div>
          <div>ABOUT</div>
        </div>
          <div className="titleImage">
            <div className="layer">
              <div className="titleLogo">
                <img src="../logo.jpg" alt="Girl in a jacket" width="80" height="80"/>
                <span className="titleText">ACME POLE BARNS</span>
                <span className="titleTextLower1">Custom builds and</span>
                <span className="titleTextLower2">pre-designed models</span>
                <span className="titleTextLower3">available.</span>
              </div>
            </div>
          </div>
        <div className="sumSlid">
          <div className= "summary">
            <p className = "summaryText">Let us plan, design, build your next project.</p>
            <p className = "summaryTextBody">Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
             unknown printer took a galley of type and scrambled it to make a type specimen book. It has
             survived not only five centuries, but also the leap into electronic typesetting, remaining
             essentially unchanged. </p>
          </div>
          <div className= "slider">
              <BootstrapCarousel/>
          </div>
        </div>
        <div>
          <div className= "projectText">Recent Work</div>
          <hr></hr>
          <p className= "projectPara">Our projects are made to order with the highest standards.
            We are committed to taking the time needed to design projects that meets
            meets or exceeds our clients expecations and looking great doing it.
          </p>
          <ProjectList className = "flex-container projectList"
            projects={this.state.projects}
            />
        </div>
        <div className="contact">
          <div className= "contactForm">
          <form action="https://api.staticforms.xyz/submit" method="post">
            <input type="text" name="name" placeholder="Your Name"/>
            <input type="text" name="email" placeholder="Your Email" />
            <textarea name="message"></textarea>
            <input type="text" name="honeypot" style="display:none"/>
            <input type="hidden" name="accessKey" value="ae871976-8296-4204-ab4c-c6646e3fbda3"/>
            <input type="hidden" name="subject" value="Contact us from - example.com" />
            <input type="hidden" name="replyTo" value="@"/>
            <input type="hidden" name="redirectTo" value="https://example.com/contact/success"/>
            <input type="submit" value="Submit" />
        </form>
            {/* <div className = "contactTitle">CONTACT US</div>
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
            <div className="formMessage"></div> */}
            </div>
          <div className="contactInfo">
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
    );
  }
}

export default App;
