/** @format */

import { Input } from "@material-tailwind/react";

export const ContactForm = () => {
  return (
    <>
      <div className="flex gap-[4vh] mb-16">
        <div>
           {/* First name */}
          <div className=" w-[25vw]">
            <h4 className="py-2">First name</h4>
            <div>
              <Input label="Enter your city"></Input>
            </div>
          </div>
           {/* Last name*/}
          <div className=" w-[25vw] ">
            <h4 className="py-2">Last name</h4>
            <div>
              <Input label="Enter your last name"></Input>
            </div>
          </div>
           {/* Message/query*/}
          <div className=" absolute w-[54vw]  ">
            <h4 className="py-2">message/query</h4>
            <div >
              <Input className="h-20" type="tel" label="Enter your message/query"></Input>
            </div>
          </div>
        </div>

        <div>
           {/* e-mail */}
          <div className=" w-[25vw]">
            <h4 className="py-2">E-mail</h4>
            <div>
              <Input type="email" label="Enter your e-mail"></Input>
            </div>
          </div>
           {/* Phone number*/}
          <div className=" w-[25vw]">
            <h4 className="py-2">Phone number</h4>
            <div>
              <Input type="tel" label="Enter your phone number"></Input>
            </div>
          </div>
        </div>
      </div>

         
    </>
  );
};
