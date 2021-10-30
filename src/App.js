import React, { useState } from "react";

import NewUser from "./Components/User/NewUser/NewUser";
import UserList from "./Components/User/UserList/UserList";

// const dumme_user = [
//   { Name: "max", Age: 20 },
//   { Name: "min", Age: 30 },
// ];

function App() {
  const [allUsers, setUserDetails] = useState("");

  const addNewUser = (user) => {
    setUserDetails((prevUser) => {
      return [user, ...prevUser];
    });
  };

  console.log(allUsers);

  return (
    <div>
      <NewUser addUser={addNewUser} />
      <UserList users={allUsers} />
    </div>
  );
}

export default App;
