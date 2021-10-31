import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModule from "../../UI/ErrorModule/ErrorModule";

import styles from "./NewUser.module.css";

function NewUser(props) {
  const [enteredName, setUserName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  const NameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const AddNewUserHandler = (event) => {
    event.preventDefault();

    const userDetails = {
      Name: enteredName,
      Age: enteredAge,
    };

    setUserName("");
    setAge("");

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        massage: "Please enter valid name and age (non-empty value)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        massage: "Please enter valid age (> 0)",
      });
      return;
    }

    props.addUser(userDetails);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModule
          title={error.title}
          massage={error.massage}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={AddNewUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={NameChangeHandler}
          />
          <label htmlFor="userage">Age (Years)</label>
          <input
            id="userage"
            type="text"
            value={enteredAge}
            onChange={AgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default NewUser;
