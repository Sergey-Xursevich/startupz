
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import Assistant from "../../assets/images/assistant.png";

library.add(faClose);

const DialogPopup = () => {
  return (
    <div className="absolute -top-20 -left-72 flex justify-between items-center">
      <div className="px-5 py-3 rounded-full rounded-br-none bg-alba text-[#FFF] mr-8">
        <p> Hi! I am Ben, your virtual assistant. <br/> How can I make your day better?</p>
      </div>
      <FontAwesomeIcon icon="close" size="xl" color="#939393" />      
    </div>
  );
};

const Dialog = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);

  const toggleVisiblePopup = () => {
    setIsShowPopup(!isShowPopup);
  }

  return (
    <div className="fixed bottom-10 md:right-20 xl:right-10 z-50">
      <button onClick={toggleVisiblePopup} className="relative transition-all p-2 bg-white rounded-full shadow-xl hover:bg-black-gray">
        <div className="flex items-center justify-center px-[17px] py-[18px] bg-white-gray-25 rounded-full">
          <img className="rounded-full" src={Assistant} alt="assistant" />
        </div>
        {isShowPopup && <DialogPopup />}
      </button>
    </div>
  );
};

export default Dialog;