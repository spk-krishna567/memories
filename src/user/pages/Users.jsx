import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "uma",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvbNcbZW9GNo3zreTeUCXqlj3DrZIjsQdwdg&usqp=CAU",
      places: 4,
    },
  ];
  return <UsersList items={USERS} />;
};
export default Users;
