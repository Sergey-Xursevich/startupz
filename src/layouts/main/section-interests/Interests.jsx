import Paper from "../../../components/paper/Paper";

import Question from "../../../assets/images/question.png";

const intrestList = [
  { text: "We develop innovative products, systems and services" },
  { text: "Next we build teams to scale them into companies" },
  { text: "Each startup solving one problem at a time" }
]

const Interests = () => {
  return (
    <div className="py-[147px] bg-white-gray">
      <div className="container mx-auto my-24">
        <div className="flex items-center mb-20">
          <div className="w-7/10">
            <h2 className="mb-8 text-5xl text-black-light font-bold">Who we are</h2>
            <p className="text-xl text-orange-basic">We create products that have innovation and technology at their core. <br/> We value working with talented people that understand the possibilities of today.</p>
          </div>
          <div className="flex flex-1 justify-center">
            <img src={Question} alt="Question" />
          </div>
        </div>
        <div className="flex justify-between w-8/10">
          {
            intrestList.map((interest, index) => <Paper key={index} data={interest} order={index + 1} />)
          }
        </div>

      </div>

    </div>
  )
};

export default Interests;