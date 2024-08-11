import React from 'react';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const { user } = useUser(); 

  if (!user) {
    return <p>No user data available.</p>;
  }

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
     
    </div>
  );
};

export default Profile;
