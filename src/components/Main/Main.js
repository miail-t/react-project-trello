import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import "./main.css";
import Column from "../Column/Column";
import * as action from "../../actions";
import { connect } from "react-redux";

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
      comments,
      column
    } = this.props;
    console.log(column)
    let columns = column.map(elem => (
      <Column
      key={elem.name + elem.id}
      columnName={elem.name} 
      id={elem.id}
        /* key={elem.name + elem.id}
        actualUser={actualUser}
        addCard={addCard}
        editNameColumn={editNameColumn}
        deleteCard={deleteCard}
        editCard={editCard}
        addComment={addComment}
        deleteComment={deleteComment}
        editComment={editComment}
        columnName={elem.name}
       
        cards={cards}
        createCard={createCard}
        comments={comments} */
      />
    ));

    return <div className="main-row">{columns}</div>;
  }
}

const mapStateToProps = state => ({
  actualUser: state.actualUser,
  column: state.column
});

const mapDispatchToProps = {
  //addUser: action.addUser,
  // updateUser: action.updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

/* Main.propTypes = {
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
 */
