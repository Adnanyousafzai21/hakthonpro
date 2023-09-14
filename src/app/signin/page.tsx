"use client";

import React from "react";
import { Input } from "../component/ui/input";
import { Button } from "../component/ui/button";
import { useState } from "react";

const page = () => {
  const [right, setright] = useState(true);
  const signin = () => {
    setright(true);
  };
  const register = () => {
    setright(false);
  };
  return (
    <div className="w-[100%] my-10">
      <div className="mx-auto w-[90%] sm:w-[30%] border border-sky-200 rounded  overflow-hidden">
        <div className="flex justify-between px-10 md:px-20 my-10">
          <button
            onClick={signin}
            className={`${right ? " border-b border-b-sky-500 " : ""} `}
          >
            Sign In
          </button>
          <button
            onClick={register}
            className={` ${!right ? " border-b border-b-sky-500 " : ""}`}
          >
            Register
          </button>
        </div>
        <div className="min-h-[40vh]  relative ">
          <div className={`absolute  -mr-[350px] flex md:gap-16 gap-20 duration-1000  ${right?'md:ml-10 ml-6':"-ml-[320px]"} `}>
          <div className="flex flex-col items-center gap-3 w-[100%]  ">
              <Input
                type="text"
                placeholder="User Name"
                className="md:w-[300px] w-[250px] border border-sky-400 rounded py-4 px-2"
              />
              <Input
                type="email"
                placeholder="Enter Email"
                className="md:w-[300px] w-[250px] border border-sky-400 rounded py-4 px-2"
              />
              <Input
                type="password"
                placeholder="Enter password"
                className="md:w-[300px] w-[250px] border border-sky-400 rounded py-4 px-2"
              />

              <div className="text-center">
                <Button className="bg-sky-400 rounded text- px-8 py-4 ">Sign In</Button>
              </div>
            </div>
            <div className="flex flex-col   items-center gap-3 md:ml-16">
              <Input
                type="text"
                className="md:w-[300px] w-[250px] border border-sky-400 rounded py-4 px-2"
                placeholder="Enter Full name"
              />
              <Input
                type="email"
                className="md:w-[300px] w-[250px] border border-sky-400 rounded py-4 px-2"
                placeholder="Enter Email"
              />
              <Input
                type="password"
                className="md:w-[300px] w-[250px] border border-sky-400 rounded py-4 px-2"
                placeholder="Enter password"
              />
              <Input
                type="password"
                className="md:w-[300px] w-[250px] border border-sky-400 rounded py-4 px-2"
                placeholder="Re-type password"
              />
              <div className="text-center">
                <Button className="bg-sky-400 rounded text- px-8 py-4 ">Sign In</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
