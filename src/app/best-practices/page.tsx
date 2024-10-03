import Benefits from "./Benefits";
import BestPractices from "./BestPractices";
import Community from "./Community";
import FAQ from "../components/FAQ";
import Hero from "./Hero";
import InspireAndTeach from "./InspireAndTeach";
import TutorResources from "./TutorResources";
import TutorReview from "./TutorReview";

export default function Page() {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <div className="flex flex-col gap-y-16">

                <Benefits />
                <TutorReview />
                <BestPractices />
                <TutorResources />
                <InspireAndTeach />
                <Community />
                <FAQ />
            </div>
        </div>
    );
}