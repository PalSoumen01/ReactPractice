import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import withLoading from "./Util/withLoading";

const UserListWithLoading = withLoading(UserList);

function User() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (response.status !== 200) {
          console.error("Failed to fetch users, status code:", response.status);
        }
        console.log("Response:", response);
        const jsonResponse = await response.json();
        console.log("JSON Response:", jsonResponse);
        setUsers(jsonResponse);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching users:", error);
      }
    }
    getUsers();
  }, []);

  return (
    <>
      <UserListWithLoading isLoading={isLoading} users={users} />
    </>
  );
}

export default User;
