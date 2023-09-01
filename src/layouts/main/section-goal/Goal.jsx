import Thumb from "../../../assets/images/thumb.png";

const Goal = () => {
  return (
    <div className="h-60 flex justify-center items-center">
      <img src={Thumb} alt="Thumb" />
      <h2 className="mx-5 text-5xl font-bold text-orange-basic">We love solving problems!</h2>
      <img src={Thumb} alt="Thumb" className="transform -scale-x-100"  />
    </div>
  )
};

export default Goal;