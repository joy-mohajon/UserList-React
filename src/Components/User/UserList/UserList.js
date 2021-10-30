import React from "react";
import Card from "../../UI/Card/Card";

import styles from "./UserList.module.css";

function UserList(props) {
  console.log(props.users);
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.length > 0 &&
          props.users.map((user) => {
            return (
              <li>
                {user.Name} ({user.Age} years old)
              </li>
            );
          })}
      </ul>
    </Card>
  );
}

export default UserList;
