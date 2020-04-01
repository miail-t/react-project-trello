import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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

export default connect(mapStateToProps)(Main);
