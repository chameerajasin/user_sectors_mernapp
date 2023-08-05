import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../constant";
import { UserCards } from "../components/UserCards";

export const ViewUsersPage = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(`${baseURL}/user`);
      const fetchedUsers = response.data.data ?? [];
      setUsers(fetchedUsers);
    } catch (error) {
      alert("Failed to fetch users");
    }
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UserCards users={users} />;
};
