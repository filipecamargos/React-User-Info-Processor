import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [usersList, setUsersList] = useState([]);

  //Add a user to the list @user {name & age}
  const userListHandler = (user) => {
    setUsersList((preList) => {
      return [...preList, user];
    });
  };

  return (
    <Wrapper>
      <AddUser onAddUser={userListHandler} />
      <UsersList users={usersList} />
    </Wrapper>
  );
}

export default App;
