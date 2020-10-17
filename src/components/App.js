import React from 'react';
import '../styles.css';
import ProjectList from './ProjectList.js';
import BootstrapCarousel from './BootstrapCarousel.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style1: {
        color: "black",
        background: "white",
        fontSize: "18px",
        fontWeight: "600"
    },
    style2: {
      color: "white",
      background: "rgb(64, 64, 66)",
    },
      contactHovering: false,
      aboutHovering: false,
      expertiseHovering: false,
      idz:"",
      projects:[
        // {
        //   name:"Project 1",
        //   header_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR_SXjCMKCZhzFijR82Qe99ykQ1qayJI9fZdULfnRUvwA3O7rlaFQi2QeE5ek&usqp=CAc"
        // },
        // {
        //   name:"Project 2",
        //   header_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR_SXjCMKCZhzFijR82Qe99ykQ1qayJI9fZdULfnRUvwA3O7rlaFQi2QeE5ek&usqp=CAc"
        // },
        // {
        //   name:"Project 3",
        //   header_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShnXqCb1hVmRUAiGnYqywRpEbJhcX027b0ng&usqp=CAU"

        // }
        // ,
        // {
        //   name:"Project 4",
        //   header_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShnXqCb1hVmRUAiGnYqywRpEbJhcX027b0ng&usqp=CAU"

        // }
        // ,
        // {
        //   name:"Project 5",
        //   header_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShnXqCb1hVmRUAiGnYqywRpEbJhcX027b0ng&usqp=CAU"

        // }
        // ,
        // {
        //   name:"Project 6",
        //   header_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShnXqCb1hVmRUAiGnYqywRpEbJhcX027b0ng&usqp=CAU"

        // }
      ]
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  };

  handleToggle(event, id){
    this.setState( {[`${id}Hovering`]:!this.state[`${id}Hovering`]});
    this.setState({idz : id});
  }

  handleMouseEnter(event, id){
    this.handleToggle(event, id)
  }

  handleMouseLeave(event, id){
    this.handleToggle(event, id)
  }

  styleA(){
    return this.state.aboutHovering ? this.state.style1 : this.state.style2
  }

  styleC(){
    return this.state.contactHovering ? this.state.style1 : this.state.style2
  }
  styleE(){
    return this.state.expertiseHovering ? this.state.style1 : this.state.style2
  }

  render() {
    return (
      <div>
        <div className="flex-container nav-b">
          <div
            id="contact"
            style={this.styleC()}
            onMouseEnter={event => this.handleMouseEnter(event, event.target.id)}
            onMouseLeave={event => this.handleMouseLeave(event, event.target.id)}>CONTACT</div>
          <div
            id = "expertise"
            style={this.styleE()}
            onMouseEnter={event => this.handleMouseEnter(event, event.target.id)}
            onMouseLeave={event => this.handleMouseLeave(event, event.target.id)}>EXPERTISE</div>
          <div
             id = "about"
             style={this.styleA()}
             onMouseEnter={event => this.handleMouseEnter(event, event.target.id)}
             onMouseLeave={event => this.handleMouseLeave(event, event.target.id)}>ABOUT</div>
        </div>
        <section class= "container-fluid px-0">
          <div  class="row align-items-center">
              <div id="headingGroup" class="text-center d-sm-none">
                <span className = "popup">ACME POLE BARNS</span>
              </div>
            <div className="titleLogo" class="container-title">
              <div className="layer">
              <img className="imageBorder" src="../barn.jpg" class="img-fluid" />
              <img  className = "logo" src="../logo.jpg" alt="logo" width="80" height="80"/>
              <div class="d-none d-sm-block">
              <span className="titleText" >ACME POLE BARNS</span>
              </div>
              <span className="titleTextLower1">Custom builds and</span>
              <span className="titleTextLower2">pre-designed models</span>
              <span className="titleTextLower3">available.</span>
            </div>
            </div>
            </div>
        </section>
        <div className="sumSlid">
          <div className= "summary" class="col-md-6">
            <p className = "summaryText">Let us plan, design, build your next project.</p>
            <p className = "summaryTextBody">Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
             unknown printer took a galley of type and scrambled it to make a type specimen book. It has
             survived not only five centuries, but also the leap into electronic typesetting, remaining
             essentially unchanged. </p>
          </div>
          <div className= "slider" class="col-lg-6">
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
