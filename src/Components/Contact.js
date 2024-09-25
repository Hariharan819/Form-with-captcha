import React from "react";

const Contact = () => {
  return (
    <div className="border border-stone-200 shadow-md w-2/4">
      <h1 className="font-bold font-mono justify-center flex text-xl">
        Contact Us
      </h1>
      <form action="" className="flex flex-col p-2 m-2">
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="bg-gray-100 placeholder-gray-600 placeholder:px-5 rounded-lg placeholder:py-2"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="bg-gray-100 placeholder-gray-600 placeholder:px-2 palceholder:py-2 rounded-lg"
          />
        </div>
        <textarea
          className="bg-gray-100 placeholder:px-2 rounded-lg"
          name=""
          id=""
          cols=""
          rows=""
          placeholder="Message"
        ></textarea>
        <button className="bg-teal-700 p-2 rounded-sm my-2 w-20 flex justify-center ">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
