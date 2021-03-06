import React, { useEffect, useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { menu } from "../../utils/menuUtils";
import { checkUrl } from "../../utils/util";

const Navbar = () => {
  const [currentLocation, setCurrentLocation] = useState(window.location.href);
  const [link, setlink] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (window.location.href !== currentLocation) {
      setCurrentLocation(window.location.href);
    }
  }, [link, currentLocation]);

  return (
    <section className="w-full px-6 pb-12 antialiased bg-white">
      <div className="mx-auto max-w-7xl">
        <nav className={`relative z-50 h-24 select-none`}>
          <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
            <div className="flex items-center justify-start w-1/4 h-full pr-4">
              <a href="#_" className="inline-block py-4 md:py-0">
                <span className="p-1 text-xl font-black leading-none text-gray-900">
                  <span>nullBrains.</span>
                </span>
              </a>
            </div>
            <div
              className={`top-0 left-0 right-0 items-start w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 lg:text-base md:bg-transparent md:p-0 md:relative md:flex transition-all duration-200 ease-in-out transform  ${
                showModal ? "flex fixed" : "hidden"
              }`}
            >
              <div
                className={`flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row `}
              >
                <a
                  href="#_"
                  className="inline-flex items-center w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden"
                >
                  nullBrains.
                </a>
                <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                  {menu.map((linkObj, index) => (
                    <a
                      key={index}
                      href={linkObj.href}
                      onClick={() => {
                        setlink((prev) => !prev);
                        setShowModal(false);
                      }}
                      className={`inline-block w-full py-2 mx-0 ml-6 font-medium text-left  md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center hover:underline ${
                        checkUrl(currentLocation) === linkObj.href
                          ? "text-indigo-600"
                          : "text-gray-600"
                      }`}
                    >
                      {linkObj.link}
                    </a>
                  ))}
                  <a
                    href="#_"
                    className="absolute top-0 left-0 hidden py-2 mt-6 ml-10 mr-2 text-gray-600 lg:inline-block md:mt-0 md:ml-2 lg:mx-3 md:relative"
                  >
                    <AiOutlineSearch
                      className="text-gray-600 hover:underline focus:text-indigo-600 font-medium"
                      onClick={(e) => e.preventDefault()}
                    />
                  </a>
                </div>
                <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                  <a
                    href="/"
                    className="w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto"
                  >
                    Sign In
                  </a>
                  <a
                    href="/"
                    className="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
            <div
              className="absolute right-0 flex flex-col items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100"
              onClick={() => setShowModal(!showModal)}
            >
              {!showModal ? (
                <FaBars className="text-xl" />
              ) : (
                <FaWindowClose className="text-xl" />
              )}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
