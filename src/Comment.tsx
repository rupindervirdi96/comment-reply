import React, { useState } from "react";
import { CommentType } from "./App";
import styled from "styled-components";

interface commentProps {
  comment: CommentType;
  type: "comment" | "reply";
  addReply(id: number, text: string): void;
}

const CommentStyle = styled.div<{ type: any }>`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin: 5px 0px;
  padding: 0px 10px 5px;
  box-sizing: border-box;
  background-color: #ff9100;
  width: 100%;
  h3 {
    margin: 10px 0px;
    color: #1d1d1d;
  }
  form {
    input {
      padding: 3px;
    }
  }
  div {
    button {
      margin: 5px;
      padding: 5px 8px;
      color: white;
      background-color: #20721d;
      outline: none;
      border: none;
      border-radius: 4px;
      :hover {
        color: lightblue;
      }
    }
  }
`;

const ReplyStyle = styled.div`
  width: 99%;
  align-self: flex-end;
  padding: 0px 5px;
  background-color: #20721d;
  margin: 0px 0px 5px;
  border-radius: 4px;
  h5 {
    margin: 5px 0px;
    color: white;
  }
`;

const Comment: React.FC<commentProps> = ({ comment, type, addReply }) => {
  const [replyText, setReplyText] = useState("");
  const [reply, setReply] = useState(false);

  return (
    <CommentStyle type={type}>
      <h3>{comment.text}</h3>
      <div
        className="replies"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {comment.replies?.map((reply) => (
          <ReplyStyle>
            <h5>{reply.text}</h5>
          </ReplyStyle>
        ))}
      </div>
      <div>
        <button>Like</button>
        <button onClick={() => setReply(!reply)}>Reply</button>
      </div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          addReply(comment.id, replyText);
          setReplyText("");
        }}
      >
        {reply ? (
          <input
            type="text"
            value={replyText}
            placeholder="Reply"
            autoFocus
            onChange={(e) => setReplyText(e.target.value)}
          />
        ) : (
          ""
        )}
      </form>
    </CommentStyle>
  );
};

export default Comment;

/*
Load
*/
