import React from 'react';
import { useUser } from '../context/UserContext'; 

const Contact = () => {
  const { user } = useUser();

  if (!user) {
    return <p>No user data available.</p>;
  }

  return (
    <div className="Contact-container">
      <h2>Contact</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone Number:</strong> 9443627839</p>
      <p><strong>Address:</strong> Tirupathi</p>
      
    </div>
  );
};

export default Contact;
