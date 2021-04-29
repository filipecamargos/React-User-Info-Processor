import React, { useState, Fragment, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorBox from "../UI/ErrorBox";

import classes from "./AddUser.module.css";

const AddUser = (props) => {

  //For variables references
  const nameRef = useRef();
  const ageRef = useRef();

  //Variable state to handle errors
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  //Handle the add user event
  const addUserHandler = (event) => {
    event.preventDefault();
    
    //get the values from the reference ref
    const enteredName = nameRef.current.value;
    const enteredAge = ageRef.current.value;

    //validation
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError(true);
      setErrorMessage({
        title: "Invalid input!",
        message: "Please enter a valid name and age!",
      });

      return;
    }
 
    if (+enteredAge < 1) {
      setError(true);
      setErrorMessage({
        title: "Invalid age!",
        message: "Please enter a valid age!",
      });
      return;
    }

    //call the add user
    props.onAddUser({
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    });

    //Reset the value entered
    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  //handle the error
  const errorHandler = () => {
    setError(false);
    setErrorMessage(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorBox
          title={errorMessage.title}
          message={errorMessage.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
