import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main/main';
import Header from './components/header/header';
import {
  setLocalStorage,
  getLocalStorage,
} from './action/index';


const columnsDefault = [
  { id: 1, name: 'TODO' },
  { id: 2, name: 'In Progress' },
  { id: 3, name: 'Testing' },
  { id: 4, name: 'Done' },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualUser: "",
      users: [],
      column: [],
      cards: [],
      comments: [],
      isOpen: false,
    }
  }



  componentDidMount() {

    if (!localStorage.getItem("actualUser")) {
      this.setState({
        isOpen: true
      })
    } else {
      this.setState({
        actualUser: JSON.parse(localStorage.getItem('actualUser'))
      })
    }
    if (!localStorage.getItem("users")) {
      localStorage.setItem('users', [])
    } else {
      this.setState({
        user: JSON.parse(localStorage.getItem('users'))
      })
    }

    if (!localStorage.getItem("column")) {
      localStorage.setItem('column', JSON.stringify(columnsDefault))
      this.setState({
        column: JSON.parse(localStorage.getItem('column'))
      })
    } else {
      this.setState({
        column: JSON.parse(localStorage.getItem('column'))
      })
    }

    if (!localStorage.getItem('cards')) {
      localStorage.setItem('cards', [])
    } else {
      this.setState({
        cards: JSON.parse(localStorage.getItem('cards'))
      })
    }

    if (!localStorage.getItem('comments')) {
      localStorage.setItem('comments', [])
    } else {
      this.setState({
        comments: JSON.parse(localStorage.getItem('comments'))
      })
    }
  }

  createId = (value) => {
    let maxId = 0
    value.forEach(
      (elem => {
        if (elem.id > maxId) {
          maxId = elem.id
        }
      }
      )
    )
    return maxId + 1
  }

  signIn = () => {
    let username = document.getElementById("input").value;
    let users
    let checkNewUser = true

    if (this.state.users !== null) {
      this.state.users.forEach(
        elem => {
          if (elem.name === username) {
            checkNewUser = false
          }
        }
      )
    }
    if (checkNewUser === true) {
      const newUser = {
        id: this.createId(this.state.users),
        name: username
      }
      users = this.state.users.concat(newUser)
      localStorage.setItem('actualUser', JSON.stringify(newUser));
      localStorage.setItem('users', JSON.stringify(users))
      this.setState({
        actualUser: newUser
      })
    } else {
      let user = this.state.users.filter(elem => elem.name === username)
      users = this.state.users.concat(user[0])
      localStorage.setItem('actualUser', JSON.stringify(user[0]));
      this.setState({
        actualUser: user[0]
      })
    }


    this.setState({
      users: users,
      isOpen: false
    })

    alert(this.state.actualUser)

  }

  logOff = () => {
    localStorage.setItem('actualUser', '')
    this.setState({
      actualUser: localStorage.getItem('actualUser'),
      isOpen: true,
    })
  }

  addCard = (autor, columnId, columnName) => {
    const card = {
      id: this.createId(this.state.cards),
      name: document.getElementById('inputCardName').value,
      text: document.getElementById('inputCardDescription').value,
      autor: autor,
      columnId: columnId,
      columnName: columnName
    }
    const cards = this.state.cards.concat(card);
    localStorage.setItem('cards', JSON.stringify(cards));
    this.setState({
      cards: cards
    })
  }

  deleteCard = (cardId, autor) => {
    if (autor === this.state.actualUser.name) {
      const cards = this.state.cards.filter(
        card => card.id !== cardId
      )
      localStorage.setItem('cards', JSON.stringify(cards));
      this.setState({
        cards: cards
      })
    } else {
      alert("Вы не можети удалить чужую карточку")
    }
  }

  editCard = (id, valueName, valueDescription) => {
    let cards = this.state.cards.map(
      card => {
        if (card.id === id) {
          card.name = valueName
          card.text = valueDescription
        }
        return card
      }
    )
    localStorage.setItem('cards', JSON.stringify(cards))
    this.setState({ cards: cards })
  }

  addComment = (autor, text, idCard) => {
    const comment = {
      id: this.createId(this.state.comments),
      autor: autor,
      text: text,
      idCard: idCard
    }
    let comments = this.state.comments.concat(comment)
    this.setState({
      comments: comments
    })
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  deleteComment = (id, autor) => {
    if (autor === this.state.actualUser.name) {
      const comments = this.state.comments.filter(
        comment => id != comment.id
      )
      localStorage.setItem('comments', JSON.stringify(comments))
      this.setState({
        comments: comments
      })
    } else {
      alert("Вы не можети удалить чужой коментарий ")
    }


  }

  editComment = (id, autor, value) => {
    if (autor === this.state.actualUser.name) {
      let comments = this.state.comments.map(
        comment => {
          if (id != comment.id) {
            comment.text = value
          }
          return comment
        }
      ) 
      this.setState({
        comments: comments
      })
      localStorage.setItem('comments', JSON.stringify(this.state.comments))
     
    } else {
      alert("Вы не можети редактировать чужой коментарий ")
    }
  }

  editNameColumn = (columnId, value) => {
    const columns = this.state.column.map(elem => {
      if (elem.id === columnId) {
        const column = {
          id: elem.id,
          name: value
        }
        return column
      }
      return elem;
    });

    alert(this.state.column)
    alert(columns)
    this.setState({
      column: columns
    })
    localStorage.setItem('column', JSON.stringify(columns))
    alert()
  }


  render() {
    return (
      <div className="App">
        <Header
          actualUser={this.state.actualUser}
          isOpen={this.state.isOpen}
          signIn={this.signIn}
          logOff={this.logOff}
        />
        <Main
          //function
          addCard={this.addCard}
          editNameColumn={this.editNameColumn}
          deleteCard={this.deleteCard}
          editCard={this.editCard}
          addComment={this.addComment}
          deleteComment={this.deleteComment}
          editComment = {this.editComment}
          //props
          actualUser={this.state.actualUser}
          column={this.state.column}
          cards={this.state.cards}
          comments={this.state.comments}
        />

      </div>
    );
  }
}
export default App;
