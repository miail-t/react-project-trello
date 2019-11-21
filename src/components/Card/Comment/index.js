import React, { Component } from 'react';
import { Toast, ToastHeader, ToastBody, Input } from 'reactstrap';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentValue: this.props.text
        }
    }


    deleteComment = () => {
        this.props.deleteComment(this.props.id, this.props.autor)
    }

    editComment = () => {
        this.props.editComment(this.props.id, this.props.autor, this.state.commentValue)
    }

    valueChageHandler = (e) => {
        this.setState({
            commentValue: e.target.value
        }
        )
    }

    render() {
        return (
            <div className="p-3 bg-warning my-2 rounded">
                <Toast >
                    <ToastHeader toggle={this.deleteComment} >
                        {this.props.autor}
                    </ToastHeader>
                    <ToastBody>
                        <Input
                            plaintext
                            onChange={this.valueChageHandler}
                            value={this.state.commentValue}
                            onBlur={
                                this.editComment
                            }
                        />


                    </ToastBody>
                </Toast>
            </div>
        )
    }
}
export default Comment