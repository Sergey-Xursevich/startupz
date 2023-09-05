import { COMPANY_LIST, SOCIAL_LIST } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import logo from "./../../assets/images/icons/logo.svg";


library.add(fab, faTwitter, faInstagram, faLinkedin);

const Footer = () => {
  return (
    <footer id="contact" className="container mx-auto pt-[120px] grid grid-cols-4 gap-y-5 gap-x-56 overflow-hidden">
      <div className="flex flex-col items-start justify-between">        
        <a href="/"><img className="h-10" src={logo} alt="logo" /></a>
        <p className="text-lg text-black-light">
          © 2020 Startupz. <br /> All rights reserved.
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <h5 className="text-lg font-medium mb-5 text-black-light">Companies</h5>
        <ul className="h-2/3 flex flex-col justify-between">
          {
            COMPANY_LIST.map(({ text, href }, index) => <li key={index}><a href={href} className='text-alba'>{text}</a></li>)
          }
        </ul>
      </div>
      <div className="flex flex-col  justify-between">
        <h5 className="text-lg font-medium text-black-light">Contact</h5>
        <div className="flex flex-col">
          <p className="pt-3 font-light text-black-gray">
            World Trade Center - The Hague <br /> Prinses Margrietplantsoen
            33 <br /> 2595 AM The Hague <br /> The Netherlands
          </p>
          <a
            className="pt-5 font-medium transition-all text-alba hover:text-coral hover:font-medium"
            href="mailto:contact@codekeeper.co"
          >
            Send us an email
          </a>
        </div>
      </div>
      <div>
        <h5 className="text-lg font-medium text-black-light">Follow us</h5>
        <div className="flex flex-col gap-4 pt-3">
        <ul className="flex flex-col justify-between">
          {
            SOCIAL_LIST.map(({ type, href }, index) => {
              return (
                <li key={index}>
                  <a href={href}>
                    <FontAwesomeIcon className="py-1" icon={["fab", type]} size="xl" color="#46B8C8" />
                  </a>
                </li>
              )
            })
          }
        </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
