import React from "react";


function Navbar() {
  return (
    <section>
      <div class="fixed top-0 left-0 w-full flex flex-row justify-center z-50 bg-white">
        <nav class="border-b-2 w-full md:w-11/12 p-4 flex flex-row justify-between items-center">
          <div class="flex items-center justify-start w-1/4 h-full pr-4 ">
            <a href="/" class="inline-block py-4 md:py-0">
              <span class="p-1 text-xl font-black leading-none text-gray-900">
                <span>nullBrains</span>
                <span class="text-indigo-600">.</span>
              </span>
            </a>
          </div>
          <div class="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
            <a
              href="/home"
              class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
            >
              Home
            </a>
            <a
              href="/features"
              class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
            >
              Features
            </a>
            <a
              href="/features"
              class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
            >
              Blog
            </a>
            <a
              href="/features"
              class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
            >
              Contact
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div class="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
            <a
              href="/"
              class="w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto"
            >
              Sign In
            </a>
            <a
              href="/"
              class="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Sign Up
            </a>
          </div>
          <div class="md:hidden">
            <div >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
