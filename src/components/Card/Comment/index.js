import React, { useState } from "react";
import { Toast, ToastHeader, ToastBody, Input } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as action from "../../../actions";
import * as selectors from "../../../selectors";

function Comment({ id, autor, text, deleteComment, editComment, actualUser }) {
  const [commentValue, chageCommentValue] = useState(text);

  const removeComment = () => {
    if (autor === actualUser.name) {
      deleteComment(id);
    } else {
      alert("Вы не можети удалить чужой коментарий ");
    }
  };

  const redactComment = () => {
    if (autor === actualUser.name) {
      editComment(id, commentValue);
    } else {
      alert("Вы не можети редактировать чужой коментарий ");
      chageCommentValue(text);
    }
  };

  return (
    <div className="p-3 bg-warning my-2 rounded">
      <Toast>
        <ToastHeader toggle={() => removeComment()}>{autor}</ToastHeader>
        <ToastBody>
          <Input
            plaintext
            onChange={e => chageCommentValue(e.target.value)}
            value={commentValue}
            onBlur={() => redactComment()}
          />
        </ToastBody>
      </Toast>
    </div>
  );
}
const mapStateToProps = state => {
  return { actualUser: selectors.getActualUser(state) };
};

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
