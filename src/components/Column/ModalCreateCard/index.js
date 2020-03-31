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

class ModalCard extends React.Component {
  addCard = (autor, columnId, columnName) => {
    const card = {
      id: createId(this.props.cards),
      name: document.getElementById("inputCardName").value,
      description: document.getElementById("inputCardDescription").value,
      autor,
      columnId,
      columnName
    };
    this.props.addCard(card);
  };

  render() {
    const {
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
                this.addCard(autor.name, columnId, columnName);
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

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = {
  addCard: action.addCard
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCard);

/* ModalCard.propType = {
  isOpen: PropTypes.bool.isRequired,
  autor: PropTypes.object.isRequired,
  columnId: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,

  changeIsOpenCreateCard: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired
};
 */
