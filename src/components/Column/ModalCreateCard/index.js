import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import PropTypes from "prop-types";

class ModalCard extends React.Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen}>
          <ModalHeader>Создайте карту</ModalHeader>
          <ModalBody>
            <label>
              Card name
              <Input id="inputCardName" placeholder="Card name" />
            </label>

            <br />
            <label>
              Card description
              <Input id="inputCardDescription" placeholder="Description card" />
            </label>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={e => {
                this.props.addCard(
                  this.props.autor.name,
                  this.props.columnId,
                  this.props.columnName
                );
                this.props.changeIsOpenCreateCard(this.props.isOpen);
              }}
            >
              Создать карточку
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalCard;

ModalCard.propType = {
  isOpen: PropTypes.bool.isRequired,
  autor: PropTypes.object.isRequired,
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,

  changeIsOpenCreateCard: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired
};
