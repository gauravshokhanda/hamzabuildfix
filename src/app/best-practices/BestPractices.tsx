import Image from "next/image";
import Heading from "../components/Heading";
import lesson_planning from './../public/images/best-practice/lesson-planning.svg'
import classroom from './../public/images/best-practice/classroom.svg'
import communication from './../public/images/best-practice/communication.svg'
export default function BestPractices() {
    return (
        <section className="bg-background_blue text-black py-12 px-4 md:px-12">
            <div className="container mx-auto text-center">
                {/* Heading */}

                <Heading title="Best Practices for" spanned="Online Tutoring?" center={true} />
                {/* Icon grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    <Card Heading="Lesson Planning" content={["Plan lessons that are interactive and tailored to your students’ needs.", "Incorporate multimedia elements like videos, quizzes, and presentations to make learning engaging.", "Set clear objectives for each lesson to keep students focused and motivated."]} icon={lesson_planning} />

                    <Card Heading="Classroom Management" content={["Establish clear rules and expectations from the start to maintain order.", "Use breakout rooms or small groups to encourage collaboration among students.", "Monitor student engagement regularly and address distractions promptly."]} icon={classroom} />

                    <Card Heading="Effective Communication" content={["Plan lessons that are interactive and tailored to your students’ needs.", "Incorporate multimedia elements like videos, quizzes, and presentations to make learning engaging.", "Set clear objectives for each lesson to keep students focused and motivated."]} icon={communication} />
                </div>
            </div>
        </section>
    );
}

interface CardProps {
    Heading: string;
    content: string[];
    icon: string
}
const Card: React.FC<CardProps> = ({
    Heading,
    content,
    icon
}) => {

    return (<div className="flex flex-col text-start bg-white rounded-xl shadow-xl p-8">
        <div className=" text-white rounded-full  mb-4">
            {/* Icon placeholder */}
            <Image src={icon} alt="icon" className="" width={40} height={40} />
        </div>
        <h3 className="text-lg font-semibold text-black mb-2">
            {Heading}
        </h3>
        <ul className="list-disc ml-5">
            {content.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>)
}
