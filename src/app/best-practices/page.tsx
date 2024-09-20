import Benefits from "./Benefits";
import Hero from "./Hero";
import TutorReview from "./TutorReview";

export default function Page() {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <div className="flex flex-col gap-y-12">

                <Benefits />
                <TutorReview />
            </div>
        </div>
    );
}