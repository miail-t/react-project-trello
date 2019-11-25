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

class WelcomModal extends React.Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen}>
          <ModalHeader>А че ты такой не авторизованный?</ModalHeader>
          <ModalBody>
            Добавте свое имя, пожалуйста
            <InputGroup>
              <Input id="input" placeholder="username" />
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.signIn}>
              Войти
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default WelcomModal;

WelcomModal.propType = {
  isOpen: PropTypes.bool.isRequired,
  signIn: PropTypes.func.isRequired
};
