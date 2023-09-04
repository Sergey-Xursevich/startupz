import cn from "classnames";
import PropTypes from "prop-types";
import Button from "../button/Button";

const StackInfo = ({ data }) => {
  const { title, text, image } = data;

  const onShowHandler = () => {
    alert("This page currently does not exist in Test Environment.");
  }

  return (
    <div className="flex flex-col justify-between items-center w-[620px] px-[100px] py-12 rounded-[30px] shadow-stack-info-shadow">
      <p className={cn("inline-block mb-6 text-3xl font-bold", data.colorTitle)}>{title}</p>
      <p className="min-h-[60px] inline-block mb-5 text-base leading-5 tracking-normal text-center whitespace-break-spaces">{text}</p>
      <img src={image} alt="" className="mb-8"/>
      <Button text={"More"} handleChange={onShowHandler} styles="px-8" />      
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