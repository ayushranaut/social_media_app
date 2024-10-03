import React, { useState } from "react";

export default function Topbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex justify-between items-center sticky top-0 h-[50px] w-full bg-red-500">
      {/* Left - Logo */}
      <div className="flex-3">
        <span className="text-[24px] ml-6 font-bold text-white cursor-pointer">
          Campus Connect
        </span>
      </div>

      {/* Right - Profile Image and Logout Button */}
      <div className="flex items-center">
        <img
          src="/assets/person/1.jpeg"
          alt="Profile"
          className="w-9 h-9 rounded-full object-cover bg-white mr-4 cursor-pointer"
        />
        <button
          type="button"
          className="border-2 mr-6 text-white py-1 px-2 h-8 rounded-md focus:outline-none flex items-center"
        >
          <i className="fa-solid fa-right-to-bracket mr-2"></i> Log Out
        </button>
      </div>
    </div>
  );
}