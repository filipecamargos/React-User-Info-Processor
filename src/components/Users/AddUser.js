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
        <input id="username" type="text" onChange={userNameEnteredHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageEnteredHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
