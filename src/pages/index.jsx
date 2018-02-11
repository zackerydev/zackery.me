import React from "react";
import Helmet from "react-helmet";
import { Jumbotron,Button, ButtonGroup, Card, CardText, CardTitle, CardBody, CardSubtitle, CardFooter } from 'reactstrap';
import './index.css';
import avatar from '../../static/avatar.png';
import firebase from '../../static/firebase.svg';
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";


class Index extends React.Component {
  render() {
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO  />
        <Jumbotron>
          <h1> Zackery Griesinger </h1>
          <p> Software developer and technology enthusiast with an emphasis in React, Node, and JavaScript </p>
          <img className="avatar" src={avatar} alt="avatar" />
          <Button style={{width: "400px", marginTop: "25px"}} className="resume" outline> <a href="https://docs.google.com/document/d/1D5TlYWNCt-75Jz28ap16toxk36iqw00PRaBQ-hV9CLA/export?format=pdf"> Resume </a> </Button>
        </Jumbotron>
        <div className="technologies">
          <h2 className="section-header"> Technologies I Love </h2>
          <div className="grid">    
            <a href="https://reactjs.org">  
              <Card className="c1">
                <CardBody>
                  <i className="devicon-react-original react" />

                  <CardTitle>React.js</CardTitle>
                  <CardText>A declarative, component based JavaScript framework for building user interfaces</CardText>
                </CardBody>
              </Card>
            </a>
            <a href="https://nodejs.org">  
              <Card className="c2">
                <CardBody>
                  <i className="devicon-nodejs-plain node" />
                  <CardTitle>Node.js</CardTitle>
                  <CardText>Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side</CardText>
                </CardBody>
              </Card>
            </a>
            <a href="https://python.org">  
              <Card className="c3">
                <CardBody>
                  <i className="devicon-python-plain colored python" />
                  <CardTitle>Python</CardTitle>
                  <CardText>Python is an interpreted high-level programming language for general-purpose programming.</CardText>
                </CardBody>
              </Card>
            </a>
          </div>
        </div>
        <div className="projects">
          <Jumbotron>
            <h2 className="section-header"> Things I've Built </h2>
            <Card className="project-card">
              <CardBody>
                <CardTitle>Griesers.com</CardTitle>
                <CardText>Website built to handle a competition between friends and family. Users can guess the winners of the NCAA bowl
                games and compete with each other to see who can get the most points.
                </CardText>
                <div className="built-with">
                  <h6>Built with</h6>
                  <div className="icon-container">
                    <div className="icon-grid-4">
                      <div className="i1">
                        <i className="fab fa-react react" />
                        <div>React.js</div>
                      </div>
                      <div className="i2">
                        <i className="fab fa-css3 css3" /> 
                        <div>CSS3</div>
                      </div>
                      <div className="i3">
                        <img className="firebase" src={firebase} alt="firebase" />
                        <div>Firebase</div>
                      </div>
                      <div className="i4">
                        <i className="fab fa-html5 html5" /> 
                        <div>HTML5</div>
                      </div>
                    </div>
                    
                  </div> 
                </div>
              </CardBody>
              <CardFooter> 
                <ButtonGroup> 
                  <Button> 
                    <a href="https://griesers.com">
                      <i className="fas fa-link source" /> 
                        Link 
                    </a>
                  </Button> 
                  <Button>
                    <a href="https://github.com/zgriesinger/griesers">
                      <i className="fas fa-code source" /> Source 
                    </a>
                  </Button> 
                </ButtonGroup> 
              </CardFooter>
            </Card>
            <Card className="project-card">
              <CardBody>
                <CardTitle>Yet Another Football Database</CardTitle>
                <CardText>Website built to host and display National Football League stats from 2010 to 2016. Displaying 
                aggregated stats by year for every team and every player, as well as allowing users to generate their own "what-if"
                playoff pictures.
                </CardText>
                <div className="built-with">
                  <h6>Built with</h6>
                  <div className="icon-container">
                    <div className="icon-grid-4">
                      <div className="i1">
                        <i className="devicon-nodejs-plain node" />
                        <div>Node.js</div>
                      </div>
                      <div className="i2">
                        <i className="devicon-express-original colored express" />
                        <div>Express.js</div>
                      </div>
                      <div className="i3">
                        <i className="fab fa-react react" />
                        <div>React.js</div>
                      </div>
                      <div className="i4">
                        <i className="devicon-mysql-plain colored mysql" />
                        <div>MySQL</div>
                      </div>
                    </div>
                  </div> 
                </div>
              </CardBody>
              <CardFooter> 
                <ButtonGroup> 
                  <Button>
                    <a href="https://github.com/zgriesinger/yafdb">
                      <i className="fas fa-code source" /> Source 
                    </a>
                  </Button> 
                </ButtonGroup> 
              </CardFooter>
            </Card>
            <Card className="project-card">
              <CardBody>
                <CardTitle>PyList</CardTitle>
                <CardText>Python program written to transfer playlists from Spotify to Google Play Music All Access, using the
                Spotify and Google Play Music Python APIs
                </CardText>
                <div className="built-with">
                  <h6>Built with</h6>
                  <div className="icon-container">
                        <i className="devicon-python-plain colored python" />
                        <div>Python</div>
                  </div> 
                </div>
              </CardBody>
              <CardFooter> 
                <ButtonGroup> 
                  <Button>
                    <a href="https://github.com/zgriesinger/pylist">
                      <i className="fas fa-code source" /> Source 
                    </a>
                  </Button> 
                </ButtonGroup> 
              </CardFooter>
            </Card>
          </Jumbotron>
        </div>
        
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       limit: 2000
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           excerpt
//           timeToRead
//           frontmatter {
//             title
//             tags
//             cover
//             date
//           }
//         }
//       }
//     }
//   }
// `;
