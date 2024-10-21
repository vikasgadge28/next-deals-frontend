/** @format */

export const data = [
  {
    description: "Access to real estate at your fingertips.",
  },
  {
    description: "Drive innovation by understanding future trends.",
  },
  {
    description: "Let more people join this industry.",
  },
  {
    description: "To make real estate investment 100% risk free and guarantee returns.",
  },
];

export const Vision = () => {
  return (
    <div className=" w-full bg-secondary h-[35vh] rounded-b-2xl p-12">
      <div className=" text-white font-semibold text-2xl mb-6">
        Meet our Team
      </div>

      <div className="  grid grid-cols-1 md:grid-cols-4 ">
        {data.map((member, index) => (
          <div key={index} className=" text-sm p-6 font-medium rounded-lg w-[22vw] h-[15vh] bg-accent ">   
            <p className="text-secondary text-center">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
