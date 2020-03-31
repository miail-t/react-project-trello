import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import "./main.css";
import Column from "../Column/Column";
import { connect } from "react-redux";

class Main extends React.Component {
  render() {
    const { column } = this.props;
    console.log(column);
    let columns = column.map(elem => (
      <Column key={elem.name + elem.id} columnName={elem.name} id={elem.id} />
    ));

    return <div className="main-row">{columns}</div>;
  }
}

const mapStateToProps = state => ({
  column: state.column
});

const mapDispatchToProps = {};

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
