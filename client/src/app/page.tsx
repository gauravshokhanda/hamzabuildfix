import React from "react";
import HERO from "./components/landing-page/heroComponent/main";
import SECURE from "./components/landing-page/Secure/main";
import TOOLS from "./components/landing-page/LearningTools/main";
import WHYUS from "./components/landing-page/whyUS/main";
import SUPPORT from "./components/landing-page/Support/main";
import FAQ from "./components/FAQ";
import TUTOR from "../app/components/landing-page/tutorSection/main";
import ClientTestimonials from "./components/landing-page/ClientTestimonials/main";
const page = () => {
  return (
    <div>
      <HERO />
      <TUTOR />
      <SECURE />
      <TOOLS />
      <ClientTestimonials />
      <WHYUS />
      <SUPPORT />
      <FAQ />
    </div>
  );
};

export default page;
