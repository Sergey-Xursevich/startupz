import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";

import Artwork from '../../assets/images/artwork.png';

const Header = () => {
  const onMoveToSeeOurWorks = () => {
    window.location = `#ourWorks`;
  };

  return (
    <div className="container mx-4 md:mx-auto">
      <Navbar />
      <div className="flex justify-between">
        <div className="flex flex-1 flex-col justify-start items-center xl:items-start mb-5 xl:mb-0">
          <h1 className="xl:w-[410px] mb-1 md:mb-6 text-4xl leading-[85px] lg:text-[85px] font-bold text-black-light">We Create Startups.</h1>
          <h3 className="mb-6 text-xl lg:text-2xl text-orange-basic">We are startup studio that develops and launches new companies.</h3>
          <Button text={"See our works"} handleChange={onMoveToSeeOurWorks} fill />
        </div>
        <div className="hidden lg:inline-block">
          <img src={Artwork} alt="Artwork" className="h-full w-full lg:w-[705px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;