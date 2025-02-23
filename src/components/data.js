import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Core Features",
  desc: "Built on proven cognitive principles: dual coding theory + active recall for deeper learning.",
  image: benefitOneImg,
  bullets: [
    {
      title: "AI-Powered Text Processing",
      desc: "..",
      icon: <FaceSmileIcon />,
    },
    {
      title: " Gamified Flashcards UI",
      desc: "..",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Retention-Boosting Tools",
      desc: "..",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Vision",
  desc: "We’re not just building flashcards—we’re crafting a universal learning toolkit that grows with its users. Join us in making education accessible, engaging, and unforgettable.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Scalable & Versatile",
      desc: "Works for any subject—from quantum physics to poetry analysis.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Pedagogically Sound",
      desc: "Built on proven cognitive principles: dual coding theory + active recall for deeper learning.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Open-Source Potential",
      desc: "Foster a community of educators and learners to share and add more features",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
