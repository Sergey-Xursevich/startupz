import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";

import Artwork from '../../assets/images/artwork.png'

const Header = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="flex justify-between">
        <div className="flex flex-col justify-between items-start h-80">
          <h1 className="text-8xl font-bold text-black-light">We Create Startups.</h1>
          <h3 className="text-2xl text-orange-basic">We are startup studio that develops and launches new companies.</h3>
          <Button text={"See our works"} fill />
        </div>
        <div className="">
          <img src={Artwork} alt="Artwork" />
        </div>
      </div>
    </div>
  );
};

export default Header;