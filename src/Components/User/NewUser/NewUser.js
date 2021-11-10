import React, { useState, useRef } from "react";
import Wrapper from "../../Helpers/Wrapper";

import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModule from "../../UI/ErrorModule/ErrorModule";

import styles from "./NewUser.module.css";

function NewUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState("");

  const AddNewUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    const userDetails = {
      Name: enteredName,
      Age: enteredAge,
    };

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
    <Wrapper>
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
            ref={nameInputRef}
          />
          <label htmlFor="userage">Age (Years)</label>
          <input
            id="userage"
            type="text"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default NewUser;
