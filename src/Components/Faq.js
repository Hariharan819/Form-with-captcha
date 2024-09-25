import React, { useState } from "react";
import { minusicon, plusicon } from "../Utilis/Constant";

const Faq = () => {
  const [togglevalue, settogglevalue] = useState(false);
  const [togglevalue2, settogglevalue2] = useState(false);
  const toggleevent = () => {
    if (togglevalue2) settogglevalue2(!settogglevalue2);
    settogglevalue(!togglevalue);
  };
  const toggleevent2 = () => {
    if (togglevalue) settogglevalue(!settogglevalue);
    settogglevalue2(!togglevalue2);
  };
  return (
    <div className="border border-stone-200 shadow-md w-full sm:w-3/4 md:w-2/4 rounded-md mx-auto absolute  top-4 left-0 right-0">
      <h1 className="font-bold font-mono text-xl flex justify-center pt-2">
        FAQ
      </h1>
      <div className="shadow-md rounded-md py-2 my-2 mx-2">
        <div className=" flex">
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

      <div className="shadow-md rounded-md  py-2 my-2 mx-2 ">
        <div className="flex">
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
  );
};

export default Faq;
