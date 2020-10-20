import React, {createRef} from 'react';
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProjectList from './ProjectList.js';
import BootstrapCarousel from './BootstrapCarousel.js';
import Form from './Form.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.formNavContact = createRef();
    this.formNavExpertise = createRef();
    this.formNavAbout = createRef();
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


  scrollThisContact(){
    this.formNavContact.current.scrollIntoView({ behavior: 'smooth',
     inline: "nearest"
    });
  }

  scrollThisExpertise(){
    this.formNavExpertise.current.scrollIntoView({ behavior: 'smooth',
     inline: "nearest"
    });
  }

  scrollThisAbout(){
    this.formNavAbout.current.scrollIntoView({ behavior: 'smooth',
     inline: "nearest"
    });
  }

  render() {
    return (
      <section>
        <section class= "container-fluid px-0" className="navTop" >
          <div  class="row navbar" className="navWrapper" >
            <div
              id="contact" className="navs"
              style={this.styleC()}
              onClick={()=>this.scrollThisContact()}
              onMouseEnter={event => this.handleMouseEnter(event, event.target.id)}
              onMouseLeave={event => this.handleMouseLeave(event, event.target.id)}
              >CONTACT
              </div>
            <div
              id = "expertise" className="navs"
              style={this.styleE()}
              onClick={()=>this.scrollThisExpertise()}
              onMouseEnter={event => this.handleMouseEnter(event, event.target.id)}
              onMouseLeave={event => this.handleMouseLeave(event, event.target.id)}
              >EXPERTISE
           </div>
            <div
              id = "about" className="navs"
              style={this.styleA()}
              onClick={()=>this.scrollThisAbout()}
              onMouseEnter={event => this.handleMouseEnter(event, event.target.id)}
              onMouseLeave={event => this.handleMouseLeave(event, event.target.id)}
             >ABOUT
              </div>
          </div>
        </section>
        <section class= "container-fluid px-0" ref={this.formNavAbout} id="aboutTop" >
          <div  class="row align-items-center" >
            <div class="col-md-12">
            <div id="headingGroup" class="text-center d-sm-none">
              <span className = "popup">ACME POLE BARNS</span>
              <img  className = "logo" src="../logo.jpg" alt="logo" width="80" height="80"/>
            </div>
            <div className="titleLogo" class="container-title px-0">
              <div className="layer">
                <img className="imageBorder" src="../barn.jpg" class="img-fluid" />
              <div class="d-none d-sm-block">
                <span className="titleText" id="top" >ACME POLE BARNS</span>
                <img  className = "logo2" src="../logo.jpg" alt="logo" width="80" height="80"/>
              </div>
              <span className="titleText lower1">Custom builds and</span>
              <span className="titleText lower2">pre-designed models</span>
              <span className="titleText lower3">available.</span>
              </div>
            </div>
          </div>
          </div>
        </section>
        <section class="container-fluid px-0" className="sumSlid">
          <div class="row align-items-center content">
            <div className= "summary" class="col-md-6" >
              <p className = "summaryText">Let us plan, design, build your next project.</p>
              <p className = "summaryTextBody">Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. </p>
            </div>
            <div className= "slider" class="col-md-6">
                <BootstrapCarousel/>
            </div>
          </div>
        </section>
        <section class= "container-fluid px-0" className="recpro">
          <div class="row align-items-center content">
            <div class="col-md-12">
              <div className="recentWork" ref={this.formNavExpertise} >
                <div className= "recentText" id="page-2">Recent Work</div>
                <hr></hr>
                <p className= "recentPara">Our projects are made to order with the highest standards.
                  We are committed to taking the time needed to design projects that meets
                  meets or exceeds our clients expecations and looking great doing it.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class= "container-fluid px-0">
          <div class="row align-items-center content">
            <ProjectList
              projects={this.state.projects}/>
          </div>
        </section>
        <section class= "container-fluid px-0" ref={this.formNavContact}>
          <Form/>
        </section>
      </section>
    );
  }
}

export default App;
