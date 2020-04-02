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
import * as selectors from "../../selectors"

function WelcomModal({ isOpen, closeModal, users, updateUser, addUser }) {
  const downEnter = event => {
    if (event.keyCode === 13) {
      signIn();
    }
  };

  const signIn = () => {
    let username = document.getElementById("input").value;

    if (users) {
      const newUser = {
        id: createId(users),
        name: username
      };
      updateUser(newUser);
      addUser(newUser);
    } else {
      let user = users.map(elem => elem.name === username);
      updateUser(user);
    }

    closeModal();
  };

  return (
    <div>
      <Modal isOpen={isOpen} onKeyDown={downEnter}>
        <ModalHeader>А че ты такой не авторизованный?</ModalHeader>
        <ModalBody>
          Добавте свое имя, пожалуйста
          <InputGroup>
            <Input id="input" placeholder="username" />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={signIn}>
            Войти
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  return { users: selectors.getUsers(state) };
};

const mapDispatchToProps = {
  addUser: action.addUser,
  updateUser: action.updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomModal);

WelcomModal.propType = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};
