'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <Link className="text-blue-500" href="/">Go to home</Link>
      <ul className="space-y-4">
        {users.map((user) => {
          const { id, name, username, email, phone } = user;
          return (
            <li
              key={id}
              className="p-4 bg-white shadow-md rounded-lg text-gray-700"
            >
              <div className="font-bold">{name}</div>
              <div className="text-sm">
                <div>Username: {username}</div>
                <div>Email: {email}</div>
                <div>Phone: {phone}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;


