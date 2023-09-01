import PropTypes from "prop-types";
import Button from "../button/Button";

const StackInfo = ({ data }) => {
  const { title, text, image, url } = data;

  return (
    <div className="container mx-auto w-7/10 flex flex-col items-center rounded-2xl shadow-stack-info-shadow">
      <p className="text-lg">{title}</p>
      <p>{text}</p>
      <img src={image} alt="" />
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
  })
}

export default StackInfo;