import React from "react";
import HeroComponent from "./components/landing-page/HeroComponent";
import SecureLearningEnvironment from "./components/landing-page/SecureLearningEnvironment";
import InteractiveLearningTools from "./components/landing-page/InteractiveLearningTools";
import BecomeTeacher from "./components/landing-page/BecomeTeacher";
import SUPPORT from "./components/landing-page/Support/main";
import FAQ from "./components/FAQ";
import FindTutor from "./components/landing-page/FindTutor";
import ClientTestimonials from "./components/landing-page/ClientTestimonials";
const page = () => {
  return (
    <div>
      <HeroComponent />
      <FindTutor />
      <SecureLearningEnvironment />
      <InteractiveLearningTools />
      <ClientTestimonials />
      <BecomeTeacher />
      <SUPPORT />
      <FAQ />
    </div>
  );
};

export default page;
