import React from 'react';
import { ADD_FRIEND } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';

const handleClick = async () => {
  try {
    await addFriend({
      variables: { id: user._id }
    });
  } catch (e) {
    console.error(e);
  }
};

const Profile = () => {
  const [addFriend] = useMutation(ADD_FRIEND);


  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        <button className="btn ml-auto" onClick={handleClick}>
          Add Friend
        </button>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">{/* PRINT THOUGHT LIST  */}</div>

        <div className="col-12 col-lg-3 mb-3">{/* PRINT FRIEND LIST */}</div>
      </div>
    </div>
  );
};

export default Profile;
