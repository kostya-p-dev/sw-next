// components/UserList.js
import { useEffect, useState } from 'react';
import User from './User';
import AddUserForm from './AddUserForm';

export default function UserList() {
  const [users, setUsers] = useState([]);
 
  const [loading, setLoading] = useState(true);

 
  // Function to fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:7701/api/users'); // Adjust URL if necessary
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Fetch users on initial render
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserAdded = () => {
    setLoading(true)
    setTimeout(() => {
      fetchUsers();
    }, 1000); // 1-second delay
  };



  return (
    <div>
       <AddUserForm handleUserAdded={handleUserAdded}/>
      <h2>Users List {loading && (<img src="/loading-gif.gif" alt="Loading..." width="20" height="20"/>)}</h2>
      {users?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
