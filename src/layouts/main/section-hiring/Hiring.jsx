import Button from "../../../components/button/Button";

import Woman from "../../../assets/images/woman.png";
import Man from "../../../assets/images/man.png";

const Hiring = () => {
  return (
    <section className="py-[140px] bg-white-gray">
      <div className="container mx-auto flex justify-between items-center">
        <img
            className="hidden h-10 md:block md:h-44 lg:h-64 xl:h-80"
            src={Woman}
            alt="Woman on the left side"
          />
          <div className="container flex justify-center">
            <div className="flex flex-col justify-center items-center w-[440px] gap-8 md:py-24 lg:py-36">
              <h4 className="text-4xl font-bold lg:text-5xl">We are hiring!</h4>
              <p className="text-xl text-orange-basic font-medium text-center lg:text-2xl text-coral">
                We&apos;re always looking for talented people to join and help
                build our startups. Check out our current openings
              </p>
              <Button text="See current openings" fill />
            </div>
          </div>
          <img
            className="hidden md:block md:h-44 lg:h-64 xl:h-80"
            src={Man}
            alt="Man on the right side"
          />
      </div>
    </section>
  )
};

export default Hiring;