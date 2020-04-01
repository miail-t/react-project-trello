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
import WelcomModal from "../WelcomModal/WelcomModal";
import * as action from "../../actions";
import { connect } from "react-redux";

class Header extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    if (Object.keys(this.props.actualUser).length === 0) {
      this.setState({
        isOpen: true
      });
    } else {
      this.setState({
        isOpen: false
      });
    }
  }

  logOff = () => {
    this.props.updateUser({});
    this.setState({
      isOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    const { actualUser } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">react-Trello</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <span>{actualUser.name}</span>
                <Button color="primary" onClick={this.logOff}>
                  Выйти
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <WelcomModal isOpen={isOpen} closeModal={this.closeModal} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  actualUser: state.actualUser
});

const mapDispatchToProps = {
  addUser: action.addUser,
  updateUser: action.updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
