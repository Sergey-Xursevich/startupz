import PropTypes from "prop-types";
import thumb from "../../assets/images/icons/thumb.svg";

const Slogan = ({ message }) => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center py-[140px]">
        <img src={thumb} alt="Thumb" style={{width: "60px", height: "100%"}} />
        <h2 className="w-6/10 mx-9 px-5 text-[40px] leading-[45px] font-bold text-orange-basic text-center">{message}</h2>
        <img src={thumb} alt="Thumb" className="transform -scale-x-100" style={{width: "60px", height: "100%"}}  />
      </div>
    </div>
  )
};

Slogan.propTypes = {
  message: PropTypes.string
}

export default Slogan;