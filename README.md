<!-- 
 <div className="border border-stone-200 shadow-md w-full sm:w-3/4 md:w-2/4 rounded-md mx-auto absolute bottom-0 left-0 right-0 md:absolute md:bottom-6 md:left-0 md:right-0">
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
        <div className="flex justify-center pt-4">
          <button className="bg-teal-700 text-white p-2 rounded-md my-2 w-full sm:w-4/6">
            Send
          </button>
        </div>
      </form>
    </div>





     <div className="border border-stone-200 shadow-md w-full sm:w-3/4 md:w-2/4 rounded-md mx-auto absolute top-5 left-0 right-0">
      <h1 className="font-bold font-mono text-xl flex justify-center pt-2">
        FAQ
      </h1>
      <div className="shadow-md rounded-md py-3 my-2 mx-2">
        <div className=" flex px-2 py-2">
          {!togglevalue && (
            <img
              className="h-4 my-1 px-2"
              src={plusicon}
              alt=""
              onClick={toggleevent}
            />
          )}
          {togglevalue && (
            <img
              className="h-4 my-1 px-2"
              src={minusicon}
              alt=""
              onClick={toggleevent}
            />
          )}
          <p className="font-semibold"> What is TECH CHECK?</p>
        </div>
        {togglevalue && (
          <div className="mx-3 py-2">
            <p className="font-semibold text-amber-500">
              TECH CHECK is a company that provides intelligent solutions for
              clients with their recruitment and talent assessment processes.
            </p>
          </div>
        )}
      </div>

      <div className="shadow-md rounded-md  py-2 my-4 mx-2  ">
        <div className="flex px-2 py-2">
          {!togglevalue2 && (
            <img
              className="h-4 my-1 px-2"
              src={plusicon}
              alt=""
              onClick={toggleevent2}
            />
          )}
          {togglevalue2 && (
            <img
              className="h-4 my-1 px-2"
              src={minusicon}
              alt=""
              onClick={toggleevent2}
            />
          )}

          <p className="font-semibold">
            {" "}
            How does TECH CHECK ensure a personalized consulting experience?
          </p>
        </div>
        {togglevalue2 && (
          <div className="mx-3 py-2">
            <p className="font-semibold text-amber-500">
              Our experts collaborate closely with you, undestanding your unique
              challenges and goals. We tailor our services to meet your specific
              needs, ensuring a personalized consulting experience that empowers
              your buisness to thrive.
            </p>
          </div>
        )}
      </div>
    </div> -->