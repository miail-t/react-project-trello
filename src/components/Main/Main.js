import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import Column from "../Column/Column";
import * as selectors from "../../selectors";
import { connect } from "react-redux";

function Main({ column }) {
  let columns = column.map(elem => (
    <Column key={elem.name + elem.id} columnName={elem.name} id={elem.id} />
  ));

  return <div className="main-row">{columns}</div>;
}

const mapStateToProps = state => {
  return { column: selectors.getColumns(state) };
};

export default connect(mapStateToProps)(Main);
