import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
NavLink, Collapse, Jumbotron } from "reactstrap";
import logo from '../../static/logo.png';
import config from "../../data/SiteConfig";
import "./index.css";


export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath.indexOf("posts")) {
      title = "Article";
    } else if (currentPath.indexOf("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.indexOf("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/"> <img src={logo} alt="zackery.me" /> </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/zgriesinger">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/zackery-griesinger-718b55116/">LinkedIn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="mailto:zgriesinger@gmail.com?Subject=From%20Zackery.me" target="_top">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        {children()}

        <Jumbotron style={{background: "white", color: 'black', height: "20px"}}>
          <h6>Copyright © Zackery Griesinger, 2018 </h6>
        </Jumbotron>
      </div>
    );
  }
}
