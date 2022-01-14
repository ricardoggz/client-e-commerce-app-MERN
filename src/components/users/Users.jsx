import React, { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => error);
  }, []);

  return (
    <div>
      {users.map((user) => (
        <>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </>
      ))}
    </div>
  );
};
