import React from 'react';
import { NavLink } from 'react-router-dom';

function Left_sidebar() {
  return (
    <div className="flex flex-col w-72 h-screen p-5">
      <div className="mb-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-center mb-4">
            <img
              src="/free-nature-images.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Name</h2>
          <NavLink 
            to="/profile" 
            className="block text-xl font-semibold text-center mb-2"
          >
            Profile
          </NavLink>
          <h2 className="text-xl font-semibold text-center mb-2">Total-friends : 70</h2>
        </div>
      </div>
    </div>
  );
}

export default Left_sidebar;
