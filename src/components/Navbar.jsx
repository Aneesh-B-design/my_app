import React from 'react';
import logoTask from '../assets/images/logo_task.png';

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap px-60 py-10 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a href='/' className="mr-5 hover:text-gray-900">About</a>
            <a href='/' className="mr-5 hover:text-gray-900">Services</a>
            <a href='/' className="mr-5 hover:text-gray-900">Events</a>
          </nav>
          <a href='/' className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <img src={logoTask} alt="logo" className="w-50 h-50" />
          </a>
          <nav className="flex lg:w-2/5 flex-wrap items-center justify-end text-base md:ml-auto">
            <a href='/' className="mr-10 hover:text-gray-900">Venues</a>
            <a href='/' className="mr-10 hover:text-gray-900">Careers</a>
            <button className="inline-flex items-center bg-[#C15627] border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded-full text-white mt-4 md:mt-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-sm">
              Get In Touch
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
