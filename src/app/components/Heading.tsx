"use client";

interface HeadingProps {
    title?: string;
    spanned?: string;
    subtitle?: string;
    center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center, spanned }) => {
    return (
        <div className={center ? "text-center" : "text-start"}>
            <h2 className="text-3xl font-bold text-black mb-4">
                {title} <span className="text-primary">{spanned}</span>
            </h2>
            <div className='font-light text-neutral-500 mt-2'>{subtitle}</div>
        </div>
    );
};

export default Heading;