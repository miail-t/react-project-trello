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
    const {
      addCard,
      autor,
      columnId,
      columnName,
      changeIsOpenCreateCard,
      isOpen
    } = this.props;
    return (
      <div>
        <Modal isOpen={isOpen}>
          <ModalHeader toggle={e => changeIsOpenCreateCard(isOpen)}>
            Создайте карту
          </ModalHeader>
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
                addCard(autor.name, columnId, columnName);
                changeIsOpenCreateCard(isOpen);
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
