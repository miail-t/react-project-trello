import React, { Component } from "react";
import { Button, ToastBody, ToastHeader, Toast } from "reactstrap";
import PropTypes from "prop-types";
import "./Card.css";
import EditModal from "./EditModal/index";

class UserСard extends Component {
  state = {
    isOpenEditModal: false
  };

  changeIsOpenEditModal = state => {
    this.setState({
      isOpenEditModal: !state
    });
  };

  render() {
    const {
      id,
      name,
      columnName,
      autor,
      text,
      actualUser,
      comments,
      editCard,
      addComment,
      deleteComment,
      editComment,
      deleteCard
    } = this.props;

    const { isOpenEditModal } = this.state;

    return (
      <div className="card">
        <Toast>
          <ToastHeader
            toggle={() => {
              deleteCard(id, autor);
            }}
          >
            {name}
          </ToastHeader>
          <ToastBody>Description: {text}</ToastBody>
          <div>Column: {columnName}</div>
          <br />
          <div>Autor: {autor}</div>
          <br />
          <Button
            color="primary"
            onClick={e => {
              this.changeIsOpenEditModal(isOpenEditModal);
            }}
          >
            Изменить
          </Button>
        </Toast>

        <EditModal
          isOpen={isOpenEditModal}
          id={id}
          name={name}
          text={text}
          autor={autor}
          actualUser={actualUser}
          comments={comments}
          changeIsOpenEditModal={this.changeIsOpenEditModal}
          editCard={editCard}
          addComment={addComment}
          deleteComment={deleteComment}
          editComment={editComment}
        />
      </div>
    );
  }
}

export default UserСard;

UserСard.propType = {
  actualUser: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  columnName: PropTypes.string.isRequired,
  autor: PropTypes.object.isRequired,

  deleteCard: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired
};
