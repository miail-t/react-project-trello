import React, { Component } from "react";
import { Toast, ToastHeader, ToastBody, Input } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as action from "../../../actions";

class Comment extends Component {
  state = {
    commentValue: this.props.text
  };

  valueChageHandler = e => {
    this.setState({
      commentValue: e.target.value
    });
  };

  deleteComment = () => {
    const { id, autor,actualUser,deleteComment } = this.props;
    if (autor === actualUser.name) {
      deleteComment(id);
    } else {
      alert("Вы не можети удалить чужой коментарий ");
    }
  };

  editComment = () => {
    const { id, autor,actualUser,editComment } = this.props;
    const { commentValue } = this.state;
    if (autor === actualUser.name) {
      editComment(id,commentValue);
    } else {
      alert("Вы не можети редактировать чужой коментарий ");
    }
  };

  render() {
    const { id, autor } = this.props;
    const { commentValue } = this.state;
    return (
      <div className="p-3 bg-warning my-2 rounded">
        <Toast>
          <ToastHeader toggle={() => this.deleteComment(id, autor)}>
            {autor}
          </ToastHeader>
          <ToastBody>
            <Input
              plaintext
              onChange={this.valueChageHandler}
              value={commentValue}
              onBlur={() => this.editComment(id)}
            />
          </ToastBody>
        </Toast>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  actualUser: state.actualUser
});

const mapDispatchToProps = {
  deleteComment: action.deleteComment,
  editComment: action.editComment
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);

 Comment.propType = {
  id: PropTypes.number.isRequired,
  autor: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired
}; 
