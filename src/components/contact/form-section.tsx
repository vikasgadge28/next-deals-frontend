/** @format */

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ContactForm } from "./contact-form";

export const FormSection = () => {
  return (
    <div className=" flex p-16 gap-8 items-center md:flex-none">
    <div className="flex flex-col">
      <div className="text-2xl">
        We are based in <span className="text-secondary ">Bhopal</span>
      </div>
      {/* support card */}
      <Card className="mt-6 w-[30vw] ">
        <CardBody className="bg-secondaryBlue rounded-lg">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Support
          </Typography>
          <Typography color="blue-gray">
            <span role="img" aria-label="phone">
              📞
            </span>{" "}
            011-69290723
          </Typography>
          <Typography color="blue-gray">
            <span role="img" aria-label="email">
              ✉️
            </span>{" "}
            support@nextopson.in
          </Typography>
          <Typography color="blue" variant="h6">
            We Are Available 24*7 on on support.
          </Typography>
        </CardBody>
      </Card>
      {/* address card */}
      <Card className="mt-6 w-[30vw] ">
        <CardBody className="bg-secondaryBlue rounded-lg">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Corporate office
          </Typography>
          <Typography color="blue-gray" variant="p">
            Nextopson, C1 Indus Apartment, Shahpura, Bhopal, Madhya
            Pradesh-462026 support@nextopson.in
          </Typography>
        </CardBody>
      </Card>
    </div>

     <ContactForm/>
    </div>
  );
};
