import Benefits from "./Benefits";
import BestPractices from "./BestPractices";
import Hero from "./Hero";
import InspireAndTeach from "./InspireAndTeach";
import SuccessJourneys from "./SuccessJourneys";
import SuccessStories from "./SuccessStories";
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
                <SuccessStories />
                <SuccessJourneys />
                <TutorResources />
                <InspireAndTeach />
            </div>
        </div>
    );
}