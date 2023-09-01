import { Fragment } from "react";

import Interests from "./section-interests/Interests";
import Values from "./section-values/Values";
import Slogan from "../../components/slogan/Slogan";

import Works from "./section-works/Works";

const Main = () => {
  return (
    <Fragment>
      <Interests />
      <Slogan message="We love solving problems!" />
      <Values />
      <Works />
      <Slogan message="Startups create a world that actually is better. Any problem that can be solved, will be solved by a startup, and that is a huge opportunity." />
    </Fragment>
  )
};

export default Main;