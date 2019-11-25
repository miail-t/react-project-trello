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

  editCard = () => {
    this.props.editCard(
      this.props.id,
      this.state.inputName,
      this.state.inputDescription
    );
  };

  addComment = () => {
    this.props.addComment(
      this.props.actualUser,
      this.state.inputComment,
      this.props.id
    );
  };

  editControl = () => {
    if (this.props.actualUser.name === this.props.autor) {
      return (
        <Button
          color="primary"
          onClick={e => {
            this.editCard();
            this.props.changeIsOpenEditModal(this.props.isOpen);
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
    const button = this.editControl();
    const comments = this.props.comments.map(comment => {
      if (comment.idCard === this.props.id) {
        return (
          <Comment
            key={comment.id}
            id={comment.id}
            autor={comment.autor.name}
            text={comment.text}
            deleteComment={this.props.deleteComment}
            editComment={this.props.editComment}
          />
        );
      }
    });

    return (
      <div>
        <Modal isOpen={this.props.isOpen}>
          <ModalHeader
            toggle={e => {
              this.props.changeIsOpenEditModal(this.props.isOpen);
            }}
          >
            Изменить карточку
          </ModalHeader>
          <ModalBody>
            <label>
              Card name
              <Input
                id="inputCardName"
                value={this.state.inputName}
                onChange={this.onChangeHandler}
              />
            </label>

            <br />
            <label>
              Card description
              <Input
                id="inputCardDescription"
                value={this.state.inputDescription}
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
                value={this.state.inputComment}
                onChange={this.onChangeHandler}
              />
            </label>
            <Button color="primary" onClick={this.addComment}>
              Добавить коментарий
            </Button>
            {comments}
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
