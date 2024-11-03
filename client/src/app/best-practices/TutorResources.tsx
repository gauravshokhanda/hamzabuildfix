'use client'
import Image, { StaticImageData } from "next/image";
import Heading from "../components/Heading";
import file_icon from 'public/images/best-practice/file-icon.png'
import Button from "../components/Button";
export default function TutorResources() {
    return (
        <div className="text-black">
            <Heading title="Tutor Resources" center />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-2 md:px-8 xl:px-16 px-4">
                <Card Heading="Lesson Planning" content={"Streamline your lesson creation with our easy-to-use templates and digital planners."} icon={file_icon} />

                <Card Heading="Educational Content" content={"Access a wealth of resources tailored to every subject and grade level for your future support."} icon={file_icon} />

                <Card Heading="Professional Courses" content={"Advance your skills with our expert-led courses and workshops that help’s you to grow with Tafawwaq."} icon={file_icon} />
            </div>
        </div>
    );
}

interface CardProps {
    Heading: string;
    content: string;
    icon: StaticImageData
}
const Card: React.FC<CardProps> = ({
    Heading,
    content,
    icon
}) => {

    return (<div className="flex flex-col justify-center items-center text-center bg-white rounded-xl shadow p-8">
        <div className=" bg-secondary p-2 rounded-xl mb-4">
            {/* Icon placeholder */}
            <Image src={icon} alt="icon" className="" width={40} height={40} />
        </div>
        <h3 className="text-lg font-semibold text-black mb-2">
            {Heading}
        </h3>
        <p>
            {content}
        </p>
        <div className="flex w-48 mt-4 p-4">

            <Button label="Discover content" classNames="rounded-xl" />
        </div>
    </div>)
}