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
import WelcomModal from "../WelcomModal/WelcomModal";

class Header extends Component {
  render() {
    const { actualUser, logOff, isOpen, signIn } = this.props;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">react-Trello</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <span>{actualUser.name}</span>
                <Button color="primary" onClick={logOff}>
                  Выйти
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <WelcomModal isOpen={isOpen} signIn={signIn} />
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
