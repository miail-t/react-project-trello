import React, { Component } from "react";
import { Toast, ToastHeader, ToastBody, Input } from "reactstrap";
import PropTypes from "prop-types";

class Comment extends Component {
  state = {
    commentValue: this.props.text
  };

  valueChageHandler = e => {
    this.setState({
      commentValue: e.target.value
    });
  };

  render() {
    const { id, autor, deleteComment, editComment } = this.props;
    const {commentValue} = this.state;
    return (
      <div className="p-3 bg-warning my-2 rounded">
        <Toast>
          <ToastHeader toggle={() => deleteComment(id, autor)}>
            {autor}
          </ToastHeader>
          <ToastBody>
            <Input
              plaintext
              onChange={this.valueChageHandler}
              value={commentValue}
              onBlur={() => editComment(id, autor, commentValue)}
            />
          </ToastBody>
        </Toast>
      </div>
    );
  }
}
export default Comment;
Comment.propType = {
  id: PropTypes.number.isRequired,
  autor: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired
};
