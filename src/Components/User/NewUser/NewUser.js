import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

import styles from "./NewUser.module.css";

function NewUser(props) {
  const [enteredName, setUserName] = useState("");
  const [enteredAge, setAge] = useState("");

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
      return;
    }

    props.addUser(userDetails);
  };

  return (
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
  );
}

export default NewUser;
