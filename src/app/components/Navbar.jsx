import React from "react";

function Navbar() {
  return (
    <div>
      <div className="relative z-10 font-g ">
        <nav className="flex justify-between items-center py-4 mx-20 text-white">
          <h1 className="text-2xl font-bold">MNTN</h1>
          <ul className="flex space-x-6 gap-10">
            <li>
              <a href="/equipment" className="hover:text-blue-500">
                Equipment
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500">
                About us
              </a>
            </li>

            <li>
              <a href="/blog" className="hover:text-blue-500">
                Blog
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4 cursor-pointer">
            <img
              src="/user.svg"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span>Account</span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
