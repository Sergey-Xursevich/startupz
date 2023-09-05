import StackInfo from "../../../components/stack-info/StackInfo";
import { WORK_LIST } from "../../../constants";

const Works = () => {
  return (
    <section id="ourWorks" className="container mx-auto flex flex-col justify-center items-center py-10 md:py-[140px]">
      <h2 className="mb-14 text-5xl font-bold text-black-light tracking-wide">Our works</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        { WORK_LIST.map((data, index) => <StackInfo key={index} data={data} />) } 
      </div>
    </section>
  );
};

export default Works;