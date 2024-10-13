import React from 'react';
import { Search } from 'lucide-react';
import WidthWrapper from '../common/WidthWrapper';
import User from "../../assets/images/Landing.png"
const ServiceProviderLanding = () => {
  return (
<WidthWrapper>
      <div className="flex flex-col md:flex-row items-center justify-between p-40">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Find the best service providers for your needs
          </h1>
          <p className="text-xl text-gray-600 mb-6 p-5">
            Browse by category, location or rating!
          </p>
          <div className="flex">
            <div className="relative flex-grow mr-2">
              <input
                type="text"
                placeholder="What service do you need?"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Search
            </button>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center">
            <img src={User} className="h-48 w-48 md:h-80 md:w-80 object-contain" alt="User" />

            </div>

          </div>
        </div>
      </div>
      </WidthWrapper>
  );
};

export default ServiceProviderLanding;