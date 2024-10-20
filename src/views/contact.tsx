/** @format */

import { ContactForm } from "../components/contact/contact-form";
import { FormSection } from "../components/contact/form-section";
import { Testimonial } from "../components/home/testimonial";

export const Contact = () => {
  return (
    <>
      {/* Contact page gray box*/}
      <div className=" ml-16 mt-10 bg-[#D9D9D9] w-[88%] h-[24rem] rounded-lg  "></div>

      {/* Contact form*/}

      <FormSection />
      <Testimonial />
    </>
  );
};
