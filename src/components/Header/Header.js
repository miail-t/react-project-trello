import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from "reactstrap"
import WelcomModal from "../WelcomModal/WelcomModal";
import * as action from "../../actions";
import { connect } from "react-redux";

function Header({ actualUser, updateUser }){
  const [isOpen, changeIsOpen] = useState(false);
  useEffect(() => {
    if (Object.keys(actualUser).length === 0) {
      changeIsOpen(true)
    } else {
      changeIsOpen(false)
    }
  },[actualUser])

  const logOff = () => {
    updateUser({});
    changeIsOpen(true)
  };
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
        <WelcomModal isOpen={isOpen} closeModal={() => changeIsOpen(false)} />
      </div>
    );
}

const mapStateToProps = state => ({
  actualUser: state.actualUser,
});

const mapDispatchToProps = {
  updateUser: action.updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);