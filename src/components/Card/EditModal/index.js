import React from "react";
import { Button, Modal, ModalHeader, ModalBody, Input } from "reactstrap";
import PropTypes from "prop-types";
import Comment from "../Comment/index";
import { connect } from "react-redux";
import * as action from "../../../actions";
import createId from "../../../createId";

class ModalCard extends React.Component {
  state = {
    inputName: this.props.name,
    inputDescription: this.props.text,
    inputComment: ""
  };

  downEnter = event => {
    const { isOpen, changeIsOpenEditModal } = this.props;
    if (event.keyCode === 27) {
      changeIsOpenEditModal(isOpen);
    }
  };

  onChangeHandler = e => {
    if (e.target.id === "inputCardName") {
      this.setState({ inputName: e.target.value });
    }
    if (e.target.id === "inputCardDescription") {
      this.setState({ inputDescription: e.target.value });
    }
    if (e.target.id === "inputComment") {
      this.setState({ inputComment: e.target.value });
    }
  };

  removeValueInput = () => {
    this.setState({
      inputComment: ""
    });
  };

  editCard = () => {
    const {
      id,
      autor,
      editCard,
      actualUser,
      isOpen,
      changeIsOpenEditModal
    } = this.props;
    const { inputName, inputDescription } = this.state;
    if (actualUser.name === autor) {
      editCard(id, inputName, inputDescription);
      changeIsOpenEditModal(isOpen);
    } else {
      alert("Вы не можете изменить каточку");
    }
  };

  render() {
    const {
      isOpen,
      changeIsOpenEditModal,
      id,
      autor,
      comments,
      addComment,
      actualUser
    } = this.props;
    const { inputName, inputDescription, inputComment } = this.state;
    const commentsLocal = comments.map(comment => {
      if (comment.idCard === id) {
        return (
          <Comment
            key={comment.id}
            id={comment.id}
            autor={comment.autor.name}
            text={comment.text}
          />
        );
      }
    });

    return (
      <div onKeyDown={this.downEnter}>
        <Modal isOpen={isOpen}>
          <ModalHeader
            toggle={e => {
              changeIsOpenEditModal(isOpen);
            }}
          >
            Изменить карточку
          </ModalHeader>
          <ModalBody>
            <label>
              Card name
              <Input
                id="inputCardName"
                value={inputName}
                onChange={this.onChangeHandler}
              />
            </label>

            <br />
            <label>
              Card description
              <Input
                id="inputCardDescription"
                value={inputDescription}
                onChange={this.onChangeHandler}
              />
            </label>
            <br />

            <Button
              color={actualUser.name === autor ? "primary" : "danger"}
              onClick={e => {
                this.editCard();
              }}
            >
              Изменить карточку
            </Button>
          </ModalBody>

          <ModalHeader>Коментарии:</ModalHeader>
          <ModalBody>
            <label>
              Коментарий
              <Input
                id="inputComment"
                value={inputComment}
                onChange={this.onChangeHandler}
              />
            </label>
            <Button
              color="primary"
              onClick={() => {
                addComment({
                  id: createId(this.props.comments),
                  autor: this.props.actualUser,
                  text: inputComment,
                  idCard: id
                });
                this.removeValueInput();
              }}
            >
              Добавить коментарий
            </Button>
            {commentsLocal}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  actualUser: state.actualUser,
  comments: state.comments
});

const mapDispatchToProps = {
  editCard: action.editCard,
  addComment: action.addComment
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCard);

ModalCard.propType = {
  isOpen: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  autor: PropTypes.object.isRequired,
  actualUser: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,

  changeIsOpenEditModal: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired
};
