import React from "react";
import disney from "../../assets/brands/disney.png";
import google from "../../assets/brands/google.png";
import hubspot from "../../assets/brands/hubspot.png";
import slack from "../../assets/brands/slack.png";
import youtube from "../../assets/brands/youtube.png";
import shopify from "../../assets/brands/shopify.png";

function Brand() {
  return (
    <section className="bg-white pt-7 pb-14">
      <div className="container px-8 mx-auto sm:px-12 lg:px-20">
        <h1 className="text-lg font-bold tracking-wide text-center text-gray-800 uppercase mb-7">
          TRUSTED BY THE TOP-LEADING COMPANIES
        </h1>
        <div className="flex grid items-center justify-center grid-cols-4 grid-cols-12 gap-y-8">
          <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
            <img
              src={disney}
              alt="Disney Plus"
              className="block object-contain h-12"
            />
          </div>
          <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
            <img
              src={google}
              alt="Google"
              className="block object-contain h-20"
            />
          </div>
          <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
            <img
              src={hubspot}
              alt="Hubspot"
              className="block object-contain h-20"
            />
          </div>
          <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
            <img
              src={youtube}
              alt="Youtube"
              className="block object-contain h-20 lg:h-20"
            />
          </div>
          <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
            <img src={slack} alt="Slack" className="block object-contain h-9" />
          </div>
          <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
            <img
              src={shopify}
              alt="Shopify"
              className="block object-contain h-9"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brand;
