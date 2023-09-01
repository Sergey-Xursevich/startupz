import Bulb from "../../../assets/images/bulb.png";
import Paper from "../../../components/paper/Paper";

const valueList = [
  {
    title: "Innovation",
    text: "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models."
  },
  {
    title: "People",
    text: "Talent is what enable us to create great companies."
  }
]

const Values = () => {
  return (
    <div className="bg-white-gray">
      <div className="container mx-auto my-24">
        <div className="flex justify-between items-center mb-10">
          <div className="w-5/10">
            <h2 className="text-4xl text-black-light font-bold">Our core values</h2>
          </div>
          <img src={Bulb} alt="Bulb" />
        </div>
        <div className="flex justify-between w-7/10">
          {
            valueList.map((value, index) => <Paper key={index} data={value} order={index + 1} />)
          }
        </div>

      </div>

    </div>
  )
};

export default Values;