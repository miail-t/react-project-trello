import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from "reactstrap";
import PropTypes from "prop-types";
import WelcomModal from "../Modal/modal";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">react-Trello</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <span>{this.props.actualUser.name}</span>

                <Button color="primary" onClick={this.props.logOff}>
                  Выйти
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <WelcomModal isOpen={this.props.isOpen} signIn={this.props.signIn} />
      </div>
    );
  }
}

export default Header;

Header.propTypes = {
  actualUser: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  signIn: PropTypes.func.isRequired,
  logOff: PropTypes.func.isRequired
};
