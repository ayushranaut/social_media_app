import React, { useState } from 'react';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    bio: '',
    department: '',
    graduationYear: ''
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[650px] rounded-3xl p-8 text-black shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className=" flex mb-6">
            <div className="w-32 h-32 rounded-full border-2 border-white overflow-hidden">
              <img 
                src="" 
                alt="Profile" 
                className="w-full bg-slate-200 h-full object-cover"
              />
            </div>
            <label className="ml-5 mt-24 cursor-pointer">
              <span className="text-blue-600">Change profile picture</span>
              <input type="file" className="" />
            </label>
          </div>
          
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent pb-1 focus:outline-none focus:border-white"
          />
          
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full  pb-1 focus:outline-none focus:border-white"
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full pb-1 focus:outline-none focus:border-white"
          />
          
          <textarea
            name="bio"
            placeholder="Set Bio"
            rows="4"
            cols="50"
            value={formData.bio}
            onChange={handleChange}
            className="w-full  pb-1 focus:outline-none focus:border-white resize-none"
          ></textarea>
          
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="w-full pb-1 focus:outline-none focus:border-white"
          />
          
          <input
            type="text"
            name="graduationYear"
            placeholder="Graduation Year"
            value={formData.graduationYear}
            onChange={handleChange}
            className="w-full pb-1 focus:outline-none focus:border-white"
          />
          
          <div className="pt-4 ">
            <button type="submit" className="float-right text-white px-4 py-1 bg-blue-700 rounded-md hover:bg-blue-600 transition">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;