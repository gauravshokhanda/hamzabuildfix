import Image from "next/image";
import quote_image from 'public/images/best-practice/quote-image.png'
export default function TutorReview() {
    return (
        <section className="md:space-y-6 text-black">
            <h2 className="text-3xl font-bold text-black mb-4 text-center">
                What our <span className="text-primary">Tutors</span> are saying
            </h2>
            <section className="bg-white p-6 md:p-10 rounded-lg shadow mx-auto max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Image Section */}
                    <div className="flex justify-center">
                        <Image
                            src={quote_image} // Add path to your image
                            alt="User photo"
                            className="rounded-lg w-1/2 h-full"

                        // objectFit="cover"
                        />
                    </div>

                    {/* Testimonial Text Section */}
                    <div className="md:col-span-2 flex flex-col justify-center">
                        <div className="flex items-start">
                            <span className="text-4xl text-primary font-bold leading-none mr-4">
                                “
                            </span>
                            <p className="text-gray-600 text-lg">
                                My favorite thing about <span className="text-primary">Tafawwaq</span> is the support they give to their creators, especially when they’re just starting out. They also make it extremely easy for you to use the platform.
                            </p>
                        </div>
                        <p className="mt-4 text-primary font-semibold">
                            — Kimmo Hakonen - Scrum Master at DaGear AB
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex justify-center md:justify-end md:col-span-3 mt-6 md:mt-0">
                        <button className="p-2 bg-gray-200 rounded-full mr-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                        <button className="p-2 bg-primary text-white rounded-full">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
}