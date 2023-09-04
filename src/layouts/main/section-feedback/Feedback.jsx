import Form from "../../../components/form/Form";
import rocket from "./../../../assets/images/icons/rocket.svg";

const Feedback = () => {
  return (
    <section id="readyToBoard" className="overflow-hidden text-white bg-yellow-gray">
      <div className="container relative flex flex-col justify-center mx-auto py-[70px] z-10">
        <div className="text-[#FFF]">
          <h4 className="text-6xl font-bold">
            Are you ready <br className="hidden lg:block" /> to board this
            rocket ship?
          </h4>
          <p className="text-2xl py-8">
            Share your excitement with us.
          </p>
        </div>
        <div className="w-3/10">
          <Form />
        </div>
        <div className="absolute z-0 hidden -bottom-1 lg:block lg:-right-52 xl:right-32">
          <img className="" src={rocket} alt="Rocket ship launching" />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
