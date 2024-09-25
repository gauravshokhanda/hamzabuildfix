import Image from "next/image";

interface CardProps {
    testimonial: { image: string; name: string; role: string; testimonial: string };
    bgClass: string;
}

const Card: React.FC<CardProps> = ({ testimonial, bgClass }) => {
    return (
        <div className="flex flex-col items-center justify-center h-[355px] w-full">
            <div className={`${bgClass} bg-no-repeat bg-cover bg-center w-80 px-12 p-4 flex flex-col justify-start items-center min-h-[348px]`}>
                {/* Image container */}
                <div className="-mt-4 absolute rounded-full w-16 h-16 max-w-36 max-h-36">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={100} // Image width (24 * 4 = 96px)
                        height={100}
                        className="rounded-full w-full h-full object-cover"
                    />
                </div>

                {/* Card content */}
                <div className="pt-16 flex flex-col items-center">
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    <p className="mt-4 text-gray-600 text-sm text-center">{testimonial.testimonial}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
