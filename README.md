<div className="border border-stone-200 shadow-md w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 rounded-md mx-auto relative top-5 p-4">
      <h1 className="font-bold font-mono text-xl sm:text-2xl text-center pt-2">
        FAQ
      </h1>

      {/* First FAQ Item */}
      <div className="shadow-md rounded-md py-3 my-2 mx-2">
        <div className="flex items-center justify-between px-2 py-2">
          <p className="font-semibold text-sm sm:text-base">What is TECH CHECK?</p>
          <img
            className="h-4 w-4"
            src={toggleValue1 ? minusicon : plusicon}
            alt={toggleValue1 ? "minus icon" : "plus icon"}
            onClick={toggleEvent1}
          />
        </div>
        {toggleValue1 && (
          <div className="mx-3 py-2">
            <p className="font-semibold text-amber-500 text-sm sm:text-base">
              TECH CHECK is a company that provides intelligent solutions for
              clients with their recruitment and talent assessment processes.
            </p>
          </div>
        )}
      </div>

      {/* Second FAQ Item */}
      <div className="shadow-md rounded-md py-3 my-4 mx-2">
        <div className="flex items-center justify-between px-2 py-2">
          <p className="font-semibold text-sm sm:text-base">
            How does TECH CHECK ensure a personalized consulting experience?
          </p>
          <img
            className="h-4 w-4"
            src={toggleValue2 ? minusicon : plusicon}
            alt={toggleValue2 ? "minus icon" : "plus icon"}
            onClick={toggleEvent2}
          />
        </div>
        {toggleValue2 && (
          <div className="mx-3 py-2">
            <p className="font-semibold text-amber-500 text-sm sm:text-base">
              Our experts collaborate closely with you, understanding your
              unique challenges and goals. We tailor our services to meet your
              specific needs, ensuring a personalized consulting experience that
              empowers your business to thrive.
            </p>
          </div>
        )}
      </div>
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
    </div>