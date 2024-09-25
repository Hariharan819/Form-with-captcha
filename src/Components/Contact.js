import React from "react";

const Contact = () => {
  return (
    <div className="border border-stone-200 shadow-md w-full sm:w-3/4 md:w-2/4 rounded-md mx-auto absolute bottom-7 left-0 right-0">
      <h1 className="font-bold font-mono justify-center flex text-xl py-4">
        Contact Us
      </h1> 
      <form
        action=""
        className="flex flex-col p-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-1 space-y-4 sm:space-y-0">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="bg-gray-200 placeholder-gray-600 rounded-lg p-2 w-full sm:w-2/6"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="bg-gray-200 placeholder-gray-600 rounded-lg p-2 w-full  sm:w-2/6"
          />
        </div>
        <div className="flex justify-center pt-4">
          <textarea
            className="bg-gray-200 placeholder-gray-600 rounded-lg w-full sm:w-4/6 h-32 p-3"
            name=""
            id=""
            placeholder="Message"
          ></textarea>
        </div>
        <div className="flex justify-center pt-4">
          <button className="bg-teal-700 text-white p-2 rounded-md my-2 w-full sm:w-4/6">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
