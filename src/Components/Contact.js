import React from "react";

const Contact = () => {
  return (
    <div className="border border-stone-200 shadow-md w-2/4 rounded-md">
      <h1 className="font-bold font-mono justify-center flex text-xl">
        Contact Us
      </h1>
      <form action="" className="flex flex-col p-2 m-2">
        <div className="flex justify-center space-x-11">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="bg-gray-200 placeholder-gray-600 placeholder:px-2 rounded-lg placeholder:py-2 p-2 w-56"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="bg-gray-200 placeholder-gray-600 placeholder:px-2 palceholder:py-2 rounded-lg p-2 w-56"
          />
        </div>
        <div className="flex justify-center pt-4 ">
          <textarea
            className="bg-gray-200 placeholder:p-3  placeholder-gray-600 rounded-lg w-4/6 h-32 "
            name=""
            id=""
            placeholder="Message"
          ></textarea>
        </div>

        <div className="flex justify-center pt-2 ">
          <button className="bg-teal-700 p-2 rounded-md my-2  flex justify-center w-4/6  ">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
