import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Input } from "reactstrap";
import PropTypes from "prop-types";
import Comment from "../Comment/index";
import { connect } from "react-redux";
import * as action from "../../../actions";
import createId from "../../../createId";

function ModalCard({
  isOpen,
  id,
  name,
  text,
  autor,
  actualUser,
  comments,
  changeIsOpenEditModal,
  editCard,
  addComment
}) {
  const [inputName, changeInputName] = useState(name);
  const [inputDescription, changeInputDescription] = useState(text);
  const [inputComment, changeInputComment] = useState("");

  const downEnter = event => {
    if (event.keyCode === 27) {
      changeIsOpenEditModal(!isOpen);
    }
  };

  const removeValueInput = () => {
    changeInputComment("");
  };

  const edit = () => {
    // edit card
    if (actualUser.name === autor) {
      editCard(id, inputName, inputDescription);
       changeIsOpenEditModal(!isOpen); 
    } else {
      alert("Вы не можете изменить каточку");
    }
  };

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
    return null;
  });

  return (
    <div onKeyDown={downEnter}>
      <Modal isOpen={isOpen}>
        <ModalHeader
          toggle={e => {
            changeIsOpenEditModal(!isOpen);
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
              onChange={e => changeInputName(e.target.value)}
            />
          </label>

          <br />
          <label>
            Card description
            <Input
              id="inputCardDescription"
              value={inputDescription}
              onChange={e => changeInputDescription(e.target.value)}
            />
          </label>
          <br />

          <Button
            color={actualUser.name === autor ? "primary" : "danger"}
            onClick={e => {
              edit(); // edit card
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
              onChange={e => changeInputComment(e.target.value)}
            />
          </label>
          <Button
            color="primary"
            onClick={() => {
              addComment({
                id: createId(comments),
                autor: actualUser,
                text: inputComment,
                idCard: id
              });
              removeValueInput();
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
