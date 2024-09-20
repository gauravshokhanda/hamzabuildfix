import Image from "next/image";
import flex_sch from '../public/images/best-practice/flex-sch.svg'
import advanced_tech from '../public/images/best-practice/advanced-tech.svg'
import access_cb from '../public/images/best-practice/access-cb.svg'
import comp_compens from '../public/images/best-practice/comp-compens.svg'
import Heading from "../components/Heading";
export default function Benefits() {
    return (
        <section className="bg-gray-100 py-12 px-4 md:px-12">
            <div className="container mx-auto text-center">
                {/* Heading */}

                <Heading title="Why Tutor with" spanned="Tafawwaq?" center={true} subtitle="Discover the benefits that make tutoring with us truly rewarding." />
                {/* Icon grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                    <Card Heading="Flexible Scheduling" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris," icon={flex_sch} />
                    <Card Heading="Competitive Compensation" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris," icon={comp_compens} />
                    <Card Heading="Access to a Broad Client Base" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris," icon={access_cb} />
                    <Card Heading="Advanced Teaching Tools" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris," icon={advanced_tech} />
                </div>
            </div>
        </section>
    );
}
interface CardProps {
    Heading: string;
    content: string;
    icon: string
}
const Card: React.FC<CardProps> = ({
    Heading,
    content,
    icon
}) => {

    return (<div className="flex flex-col items-center">
        <div className="bg-primary text-white rounded-full p-6 mb-4">
            {/* Icon placeholder */}
            <Image src={icon} alt="icon" className="" width={24} height={24} />
        </div>
        <h3 className="text-lg font-semibold text-black mb-2">
            {Heading}
        </h3>
        <p className="text-gray-500">
            {content}
        </p>
    </div>)
}