import React from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { PostId } = useParams();
  return (
    <div>
      <h1>Showing the details of post id: {PostId}</h1>
    </div>
  );
}

export default PostDetails;
