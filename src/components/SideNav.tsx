import React from "react";

const SideNav = () => {
  return (
    <div className="w-64 bg-white p-4 border-r sm:block hidden">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block mb-1">Opportunity Type</label>
        <select className="w-full border p-2 rounded">
          <option value="">Select type</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Location</label>
        <select className="w-full border p-2 rounded">
          <option value="">Select Location</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Industry</label>
        <select className="w-full border p-2 rounded">
          <option value="">Select Industry</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Commitment</label>
        <select className="w-full border p-2 rounded">
          <option value="">Select Commitment</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Funding Type</label>
        <select className="w-full border p-2 rounded">
          <option value="">Select Type</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Education Level</label>
        <div className="flex flex-col space-y-1">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            High school
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Diploma/Certificate
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Bachelor's degree
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Masters degree +
          </label>
        </div>
      </div>
      <div className="mt-4">
        <button className="w-full bg-orange-500 text-white p-2 rounded">
          Apply Filter
        </button>
        <button className="w-full bg-gray-200 text-gray-700 p-2 rounded mt-2">
          Clear
        </button>
      </div>
    </div>
  );
};

export default SideNav;
