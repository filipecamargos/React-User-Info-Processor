import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorBox from "../UI/ErrorBox";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  //Variable States
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  //Handle the add user event
  const addUserHandler = (event) => {
    event.preventDefault();

    //validation
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age!",
      });

      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid age!",
        message: "Please enter a valid age!",
      });
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

  //handle the error
  const errorHandler = () => {
    setError(null);
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
    <div>
      {error && <ErrorBox title={error.title} message={error.message} onConfirm={errorHandler} />}
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
    </div>
  );
};

export default AddUser;
