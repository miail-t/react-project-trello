import React, { Component } from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, ToastBody, ToastHeader, Toast
} from 'reactstrap';
import './Card.css'
import ModalCard from '../Column/ModalCreateCard/index'
import EditModal from './EditModal/index'



class Car extends Component {
    constructor(props) {
        super(props); {
            this.state = {
                isOpenEditModal: false
            }
        }
    }

    deleteCard = () => {
        this.props.deleteCard(this.props.id, this.props.autor)
    }

    changeIsOpenEditModal = (state) => {
        this.setState({
            isOpenEditModal: !state
        })
    }

    render() {
        return (
            <div className="card">
                <Toast>
                    <ToastHeader toggle={this.deleteCard} className="card-header">
                        {this.props.name}
                    </ToastHeader>
                    <ToastBody>
                        Description: {this.props.text}
                    </ToastBody>
                    <div>Column: {this.props.columnName}</div>
                    <br />
                    <div  >
                        Autor: {this.props.autor}
                    </div>
                    <br />
                    <Button color="primary" onClick={(e) => {
                        this.changeIsOpenEditModal(this.state.isOpenEditModal)
                    }
                    }>Изменить</Button>
                </Toast>

                <EditModal
                    isOpen={this.state.isOpenEditModal}
                    id = {this.props.id}
                    name={this.props.name}
                    text={this.props.text}
                    autor={this.props.autor}
                    actualUser={this.props.actualUser}
                    comments={this.props.comments}

                    changeIsOpenEditModal={this.changeIsOpenEditModal}
                    editCard={this.props.editCard}
                    addComment={this.props.addComment}
                    deleteComment={this.props.deleteComment}
                    editComment = {this.props.editComment}

                />
            </div>
        );
    }
};

export default Car;