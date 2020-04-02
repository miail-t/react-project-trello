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
import createId from "../../../createId";
import * as action from "../../../actions";
import { connect } from "react-redux";
import * as selectors from "../../../selectors";

function ModalCard({
  isOpen,
  changeIsOpenCard,
  cards,
  autor,
  columnId,
  columnName,
  addCard
}) {
  const downEnter = event => {
    if (event.keyCode === 13) {
      createCard();
    }
    if (event.keyCode === 27) {
      changeIsOpenCard(!isOpen);
    }
  };

  const createCard = () => {
    addCard({
      id: createId(cards),
      name: document.getElementById("inputCardName").value,
      description: document.getElementById("inputCardDescription").value,
      autor: autor.name,
      columnId,
      columnName
    });
    changeIsOpenCard(!isOpen);
  };
  ///console.log(selectors.getCards());
  return (
    <div onKeyDown={downEnter}>
      <Modal isOpen={isOpen}>
        <ModalHeader toggle={() => changeIsOpenCard(!isOpen)}>
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
            onClick={() => {
              createCard();
            }}
          >
            Создать карточку
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  return { cards: selectors.getCards(state) };
};

const mapDispatchToProps = {
  addCard: action.addCard
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCard);

ModalCard.propType = {
  isOpen: PropTypes.bool.isRequired,
  autor: PropTypes.object.isRequired,
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  changeIsOpenCard: PropTypes.func.isRequired
};
