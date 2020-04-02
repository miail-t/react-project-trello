import React, { useState } from "react";
import { Card, Button, Input } from "reactstrap";
import PropTypes from "prop-types";
import UserСard from "../Card/Card";
import ModalCard from "../Column/ModalCreateCard/index";
import "./Column.css";
import * as action from "../../actions";
import { connect } from "react-redux";
import * as selectors from '../../selectors'

function Column({ editColumnName, cards, actualUser, columnName, id }) {
  const [isOpenCreateCard, changeIsOpenCard] = useState(false);
  const [columnNameValue, changeColumnNameValue] = useState(columnName);

  const valueChageHandler = e => {
    changeColumnNameValue(e.target.value);
  };

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
    return null;
  });

  return (
    <div>
      <Card className="card-row">
        <Input
          className="inputColumn"
          plaintext
          onChange={valueChageHandler}
          value={columnNameValue}
          onBlur={e =>
            editColumnName({
              id: id,
              name: columnNameValue
            })
          }
        />
        {card}
        <Button
          color="primary"
          onClick={e => {
            changeIsOpenCard(!isOpenCreateCard);
          }}
        >
          Создать карточку
        </Button>
      </Card>

      <ModalCard
        //function
        changeIsOpenCard={changeIsOpenCard}
        //props
        isOpen={isOpenCreateCard}
        autor={actualUser}
        columnId={id}
        columnName={columnName}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    actualUser: selectors.getActualUser(state),
    cards: selectors.getCards(state)
  };
};

const mapDispatchToProps = {
  editColumnName: action.editColumnName
};

export default connect(mapStateToProps, mapDispatchToProps)(Column);

Column.propTypes = {
  columnName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
