import MackbookTolq from "../assets/images/macbook-touch-bar-tolq.png";
import Mackbooklegalsite from "../assets/images/macbook-touch-bar-legalsite.png";
import iPadCodekeeper from "../assets/images/iPad-codekeeper.png";
import iPadFeedbackLack from "../assets/images/iPad-feedback-lack.png";

export const INTEREST_LIST = [
  {
    text: "We develop innovative products, systems and services",
  },
  {
    text: "Next we build teams to scale them into companies",
    style: "w-8/10",
  },
  {
    text: "Each startup solving one problem at a time",
  },
];

export const COMPANY_LIST = [
  {
    text: "Tolq",
    href: "https://tolq.com/",
  },
  {
    text: "LegalSite",
    href: "https://legalsite.co/",
  },
  {
    text: "Codekeeper",
    href: "https://codekeeper.co/index.html",
  },
  {
    text: "Feedback Labs",
    href: "https://feedbacklabs.org/",
  },
];

export const SOCIAL_LIST = [
  {
    type: "twitter",
    href: "https://twitter.com/codekeeperco",
  },
  {
    type: "linkedin",
    href: "https://www.linkedin.com/company/codekeeper/",
  },
  {
    type: "instagram",
    href: "https://www.instagram.com/",
  },
];

export const VALUE_LIST = [
  {
    title: "Innovation",
    text: "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.",
    style: "w-[600px]",
  },
  {
    title: "People",
    text: "Talent is what enable us to create great companies.",
    style: "w-[300px]",
  },
];

export const WORK_LIST = [
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
  },
];
