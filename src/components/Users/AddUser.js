import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  //Variable States
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  //Handle the add user event
  const addUserHandler = (event) => {
    event.preventDefault();

    //validation
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (+userAge < 1) {
      return;
    }

    //call the add user
    props.onAddUser({
      name: userName,
      age: userAge,
      id: Math.random().toString(),
    });

    //Reset the state
    setUserName("");
    setUserAge("");
  };

  //Handle the userName entered
  const userNameEnteredHandler = (event) => {
    setUserName(event.target.value);
  };

  //Handle the userName entered
  const ageEnteredHandler = (event) => {
    setUserAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={userNameEnteredHandler}
          value={userName}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageEnteredHandler}
          value={userAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
