import React from "react";
import { Input } from "../component/ui/input";
import { Button } from "../component/ui/button";
import { Textarea } from "../component/ui/textarea";

const Contact = () => {
  return (
    <div className="">
      <div className="w-[85%]  md:w-[60%] h-min-[60vh] mx-auto my-10 rounded border border-sky-500 pb-5">
        <h3 className="text-center my-10 text-sky-500 text-bolder">
          Contact Us
        </h3>
        <div className="flex flex-col items-center gap-y-5 mt-7">
          <div className="flex justify-center flex-wrap gap-5">
            <Input
              type="text"
              placeholder="Frist Name"
              className="w-60 md:w-48 h-6    p-4 rounded focus:border-sky-400"
            />
            <Input
              type="text"
              placeholder="Last Name"
              className="w-60 md:w-48 h-6   p-4 rounded focus:border-sky-400 "
            />
          </div>
          <Input
            type="text"
            placeholder="Email"
            className="w-60 md:w-[405px] h-6    p-4 rounded focus:border-sky-400 "
          />
          <Textarea
            placeholder="Massage...." className="w-60 md:w-[405px] h-30   text-start rounded focus:border-sky-400 "/>
    
    <Button className="bg-sky-300 rounded text-sm text-white h-[30px] w-[120px] hover:bg-white hover:text-black hover:border border-black">
                      Send
                    </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
