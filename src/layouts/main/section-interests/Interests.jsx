import Paper from "../../../components/paper/Paper";
import { INTEREST_LIST } from "../../../constants";

import question from "../../../assets/images/icons/question.svg";

const Interests = () => {
  return (
    <section id="whoAreWe" className="py-[50px] lg:py-[147px] bg-white-gray">
      <div className="container mx-4 lg:mx-auto">
        <div className="flex items-start mb-[76px]">
          <div className="w-7/10">
            <h2 className="mb-8 text-5xl text-black-light font-bold tracking-wide">Who we are</h2>
            <p className="text-2xl leading-[30px] text-orange-basic">We create products that have innovation and technology at their core. <br/> We value working with talented people that understand the possibilities of today.</p>
          </div>
          <div className="flex flex-1 justify-center">
            <img src={question} alt="Question" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-7/10">
          {
            INTEREST_LIST.map((interest, index) => <Paper key={index} data={interest} order={index + 1} />)
          }
        </div>
      </div>
    </section>
  )
};

export default Interests;