import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserID() {
  let navigate = useNavigate();
  let { username } = useParams()
  return (
    <div>
      THIS IS {username}'s PAGE
      <button
        onClick={() => {
          navigate("/book");
        }}
      >
        SEE ALL BOOKS
      </button>
    </div>
  );
}

export default UserID;