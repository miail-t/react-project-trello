import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import * as action from "./actions";
import { connect } from "react-redux";

/* const columnsDefault = [
  { id: 1, name: "TODO" },
  { id: 2, name: "In Progress" },
  { id: 3, name: "Testing" },
  { id: 4, name: "Done" }
]; */

class App extends Component {
 /*  state = {
    actualUser: {},
    users: [],
    column: [],
    cards: [],
    comments: [],
    isOpen: false
  };

  componentDidMount() {
    if (!localStorage.getItem("actualUser")) {
      this.setState({
        isOpen: true
      });
    } else {
      this.setState({
        actualUser: JSON.parse(localStorage.getItem("actualUser"))
      });
    }
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", []);
    } else {
      this.setState({
        user: JSON.parse(localStorage.getItem("users"))
      });
    }

    if (!localStorage.getItem("column")) {
      localStorage.setItem("column", JSON.stringify(columnsDefault));
      this.setState({
        column: JSON.parse(localStorage.getItem("column"))
      });
    } else {
      this.setState({
        column: JSON.parse(localStorage.getItem("column"))
      });
    }

    if (!localStorage.getItem("cards")) {
      localStorage.setItem("cards", []);
    } else {
      this.setState({
        cards: JSON.parse(localStorage.getItem("cards"))
      });
    }

    if (!localStorage.getItem("comments")) {
      localStorage.setItem("comments", []);
    } else {
      this.setState({
        comments: JSON.parse(localStorage.getItem("comments"))
      });
    }
  }

  createId = value => {
    let maxId = 0;
    value.forEach(elem => {
      if (elem.id > maxId) {
        maxId = elem.id;
      }
    });
    return maxId + 1;
  };

  signIn = () => {
    const { users } = this.state;
    let username = document.getElementById("input").value;
    let usersLocal;
    let checkNewUser = true;

    if (users !== null) {
      users.forEach(elem => {
        if (elem.name === username) {
          checkNewUser = false;
        }
      });
    }
    if (checkNewUser === true) {
      const newUser = {
        id: this.createId(users),
        name: username
      };
      this.props.updateUser(newUser);
      usersLocal = users.concat(newUser);
      localStorage.setItem("actualUser", JSON.stringify(newUser));
      localStorage.setItem("users", JSON.stringify(usersLocal));
      this.setState({
        actualUser: newUser
      });
    } else {
      let user = users.filter(elem => elem.name === username);
      usersLocal = users.concat(user[0]);
      localStorage.setItem("actualUser", JSON.stringify(user[0]));
      this.setState({
        actualUser: user[0]
      });
    }

    this.setState({
      users: users,
      isOpen: false
    });
  };

  logOff = () => {
    localStorage.setItem("actualUser", { id: null, name: "" });
    this.setState({
      actualUser: { id: null, name: "" },
      isOpen: true
    });
  };

  addCard = (autor, columnId, columnName) => {
    const { cards } = this.state;
    const card = {
      id: this.createId(cards),
      name: document.getElementById("inputCardName").value,
      text: document.getElementById("inputCardDescription").value,
      autor,
      columnId,
      columnName
    };
    const cardsLocal = cards.concat(card);
    localStorage.setItem("cards", JSON.stringify(cardsLocal));
    this.setState({
      cards: cardsLocal
    });
  };

  deleteCard = (cardId, autor) => {
    const { actualUser, cards } = this.state;
    if (autor === actualUser.name) {
      const cardsLocal = cards.filter(card => card.id !== cardId);
      localStorage.setItem("cards", JSON.stringify(cardsLocal));
      this.setState({
        cards: cardsLocal
      });
    } else {
      alert("Вы не можети удалить чужую карточку");
    }
  };

  editCard = (id, valueName, valueDescription) => {
    const { cards } = this.state;
    let cardsLocal = cards.map(card => {
      if (card.id === id) {
        card.name = valueName;
        card.text = valueDescription;
      }
      return card;
    });
    localStorage.setItem("cards", JSON.stringify(cardsLocal));
    this.setState({ cards: cardsLocal });
  };

  addComment = (autor, text, idCard) => {
    const { comments } = this.state;
    const comment = {
      id: this.createId(comments),
      autor,
      text,
      idCard
    };
    let commentsLocal = comments.concat(comment);
    this.setState({
      comments: commentsLocal
    });
    localStorage.setItem("comments", JSON.stringify(commentsLocal));
  };

  deleteComment = (id, autor) => {
    const { comments, actualUser } = this.state;
    if (autor === actualUser.name) {
      const commentsLocal = comments.filter(comment => id !== comment.id);
      localStorage.setItem("comments", JSON.stringify(commentsLocal));
      this.setState({
        comments: JSON.parse(localStorage.getItem("comments"))
      });
    } else {
      alert("Вы не можети удалить чужой коментарий ");
    }
  };

  editComment = (id, autor, value) => {
    const { comments, actualUser } = this.state;
    if (autor === actualUser.name) {
      let commentsLocal = comments.map(comment => {
        if (id !== comment.id) {
          comment.text = value;
        }
        return comment;
      });
      this.setState({
        comments: commentsLocal
      });
      localStorage.setItem("comments", JSON.stringify(commentsLocal));
    } else {
      alert("Вы не можети редактировать чужой коментарий ");
    }
  };

  editNameColumn = (columnId, value) => {
    const { column } = this.state;
    const columns = column.map(elem => {
      if (elem.id === columnId) {
        const column = {
          id: elem.id,
          name: value
        };
        return column;
      }
      return elem;
    });
    this.setState({
      column: columns
    });
    localStorage.setItem("column", JSON.stringify(columns));
  };
 */
  render() {
  //  console.log(this.props);
  //  console.log(this.props.testStore);
   // const { actualUser, isOpen, column, cards, comments } = this.state;
    return (
      <div className="App">
        <Header
          /* actualUser={actualUser}
          isOpen={isOpen}
          signIn={this.signIn}
          logOff={this.logOff} */
        />
         <Main
        /*    //function
          addCard={this.addCard}
          editNameColumn={this.editNameColumn}
          deleteCard={this.deleteCard}
          editCard={this.editCard}
          addComment={this.addComment}
          deleteComment={this.deleteComment}
          editComment={this.editComment}
          //props
          actualUser={actualUser}
          column={column}
          cards={cards}
          comments={comments}  */
        /> 
      </div>
    );
  }
}
const mapStateToProps = state => ({
  actualUser: state.actualUser
});

const mapDispatchToProps = {
  addUser: action.addUser,
  updateUser: action.updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
