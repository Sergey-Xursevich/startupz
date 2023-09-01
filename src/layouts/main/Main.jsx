import { Fragment } from "react";

import Interests from "./section-interests/Interests";
import Values from "./section-values/Values";
import Goal from "./section-goal/Goal";
import Works from "./section-works/Works";

const Main = () => {
  return (
    <Fragment>
      <Interests />
      <Goal />
      <Values />
      <Works />
    </Fragment>
  )
};

export default Main;