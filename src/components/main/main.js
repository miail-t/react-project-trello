import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import Column from '../Column/Column';
import {
    setLocalStorage,
    getLocalStorage,
} from '../../action/index';







class Main extends React.Component {
        
   
    componentDidMount(){
       
    }
    



    render() {
     
        let column = this.props.column.map((elem) => (
            <Column
             key = {elem.name + elem.id}
             
             actualUser={this.props.actualUser}
             addCard={this.props.addCard}
             editNameColumn = {this.props.editNameColumn}
             deleteCard = {this.props.deleteCard}
             editCard = {this.props.editCard}
             addComment={this.props.addComment}
             deleteComment={this.props.deleteComment}
             editComment = {this.props.editComment}

             columnName={elem.name} 
             id = {elem.id}

             cards = {this.props.cards}
             createCard = {this.props.createCard}
             

             comments={this.props.comments}
             />
               ));
      
       

        

        return (
            <div className="main-row">       
            {column}
            </div>





        )
    }

}

export default Main;