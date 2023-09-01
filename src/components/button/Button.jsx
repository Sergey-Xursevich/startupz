import cn from "classnames";
import PropTypes from "prop-types";

const Button = ({ text, fill = false }) => {
  const btnStyle = cn("px-5 py-2 text-lg rounded-[32px]", {
    "text-[#FFFFFF] bg-alba hover:opacity-80": fill,
    "border border-alba hover:opacity-50": !fill
  });

  return (
    <button type="button" className={btnStyle}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string, 
  fill: PropTypes.bool,
}

export default Button;