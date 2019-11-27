import React from "react";
import { Button, Modal, ModalHeader, ModalBody, Input } from "reactstrap";
import PropTypes from "prop-types";
import Comment from "../Comment/index";

class ModalCard extends React.Component {
  state = {
    inputName: this.props.name,
    inputDescription: this.props.text,
    inputComment: ""
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

  editControl = () => {
    const {
      isOpen,
      changeIsOpenEditModal,
      id,
      actualUser,
      autor,
      editCard
    } = this.props;
    const { inputName, inputDescription } = this.state;

    if (actualUser.name === autor) {
      return (
        <Button
          color="primary"
          onClick={e => {
            editCard(id, inputName, inputDescription);

            changeIsOpenEditModal(isOpen);
          }}
        >
          Изменить карточку
        </Button>
      );
    } else {
      return (
        <Button
          color="danger"
          onClick={e => {
            alert("Вы не можете изменить каточку");
          }}
        >
          Изменить карточку
        </Button>
      );
    }
  };

  render() {
    const {
      editComment,
      isOpen,
      changeIsOpenEditModal,
      id,
      actualUser,
      deleteComment,
      addComment,
      comments
    } = this.props;
    const { inputName, inputDescription, inputComment } = this.state;
    const button = this.editControl();
    const commentsLocal = comments.map(comment => {
      if (comment.idCard === id) {
        return (
          <Comment
            key={comment.id}
            id={comment.id}
            autor={comment.autor.name}
            text={comment.text}
            deleteComment={deleteComment}
            editComment={editComment}
          />
        );
      }
    });

    return (
      <div>
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
            {button}
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
                addComment(actualUser, inputComment, id);
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

export default ModalCard;

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
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired
};
