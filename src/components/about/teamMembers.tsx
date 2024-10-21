/** @format */

export const data = [
  {
    name: "",
    designation: "",
    description: "",
  },
  {
    name: "",
    designation: "",
    description: "",
  },
  {
    name: "",
    designation: "",
    description: "",
  },
  {
    name: "",
    designation: "",
    description: "",
  },
];

export const TeamMembers = () => {
  return (
    <div className="p-10">
      <div className="text-secondary font-semibold text-2xl mb-6">
        Meet our Team
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {data.map((member, index) => (
          <div key={index} className="">
            <div className="w-[20vw] h-[42vh] bg-[#D9D9D9] rounded-md  mb-5">
              {" "}
            </div>
            <div className="text-secondary font-medium">
              Name: {member.name}
            </div>
            <div className="text-secondary">
              Designation: {member.designation || "N/A"}
            </div>
            <p className="text-secondary">Description{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
