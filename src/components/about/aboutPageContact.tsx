/** @format */
import arrow from '../../assets/blueArrow.png'
export const AboutContact = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[88vw] h-[25vh] rounded-xl bg-secondary mb-10 p-12">
      <div className="mb-1 text-xl text-white">
        Still Have Questions for Us?
      </div>
      <div className=" text-xs text-gray-100">
        Feel free to contact us and know more
      </div>

      <div className=" flex items-center m-2 bg-accent p-2 rounded-md gap-1 ">
        <div className="text-secondary">Contact us</div>
        <img className=' w-[3vh] h-[3vh]' src={arrow} alt="arrow" />
      </div>
    </div>
  );
};
