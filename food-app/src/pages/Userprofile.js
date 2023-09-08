import React, { useState } from "react";

export default function UserProfile() {
  const initialUser = {
    id: 1,
    username: "example_user",
    email: "user@example.com",
    bio: "A passionate foodie and traveler",
    location: "New York, USA",
    phoneNumber: "555-555-5555",
  };

  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    // Simulate saving the edited profile data
    // In a real application, you would send an API request to update the user's profile
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
<br></br>
      {isEditing ? (
        <div className="edit-profile">
          <label htmlFor="username">Username:   </label>
          <br />
          <input
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
      ) : (
        <p className="profile-info">Username:    {user.username}</p>
      )}
      <br />

      {isEditing ? (
        <div className="edit-profile">
          <label htmlFor="email">Email:    </label>
          <br />
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
      ) : (
        <p className="profile-info">Email:    {user.email}</p>
      )}
      <br />

      {isEditing ? (
        <div className="edit-profile">
          <label htmlFor="bio">Bio:    </label>
          <br />
          <textarea
            id="bio"
            value={user.bio}
            onChange={(e) => setUser({ ...user, bio: e.target.value })}
          />
        </div>
      ) : (
        <p className="profile-info">Bio:     {user.bio}</p>
      )}
      <br />

      {isEditing ? (
        <div className="edit-profile">
          <label htmlFor="location">Location:     </label>
          <br />
          <input
            type="text"
            id="location"
            value={user.location}
            onChange={(e) => setUser({ ...user, location: e.target.value })}
          />
        </div>
      ) : (
        <p className="profile-info">Location:    {user.location}</p>
      )}
      <br />

      {isEditing ? (
        <div className="edit-profile">
          <label htmlFor="phoneNumber">Phone Number:    </label>
          <br />
          <input
            type="tel"
            id="phoneNumber"
            value={user.phoneNumber}
            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
          />
        </div>
      ) : (
        <p className="profile-info">Phone Number:    {user.phoneNumber}</p>
      )}
      <br />

      {isEditing ? (
        <button onClick={handleSaveProfile}>Save Profile</button>
      ) : (
        <button onClick={handleEditProfile}>Edit Profile</button>
      )}
    </div>
  );
}
