import cn from "classnames";
import PropTypes from "prop-types";

const Button = ({ text, fill = false }) => {
  const btnStyle = cn("px-4 py-2 text-lg rounded-2xl", {
    "text-[#FFFFFF] bg-alba": fill,
    "border border-alba": !fill
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