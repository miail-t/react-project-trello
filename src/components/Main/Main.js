import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import "./main.css";
import Column from "../Column/Column";

class Main extends React.Component {
  render() {
    const {
      actualUser,
      addCard,
      editNameColumn,
      deleteCard,
      editCard,
      addComment,
      deleteComment,
      editComment,
      cards,
      createCard,
      comments
    } = this.props;

    let column = this.props.column.map(elem => (
      <Column
        key={elem.name + elem.id}
        actualUser={actualUser}
        addCard={addCard}
        editNameColumn={editNameColumn}
        deleteCard={deleteCard}
        editCard={editCard}
        addComment={addComment}
        deleteComment={deleteComment}
        editComment={editComment}
        columnName={elem.name}
        id={elem.id}
        cards={cards}
        createCard={createCard}
        comments={comments}
      />
    ));

    return <div className="main-row">{column}</div>;
  }
}

export default Main;

Main.propTypes = {
  addCard: PropTypes.func.isRequired,
  editNameColumn: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,

  actualUser: PropTypes.object.isRequired,
  column: PropTypes.array.isRequired,
  cards: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired
};
