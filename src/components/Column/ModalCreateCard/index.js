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
import * as action from "../../../actions";
import { connect } from "react-redux";

class ModalCard extends React.Component {
  addCard = (autor, columnId, columnName) => {
    const { cards } = this.state;
    const card = {
      id: this.createId(cards),
      name: document.getElementById("inputCardName").value,
      text: document.getElementById("inputCardDescription").value,
      autor,
      columnId,
      columnName:"sda"
    };
    this.props.addCard(card);

   /*  const cardsLocal = cards.concat(card);
    localStorage.setItem("cards", JSON.stringify(cardsLocal));
    this.setState({
      cards: cardsLocal
    }); */
  };

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
                //changeIsOpenCreateCard(isOpen);
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
  actualUser: state.actualUser,
  column: state.column,
  cards: state.cards
});

const mapDispatchToProps = {
  editColumnName: action.editColumnName,
  addCard: action.addCard
  //addUser: action.addUser,
  // updateUser: action.updateUser
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
