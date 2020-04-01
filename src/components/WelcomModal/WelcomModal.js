import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as action from "../../actions";
import createId from "../../createId";

class WelcomModal extends React.Component {

  downEnter = event => {
    if (event.keyCode === 13) {
      this.signIn();
    }
  };

  signIn = () => {
    const { users } = this.props;
    let username = document.getElementById("input").value; 

    if (users) {
      const newUser = {
        id: createId(users),
        name: username
      };
      this.props.updateUser(newUser);
      this.props.addUser(newUser);
    } else {
      let user = users.map(elem => elem.name === username);
      this.props.updateUser(user);
    }

    this.props.closeModal();
  };

  render() {
    const { isOpen } = this.props;
    return (
      <div>
        <Modal isOpen={isOpen} onKeyDown={this.downEnter}>
          <ModalHeader>А че ты такой не авторизованный?</ModalHeader>
          <ModalBody>
            Добавте свое имя, пожалуйста
            <InputGroup>
              <Input id="input" placeholder="username" />
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.signIn}>
              Войти
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  actualUser: state.actualUser,
  users: state.users
});

const mapDispatchToProps = {
  addUser: action.addUser,
  updateUser: action.updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomModal);

WelcomModal.propType = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};
