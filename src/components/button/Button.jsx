import cn from "classnames";
import PropTypes from "prop-types";

const Button = ({ text, fill = false, styles }) => {
  const btnStyle = cn("px-5 py-2 text-lg rounded-[32px]", {
    "text-[#FFFFFF] bg-alba hover:opacity-80": fill,
    "border border-alba hover:opacity-50": !fill
  }, styles);

  return (
    <button type="button" className={btnStyle}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string, 
  fill: PropTypes.bool,
  styles: PropTypes.string
}

export default Button;