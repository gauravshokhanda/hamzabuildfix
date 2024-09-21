import Heading from "../components/Heading";
import TutorCards from "../components/TutorCards";

export default function SuccessJourneys() {
    return (
        <section className="bg-background_blue py-12 px-4 md:px-12">
            <Heading title="What Our Tutors Share" center={true} />
            <Heading spanned="Inspiring Success Journeys" center={true} />
            <TutorCards limit={4} />
        </section>
    );
}