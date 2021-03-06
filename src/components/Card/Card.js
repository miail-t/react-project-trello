import React, { useState } from "react";
import { Button, ToastBody, ToastHeader, Toast } from "reactstrap";
import PropTypes from "prop-types";
import "./Card.css";
import EditModal from "./EditModal/index";
import { connect } from "react-redux";
import * as action from "../../actions";

function UserСard({
  autor,
  id,
  actualUser,
  columnName,
  description,
  name,
  deleteCard
}) {
  const [isOpenEditModal, changeIsOpenEditModal] = useState(false);

  const Delete = () => {
    if (autor === actualUser.name) {
      deleteCard(id);
    } else {
      alert("Вы не можети удалить чужую карточку");
    }
  };

  return (
    <div className="card">
      <Toast className="toast">
        <ToastHeader
          toggle={() => {
            Delete();
          }}
        >
          {name}
        </ToastHeader>
        <ToastBody>Description: {description}</ToastBody>
        <div>Column: {columnName}</div>
        <br />
        <div>Autor: {autor}</div>
        <br />
        <Button
          color="primary"
          onClick={e => {
            changeIsOpenEditModal(!isOpenEditModal);
          }}
        >
          Изменить
        </Button>{" "}
        <EditModal
          isOpen={isOpenEditModal}
          id={id}
          name={name}
          text={description}
          autor={autor}
          changeIsOpenEditModal={changeIsOpenEditModal}
        />
      </Toast>
    </div>
  );
}

const mapStateToProps = state => ({
  actualUser: state.actualUser,
  column: state.column
});

const mapDispatchToProps = {
  deleteCard: action.deleteCard
};

export default connect(mapStateToProps, mapDispatchToProps)(UserСard);

UserСard.propType = {
  actualUser: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  columnName: PropTypes.string.isRequired,
  autor: PropTypes.object.isRequired,

  deleteCard: PropTypes.func.isRequired
};
