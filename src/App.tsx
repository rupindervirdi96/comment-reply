import React, { useEffect, useState } from "react";
import "./App.css";

import Comment from "./Comment";

import pokemon from "./assets/pokemon.jpg";

export type Reply = {
  id: number;
  commentId: number;
  text: string;
};

export type CommentType = {
  id: number;
  text: string;
  replies: Reply[];
};

function App() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<CommentType[]>([]);

  const addComment = (e: any) => {
    e.preventDefault();
    if (!commentText) return alert("Enter some text before hitting enter");

    let newComment: CommentType = {
      id: comments.length,
      text: commentText,
      replies: [],
    };
    setComments([...comments, newComment]);
    setCommentText("");
  };

  // useEffect(()=>{},[comments])

  const addReply = (id: number, text: string): void => {
    // let currComment = comments.find();
    let newReply: Reply = {
      id: 1,
      commentId: id,
      text: text,
    };
    let newComments = comments.map((comment) => {
      if (comment.id === id) {
        comment.replies.push(newReply);
        return comment;
      }
      return comment;
    });

    setComments(newComments);
  };

  return (
    <div className="App" style={{ width: "600px", margin: "auto" }}>
      <img
        style={{ objectFit: "cover" }}
        src={pokemon}
        width="100%"
        height="350px"
        alt=""
      />
      <div
        className="commentSection"
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <h1
          style={{
            textAlign: "left",
            width: "100%",
            margin: "auto",
            color: "#303030",
          }}
        >
          Comments
        </h1>
        {comments.map((comment) => (
          <Comment comment={comment} type="comment" addReply={addReply} />
        ))}
        <form action="" onSubmit={(e) => addComment(e)}>
          <input
            style={{ padding: "5px", margin: "5px 0px" }}
            type="text"
            placeholder="Comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          />
        </form>
      </div>
    </div>
  );
}

export default App;
