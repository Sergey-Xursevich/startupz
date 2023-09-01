import PropTypes from "prop-types";

const Paper = ({ data, order }) => {
  const orderIndex = order < 10 ? `0${order}${data?.title ? `. ${data.title}` : ""}` : order;

  return (
    <div>
      <div className="pb-1 mb-4 font-bold text-2xl">
        <p className="inline-block mb-5 text-orange-basic">{orderIndex}</p>
        <hr className="w-[50px] color-black-light" />
      </div>
      <div className={`${data?.width ? `w-[${data.width}px]` : 'w-8/10'} text-3xl text-black-light`}>{data.text}</div>
    </div>
  )
}

Paper.propTypes = {
  order: PropTypes.number, 
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    width: PropTypes.number,
  }), 
}

export default Paper;