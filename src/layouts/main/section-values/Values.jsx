import Paper from "../../../components/paper/Paper";
import { VALUE_LIST } from "../../../constants";

import bulb from "../../../assets/images/icons/bulb.svg";

const Values = () => {
  return (
    <section className="py-5 lg:py-[147px] bg-white-gray">
      <div className="container mx-7 lg:mx-auto">
        <div className="flex items-center mb-9 lg:mb-[85px]">
          <div className="lg:w-7/10">
            <h2 className="text-5xl text-black-light font-bold tracking-wide">Our core values</h2>
          </div>
          <div className="flex flex-1 justify-center">
            <img src={bulb} alt="Bulb" />
          </div>
        </div>
        <div className="flex justify-between flex-col lg:flex-row w-7/10">
          {
            VALUE_LIST.map((value, index) => <Paper key={index} data={value} order={index + 1} />)
          }
        </div>
      </div>
    </section>
  )
};

export default Values;