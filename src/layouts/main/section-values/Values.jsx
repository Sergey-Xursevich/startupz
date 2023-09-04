import Paper from "../../../components/paper/Paper";

import bulb from "../../../assets/images/icons/bulb.svg";

const valueList = [
  {
    title: "Innovation",
    text: "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.",
    style: "w-[600px]"
  },
  {
    title: "People",
    text: "Talent is what enable us to create great companies.",
    style: "w-[300px]"
  }
]

const Values = () => {
  return (
    <section className="py-[147px] bg-white-gray">
      <div className="container mx-auto my-24">
        <div className="flex items-center mb-[85px]">
          <div className="w-7/10">
            <h2 className="text-5xl text-black-light font-bold tracking-wide">Our core values</h2>
          </div>
          <div className="flex flex-1 justify-center">
            <img src={bulb} alt="Bulb" />
          </div>
        </div>
        <div className="flex justify-between w-7/10">
          {
            valueList.map((value, index) => <Paper key={index} data={value} order={index + 1} />)
          }
        </div>
      </div>
    </section>
  )
};

export default Values;