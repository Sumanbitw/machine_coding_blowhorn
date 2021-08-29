import React from "react";
import image1 from "../../assets/blog/image1.jpg";
import image2 from "../../assets/blog/image2.jpg";
import image3 from "../../assets/blog/image3.jpg";
import image4 from "../../assets/blog/image4.jpg";
import image5 from "../../assets/blog/image5.jpg";
import image6 from "../../assets/blog/image6.jpg";

function Blog() {
  return (
    <section className="relative w-full bg-white">
      <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
        <h1 className="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3">
          The Project Blog
        </h1>
        <p className="text-lg font-medium text-gray-500 sm:text-2xl">
          Designs and layouts to help you with your app.
        </p>
        <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
          <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
            <img
              src={image1}
              alt="quench"
              className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
            />
            <div className="relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
              <a
                href="/"
                className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white"
              >
                Resources
              </a>
              <h2 className="mb-5 text-5xl font-bold">Refreshing Designs</h2>
              <p className="mb-2 text-lg font-normal text-purple-100 opacity-100">
                Quench satisfying designs to help you stir up emotion and tell a
                story.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
            <img
              src={image2}
              alt="orange"
              className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
            />
            <div className="relative z-20 w-full h-auto py-8 text-white bg-blue-500 border-t-0 border-yellow-200 px-7">
              <a
                href="/"
                className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white"
              >
                Lifestyle
              </a>
              <h2 className="mb-5 text-5xl font-bold">Healthier Lifestyle</h2>
              <p className="mb-2 text-lg font-normal text-purple-100 opacity-100">
                Living a healthier lifestyle will help with your productivity
                and your mind-set.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
            <img
              src={image3}
              alt="gbc"
              className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
            />
            <div className="relative z-20 w-full h-auto py-8 text-white bg-yellow-500 border-t-0 border-yellow-200 px-7">
              <a
                href="/"
                className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white"
              >
                Entertainment
              </a>
              <h2 className="mb-5 text-5xl font-bold">Gaming Evolution</h2>
              <p className="mb-2 text-lg font-normal text-purple-100 opacity-100">
                Learn about the evolution of gaming and how it started a
                revolution.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 col-span-12 gap-7">
            <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
              <a
                href="/"
                className="block transition duration-200 ease-out transform hover:scale-110"
              >
                <img
                  className="object-cover w-full shadow-sm max-h-56"
                  src={image4}
                  alt="workstation"
                />
              </a>
              <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                <div className="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                  <span>Inspiration</span>
                </div>
                <h2 className="text-base font-bold sm:text-lg md:text-xl">
                  Best Workstation of the year
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Check out these inspiring workstations to get ideas on how to
                  level-up your workstation.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
              <a
                href="/"
                className="block transition duration-200 ease-out transform hover:scale-110"
              >
                <img
                  className="object-cover w-full shadow-sm max-h-56"
                  src={image5}
                  alt="workstation"
                />
              </a>
              <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                <div className="bg-pink-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                  <span>Food</span>
                </div>
                <h2 className="text-base font-bold sm:text-lg md:text-xl">
                  Eating for productivity
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Learn how to be more disciplined in your diet and how you can
                  eat to maximize productivity.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
              <a
                href="/"
                className="block transition duration-200 ease-out transform hover:scale-110"
              >
                <img
                  className="object-cover w-full shadow-sm max-h-56"
                  src={image6}
                  alt="workstation"
                />
              </a>
              <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                <div className="bg-purple-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                  <span>Resource</span>
                </div>
                <h2 className="text-base font-bold sm:text-lg md:text-xl">
                  A Design Mind-set
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  What does it mean to have a design mind-set? Learn how to
                  improve your eye for design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
