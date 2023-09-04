import Button from "../../../components/button/Button";

import woman from "../../../assets/images/icons/woman.svg";
import man from "../../../assets/images/icons/man.svg";

const Hiring = () => {
  const onShowHandler = () => {
    alert("This page currently does not exist in Test Environment.");
  }

  return (
    <section className="py-[140px] bg-white-gray">
      <div className="container mx-auto flex justify-between items-center">
        <img
            className="hidden h-10 md:block md:h-44 lg:h-64 xl:h-80"
            src={woman}
            alt="Woman on the left side"
          />
          <div className="container flex justify-center">
            <div className="flex flex-col justify-center items-center w-[440px] gap-7 md:py-24 lg:py-32">
              <h4 className="text-4xl font-bold tracking-wide lg:text-5xl">We are hiring!</h4>
              <p className="text-xl text-orange-basic font-medium text-center lg:text-2xl text-coral">
                We&apos;re always looking for talented people to join and help
                build our startups. Check out our current openings
              </p>
              <Button text="See current openings" handleChange={onShowHandler} styles="px-9" fill />
            </div>
          </div>
          <img
            className="hidden md:block md:h-44 lg:h-64 xl:h-80"
            src={man}
            alt="Man on the right side"
          />
      </div>
    </section>
  )
};

export default Hiring;