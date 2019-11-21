import React, { Component } from 'react';
import {
    Card, Button, CardTitle, Input
} from 'reactstrap';
import Car from '../Card/Card';
import ModalCard from '../Column/ModalCreateCard/index'
import './Column.css';



class Column extends Component {
    constructor(props) {
        super(props); {
            this.state = {
                btnDropleft: false,
                isOpenCreateCard: false,
                columnNameValue: this.props.columnName
            }
        }
    }

    changeIsOpenCreateCard = (state) => {
        this.setState({
            isOpenCreateCard: !state
        })
    }

    valueChageHandler = (e) => {
        this.setState({
            columnNameValue: e.target.value
        })
    }

    editNameColumn = () =>{
        this.props.editNameColumn(this.props.id, this.state.columnNameValue)
    }


    render() {

        let card = this.props.cards.map((elem) => {

            if (this.props.id === elem.columnId) {
                return <Car

                    //props
                    id = {elem.id}
                    name={elem.name}
                    text={elem.text}
                    columnName={this.props.columnName}
                    autor={elem.autor}
                    actualUser={this.props.actualUser}
                    comments={this.props.comments}
                    //function
                    deleteCard = {this.props.deleteCard}
                    editCard = {this.props.editCard}
                    addComment={this.props.addComment}
                    deleteComment={this.props.deleteComment}
                    editComment = {this.props.editComment}

                />
            }
        });


        return (
            <div>
                <Card className="card-row">

                    <Input
                        className="inputColumn"
                        plaintext
                        onChange={this.valueChageHandler}
                        value={this.state.columnNameValue}
                        onBlur={
                            this.editNameColumn
                        }
                    />
                    {card}
                    <Button color="primary" onClick={(e) => { this.changeIsOpenCreateCard(this.state.isOpenCreateCard) }}>Создать карточку</Button>
                </Card>
                <ModalCard
                    //function
                    addCard={this.props.addCard}                   
                    changeIsOpenCreateCard={this.changeIsOpenCreateCard}
                    //props
                    isOpen={this.state.isOpenCreateCard}
                    autor={this.props.actualUser}
                    columnId={this.props.id}
                    columnName={this.props.columnName}
                />
            </div>

        );
    }
};

export default Column;