import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./userID.css";

function UserID() {
  const [data, setData] = useState([]);
  let { userid } = useParams();

  useEffect(() => {
    axios.get(`/api/users/${userid}`).then((res) => setData(res.data));
    // console.log(data);
  }, []);

  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div className="user-id-background">
      <div className="user-id-page">
        {data.map((user, i) => (
          <div key={i}>
            <div className="full-greeting">
              <div className="greeting">
                <h2>hello</h2>
              </div>
            </div>
            <h1 className="full-name">
              {user.firstname} {user.lastname}
            </h1>
            <div className="button-div"><button className="button-10"
              onClick={() => {
                navigate(`/books/${user.userid}`);
              }}
            >
              SEE ALL BOOKS
            </button></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserID;
