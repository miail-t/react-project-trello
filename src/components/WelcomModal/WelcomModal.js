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
    const { isOpen, signIn } = this.props;
    return (
      <div>
        <Modal isOpen={isOpen}>
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
}

export default WelcomModal;

WelcomModal.propType = {
  isOpen: PropTypes.bool.isRequired,
  signIn: PropTypes.func.isRequired
};
