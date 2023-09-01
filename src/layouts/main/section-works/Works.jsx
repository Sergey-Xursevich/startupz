import MackbookTolq from "../../../assets/images/macbook-touch-bar-tolq.png";
import Mackbooklegalsite from "../../../assets/images/macbook-touch-bar-legalsite.png";
import iPadCodekeeper from "../../../assets/images/iPad-codekeeper.png";
import iPadFeedbackLack from "../../../assets/images/iPad-feedback-lack.png";
import StackInfo from "../../../components/stack-info/StackInfo";

const workList = [
  {
    title: "Tolq",
    colorTitle: "text-green-light",
    text: "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.",
    image: MackbookTolq,
    url: "/",
  },
  {
    title: "Feedback Labs",
    colorTitle: "text-aqua-light",
    text: "Feedback Labs turns feedback into actionable insights for your team.",
    image: iPadFeedbackLack,
    url: "/",
  },
  {
    title: "Codekeeper",
    colorTitle: "text-sky-light",
    text: "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
    image: iPadCodekeeper,
    url: "/",
  },
  {
    title: "LegalSite",
    colorTitle: "text-purple-light",
    text: "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
    image: Mackbooklegalsite,
    url: "/",
  }
];


const Works = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center py-[140px]">
      <h2 className="mb-14 text-3xl font-bold text-black-light">Our works</h2>
      <div className="grid grid-cols-2 gap-6">
        {
          workList.map((data, index) => <StackInfo key={index} data={data} />)
        } 
      </div>
    </div>
  );
};

export default Works;