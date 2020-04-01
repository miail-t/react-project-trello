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

  render() {
    const {
      id,
      cards,
      columnName,
      actualUser,
      editColumnName
    } = this.props;

    const { columnNameValue, isOpenCreateCard } = this.state;

    let card = cards.map(elem => {
      if (id === elem.columnId) {
        return (
          <UserСard
            key={elem.id + elem.name}
            id={elem.id}
            name={elem.name}
            description={elem.description}
            columnName={columnName}
            autor={elem.autor}
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
            onBlur={e =>
              editColumnName({
                id: this.props.id,
                name: this.state.columnNameValue
              })
            }
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
  cards: state.cards
});

const mapDispatchToProps = {
  editColumnName: action.editColumnName
};

export default connect(mapStateToProps, mapDispatchToProps)(Column);

Column.propTypes = {
  columnName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
