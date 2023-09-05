import Form from "../../../components/form/Form";
import rocket from "./../../../assets/images/icons/rocket.svg";

const Feedback = () => {
  return (
    <section id="readyToBoard" className="overflow-hidden text-white bg-yellow-gray">
      <div className="container mx-7 lg:mx-auto relative flex flex-col justify-center py-[70px] z-10">
        <div className="mb-3 text-[#FFF]">
          <h4 className="text-4xl lg:text-6xl font-bold">
            Are you ready <br className="hidden lg:block" /> to board this
            rocket ship?
          </h4>
          <p className="text-2xl py-5">
            Share your excitement with us.
          </p>
        </div>
        <div className="w-7/10 md:w-6/10 xl:w-3/10"><Form /></div>
        <div className="absolute z-0 hidden -bottom-1 lg:block lg:-right-52 xl:right-32">
          <img className="" src={rocket} alt="Rocket ship launching" />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
