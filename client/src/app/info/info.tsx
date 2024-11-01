"use client";
import { useState } from "react";
import Polices from "../components/info/Tafawwaq's Policies/main";
import Educationalbackground from "../components/info/EducationalBackground";
import BusinessTafawwaq from "../components/info/BusinessTafawwaq";
import PublicProfile from "../components/info/PublicProfile";
import TutorContract from "../components/info/TutorContract";
import EmailConfirmation from "../components/info/EmailConfirmation";
import Relationship from "../components/info/Tafawwaq's Policies/Relationship";
import NewStudents from "../components/info/Tafawwaq's Policies/NewStudents";
import Payment from "../components/info/Tafawwaq's Policies/Payment";
import ImportantRules from "../components/info/Tafawwaq's Policies/ImportantRules";
import GeneralInformation from "../components/info/GeneralInformation";
import SubjectsTeach from "../components/info/SubjectsTeach";

// Define the types for step content
interface Section {
  heading: string;
  content?: string;
  Component?: React.FC;
}

interface StepContentWithSections {
  id: number;
  title: string;
  sections: Section[];
}

interface StepContentWithDescription {
  id: number;
  title: string;
  description: string;
}

type StepContent = StepContentWithSections | StepContentWithDescription;

function isStepContentWithSections(
  step: StepContent
): step is StepContentWithSections {
  return (step as StepContentWithSections).sections !== undefined;
}



const Info = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Tafawwaq's\nPolicies",
    "General\nInformation",
    "Subjects I\nTeach",
    "Educational\nBackground",
    "Business at\nTafawwaq",
    "Public\nProfile",
    "Tafawwaq Tutor\nContract",
    "Email\nConfirmation",
  ];


  const stepContent: StepContent[] = [
    {
      id: 1,
      title: "A First Things First",
      sections: [
        {
          heading: "Relationship",
          Component: Relationship,
        },
        {
          heading: "New Students",
          Component: NewStudents,
        },
        {
          heading: "Payment",
          Component: Payment,
        },
        {
          heading: "Important Rules",
          Component: ImportantRules,
        },
      ],
    },
    {
      id: 2,
      title: "General Information",
      description: "This is the general information for tutors joining Tafawwaq.",
    },
    {
      id: 3,
      title: "Subjects I Teach",
      description: "Please list the subjects you teach at Tafawwaq.",
    },
    {
      id: 4,
      title: "Educational Background",
      description: "Provide your educational background details.",
    },
    {
      id: 5,
      title: "Business at Tafawwaq",
      description: "Information about your business practices at Tafawwaq.",
    },
    {
      id: 6,
      title: "Public Profile",
      description: "Update your public profile that students can see.",
    },
    {
      id: 7,
      title: "Tafawwaq Tutor Contract",
      description: "Review and sign the tutor contract.",
    },
    {
      id: 8,
      title: "Email Confirmation",
      description: "Confirm your email address for notifications.",
    },
  ];



  // Component rendering based on current step
  const renderComponent = () => {
    if (currentStep === 1 && isStepContentWithSections(stepContent[0])) {
      return <Polices sections={stepContent[0].sections} />;
    }
    switch (currentStep) {
      case 2:
        return <GeneralInformation />;
      case 3:
        return <SubjectsTeach />;
      case 4:
        return <Educationalbackground />;
      case 5:
        return <BusinessTafawwaq />;
      case 6:
        return <PublicProfile />;
      case 7:
        return <TutorContract />;
      case 8:
        return <EmailConfirmation />;
      default:
        return (
          <p className="text-gray-600">
            No additional content available for this step.
          </p>
        );
    }
  };

  return (
    <div className="container mx-auto flex items-center py-20 flex-col">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        {/* Stepper Container */}
        <div className="flex flex-wrap justify-center relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${steps.length === index + 1 ? "" : "flex flex-1"
                } items-center mb-4 md:mb-0`}
            >
              <div
                onClick={() => setCurrentStep(index + 1)} // Clickable step
                className="flex items-center flex-col cursor-pointer" >
                <div
                  className={`absolute -mt-10 text-xs text-center font-semibold	 ${currentStep === index + 1 ? "text-primary" : "text-zinc-400"
                    }`}
                >
                  {step.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
                <div
                  className={`cursor-pointer w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center 
                   ${currentStep >= index + 1
                      ? "bg-primary text-white"
                      : "bg-white text-gray border border-gray"
                    }`}
                >
                  {/* <span>{index + 1}</span> */}
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block flex-grow relative">
                  <div
                    className={`${currentStep > index + 1
                      ? "bg-primary"
                      : "bg-light_gray"
                      } absolute inset-0`}
                    style={{ padding: 1 }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Conditional Rendering Based on the Step */}
      <div className="mt-10 w-full max-w-[1400px] p-6 bg-white shadow-md rounded-md">
        {/* Display Title */}
        <h2 className="text-center text-2xl font-bold mb-4">
          {stepContent[currentStep - 1]?.title}
        </h2>

        {/* Display Description if Available */}
        {(stepContent[currentStep - 1] as StepContentWithDescription)?.description && (
          <p className="text-center text-gray-600 mb-4">
            {(stepContent[currentStep - 1] as StepContentWithDescription)
              .description}
          </p>
        )}

        {/* Render the appropriate component for the current step */}
        {renderComponent()}

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          <button
            className={`px-4 py-2 text-white ${currentStep === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-500 hover:bg-gray-600"
              } rounded`}
            onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            className={`px-10 py-2 text-white ${currentStep === steps.length
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-primary   hover:opacity-80"
              } rounded`}
            onClick={() =>
              currentStep < steps.length && setCurrentStep(currentStep + 1)
            }
            disabled={currentStep === steps.length}
          >
            Next
          </button>
          <>
            {currentStep === steps.length &&
              <button
                className={`px-10 py-2 text-white 
                   bg-primary   hover:opacity-80
                   rounded`}
                onClick={() =>
                  currentStep < steps.length && setCurrentStep(currentStep + 1)
                }
              // disabled={currentStep === steps.length}
              >
                Go To Dashboard
              </button>
            }
          </>
        </div>
      </div>
    </div>
  );
};

export default Info;
