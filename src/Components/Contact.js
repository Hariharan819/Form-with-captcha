import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
//6Lfoe04qAAAAAEtyHhLn-lqcEBUrlXl3yXD4jGYY
const Contact = () => {
  const [captchavalue, setcaptchavalue] = useState(null);
  function onChange(value) {
    setcaptchavalue(value);
  }
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "4afe32ff-cc6e-45d2-b8a8-a8cdd6e301d0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      alert("Error", data);
      console.log(data.message);
    }
  };
  return (
    <div className="border border-stone-200 shadow-md w-full sm:w-3/4 md:w-2/4 rounded-md mx-auto md:mt-2 sm:mt-1 lg:mt-8">
      {/* // absolute bottom-0 left-0 right-0 md:absolute md:bottom-6 md:left-0 md:right-0 */}
      <h1 className="font-bold font-mono justify-center flex text-xl py-3 mx-2 ">
        Contact Us
      </h1>
      <form action="" className="flex flex-col p-4" onSubmit={onSubmit}>
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-1 space-y-4 sm:space-y-0">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            className="bg-gray-200 placeholder-gray-600 rounded-lg p-2 w-full sm:w-2/6"
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            className="bg-gray-200 placeholder-gray-600 rounded-lg p-2 w-full  sm:w-2/6"
            required
          />
        </div>
        <div className="flex justify-center pt-4">
          <textarea
            className="bg-gray-200 placeholder-gray-600 rounded-lg w-full sm:w-4/6 h-32 p-3"
            name="message"
            id=""
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div className="flex justify-center mt-2 -mb-5">
          <ReCAPTCHA
            sitekey="6Lfoe04qAAAAAEtyHhLn-lqcEBUrlXl3yXD4jGYY"
            onChange={onChange}
          />
        </div>
        <div className="flex justify-center pt-4">
          <button className="bg-teal-700 text-white p-2 rounded-md my-2 w-full sm:w-4/6" disabled={!captchavalue}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
