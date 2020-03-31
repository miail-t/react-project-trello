import React, { Component } from "react";
import { Card, Button, Input } from "reactstrap";
import PropTypes from "prop-types";
import UserСard from "../Card/Card";
import ModalCard from "../Column/ModalCreateCard/index";
import "./Column.css";
import * as action from "../../actions";
import { connect } from "react-redux";

class Column extends Component {
  state = {
    btnDropleft: false,
    isOpenCreateCard: false,
    columnNameValue: this.props.columnName
  };

  changeIsOpenCreateCard = state => {
    this.setState({
      isOpenCreateCard: !state
    });
  };

  valueChageHandler = e => {
    this.setState({
      columnNameValue: e.target.value
    });
  };

  editNameColumn = () => {
    const newColumn = {
      id: this.props.id,
      name: this.state.columnNameValue
    };
    this.props.editColumnName(newColumn);
  };

  render() {
    const {
      /*  id,
      cards,
      columnName,
      actualUser,
      comments,
      deleteCard,
      editCard,
      addComment,
      deleteComment,
      editComment,
      addCard,
      editNameColumn */
      id,
      cards,
      columnName,
      column,
      actualUser
    } = this.props;

    const { columnNameValue, isOpenCreateCard } = this.state;

    let card = cards.map(elem => {
      if (id === elem.columnId) {
        return (
          <UserСard
            key={elem.id + elem.name}
            //props
            id={elem.id}
            name={elem.name}
            description={elem.description}
            columnName={columnName}
            autor={elem.autor}
            /*  actualUser={actualUser}
            comments={comments}
            //function
            deleteCard={deleteCard}
            editCard={editCard}
            addComment={addComment}
            deleteComment={deleteComment}
            editComment={editComment} */
          />
        );
      }
    });

    return (
      <div>
        <Card className="card-row">
          <Input
            className="inputColumn"
            plaintext
            onChange={this.valueChageHandler}
            value={columnNameValue}
            onBlur={e => this.editNameColumn(column.id, columnNameValue)}
          />
          {card}
          <Button
            color="primary"
            onClick={e => {
              this.changeIsOpenCreateCard(isOpenCreateCard);
            }}
          >
            Создать карточку
          </Button>
        </Card>
        
        <ModalCard
          //function
          changeIsOpenCreateCard={this.changeIsOpenCreateCard}
          //props
          isOpen={isOpenCreateCard}
          autor={actualUser}
          columnId={id}
          columnName={columnName}
        /> 
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
  editColumnName: action.editColumnName
};

export default connect(mapStateToProps, mapDispatchToProps)(Column);

{
  /* Column.propTypes = {
  addCard: PropTypes.func.isRequired,
  editNameColumn: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,

  actualUser: PropTypes.object.isRequired,
  columnName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  cards: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired
};
 */
}
