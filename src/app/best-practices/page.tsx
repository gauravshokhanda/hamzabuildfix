import Benefits from "./Benefits";
import BestPractices from "./BestPractices";
import Hero from "./Hero";
import SuccessStories from "./SuccessStories";
import TutorReview from "./TutorReview";

export default function Page() {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <div className="flex flex-col gap-y-12">

                <Benefits />
                <TutorReview />
                <BestPractices />
                <SuccessStories />
            </div>
        </div>
    );
}