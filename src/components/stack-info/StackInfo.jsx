import cn from "classnames";
import PropTypes from "prop-types";
import Button from "../button/Button";

const StackInfo = ({ data }) => {
  const { title, text, image } = data;

  return (
    <div className="flex flex-col justify-between items-center w-[588px] px-[100px] py-11 rounded-[30px] shadow-stack-info-shadow">
      <p className={cn("inline-block mb-6 text-3xl font-bold", data.colorTitle)}>{title}</p>
      <p className="inline-block mb-6 text-base text-center">{text}</p>
      <img src={image} alt="" className="mb-6"/>
      <Button text={"More"} />      
    </div>
  )
};

StackInfo.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.any,
    url: PropTypes.string,
    colorTitle: PropTypes.string,
  })
}

export default StackInfo;