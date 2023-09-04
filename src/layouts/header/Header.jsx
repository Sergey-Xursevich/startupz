import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";

import Artwork from '../../assets/images/artwork.png';

const Header = () => {
  const onMoveToSeeOurWorks = () => {
    window.location = `#ourWorks`;
  };

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="flex justify-between">
        <div className="flex flex-col justify-start items-start">
          <h1 className="w-[410px] mb-6 leading-[85px] text-[85px] font-bold text-black-light">We Create Startups.</h1>
          <h3 className="mb-6 text-2xl text-orange-basic">We are startup studio that develops and launches new companies.</h3>
          <Button text={"See our works"} handleChange={onMoveToSeeOurWorks} fill />
        </div>
        <div>
          <img src={Artwork} alt="Artwork" style={{height: "100%", width: "705px"}} />
        </div>
      </div>
    </div>
  );
};

export default Header;