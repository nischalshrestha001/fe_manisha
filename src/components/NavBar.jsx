import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">My App</div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">Users</a>
          <a href="#" className="text-white hover:text-gray-300">Posts</a>
          <a href="#" className="text-white hover:text-gray-300">Logout</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;