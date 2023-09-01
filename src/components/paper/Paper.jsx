import PropTypes from "prop-types";

const Paper = ({ data, order }) => {
  const orderIndex = order < 10 ? `0${order}${data?.title ? '. ' + data.title : ""}` : order;

  return (
    <div>
      <div className="pb-1 mb-4 font-bold text-2xl text-orange-basic">
        <p>{orderIndex}</p>
        <hr className="w-[35px] color-black-light" />
      </div>
      <div className="w-7/10 text-2xl text-black-light">{data.text}</div>
    </div>
  )
}

Paper.propTypes = {
  order: PropTypes.number, 
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string.isRequired 
  }), 
}

export default Paper;