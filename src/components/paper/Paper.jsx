import cn from "classnames";
import PropTypes from "prop-types";

const Paper = ({ data, order }) => {
  const orderIndex = order < 10 ? `0${order}${data?.title ? `. ${data.title}` : ""}` : order;
  const styles = cn("text-3xl text-black-light", data?.style);

  return (
    <div className="mb-5 lg:mb-0">
      <div className="pb-1 mb-7 font-bold text-2xl">
        <p className="text-3xl inline-block mb-3 text-orange-basic">{orderIndex}</p>
        <hr className="w-[50px] color-black-light" />
      </div>
      <div className={styles}>{data.text}</div>
    </div>
  )
}

Paper.propTypes = {
  order: PropTypes.number, 
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    style: PropTypes.string,
  }), 
}

export default Paper;