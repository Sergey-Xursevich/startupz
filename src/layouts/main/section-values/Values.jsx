import Bulb from "../../../assets/images/bulb.png";
import Paper from "../../../components/paper/Paper";

const valueList = [
  {
    title: "Innovation",
    text: "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.",
    width: 625
  },
  {
    title: "People",
    text: "Talent is what enable us to create great companies.",
    width: 300
  }
]

const Values = () => {
  return (
    <div className="py-[147px] bg-white-gray">
      <div className="container mx-auto my-24">
        <div className="flex items-center mb-20">
          <div className="w-7/10">
            <h2 className="text-5xl text-black-light font-bold">Our core values</h2>
          </div>
          <div className="flex flex-1 justify-center">
            <img src={Bulb} alt="Buld" />
          </div>
        </div>
        <div className="flex justify-between w-9/10">
          {
            valueList.map((value, index) => <Paper key={index} data={value} order={index + 1} />)
          }
        </div>

      </div>

    </div>
  )
};

export default Values;