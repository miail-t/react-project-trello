import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import "./main.css";
import Column from "../Column/Column";

class Main extends React.Component {
  render() {
    let column = this.props.column.map(elem => (
      <Column
        key={elem.name + elem.id}
        actualUser={this.props.actualUser}
        addCard={this.props.addCard}
        editNameColumn={this.props.editNameColumn}
        deleteCard={this.props.deleteCard}
        editCard={this.props.editCard}
        addComment={this.props.addComment}
        deleteComment={this.props.deleteComment}
        editComment={this.props.editComment}
        columnName={elem.name}
        id={elem.id}
        cards={this.props.cards}
        createCard={this.props.createCard}
        comments={this.props.comments}
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
