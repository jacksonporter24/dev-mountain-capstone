import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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
    <div>
      {data.map((user, i) => (
        <div key={i}>
          <div className>
            <div className>
              <div className>
                <p>Hello</p>
              </div>
              <div className></div>
            </div>
          </div>
          <p>Welcome {user.firstname} {user.lastname}</p>
          <button
        onClick={() => {
          navigate(`/books/${user.userid}`);
        }}
      >
        SEE ALL BOOKS
      </button>
        </div>
      ))}
      
    </div>
  );
}

export default UserID;
