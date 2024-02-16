"use client"

import { useEffect, useState } from "react";

import styles from "./page.module.css";
import { FaSpinner } from "react-icons/fa6";

import { User } from "./types/user";
import Gallery from "./gallery";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        setUsers(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className={styles.main}>
      {loading ? (
        <div className="loading-container">
          <FaSpinner className="loading-spinner lg" />
        </div>
      ) : (
        <Gallery users={users} />
      )}
    </main>
  );
}
