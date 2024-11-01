'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper as SwiperCore } from 'swiper'; // Import the correct Swiper type

import { Pagination, Navigation } from 'swiper/modules';
import backArrow from 'public/images/landing-page/back.png'
import nextArrow from 'public/images/landing-page/next.png'
import Image from 'next/image';

export default function ClientTestimonials() {
    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null); // Store Swiper instance
    const [slidesPerView, setSlidesPerView] = useState<number | "auto" | undefined>(1); // Track current slidesPerView

    const bs = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    };

    const testimonials = [
        {
            name: 'Hannah Schmitt',
            role: 'Lead Designer',
            image: 'https://images.pexels.com/photos/3807747/pexels-photo-3807747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            testimonial:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.',
        },
        {
            name: 'Hannah Schmitt',
            role: 'Lead Designer',
            image: 'https://images.pexels.com/photos/3807747/pexels-photo-3807747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            testimonial: 'Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus cras.',
        },
        {
            name: 'Hannah Schmitt',
            role: 'Lead Designer',
            image: 'https://images.pexels.com/photos/3807747/pexels-photo-3807747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            testimonial:
                'Consequat duis diam lacus cras. Faucibus venenatis felis id augue sit cursus pellentesque enim.',
        },
        {
            name: 'Hannah Schmitt',
            role: 'Lead Designer',
            image: 'https://images.pexels.com/photos/3807747/pexels-photo-3807747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            testimonial:
                'Consequat duis diam lacus cras. Faucibus venenatis felis id augue sit cursus pellentesque enim.',
        },
        {
            name: 'Hannah Schmitt',
            role: 'Lead Designer',
            image: 'https://images.pexels.com/photos/3807747/pexels-photo-3807747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            testimonial:
                'Consequat duis diam lacus cras. Faucibus venenatis felis id augue sit cursus pellentesque enim.',
        },
        {
            name: 'Hannah Schmitt',
            role: 'Lead Designer',
            image: 'https://images.pexels.com/photos/3807747/pexels-photo-3807747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            testimonial:
                'Consequat duis diam lacus cras. Faucibus venenatis felis id augue sit cursus pellentesque enim.',
        },
    ];

    const getBackgroundClass = (index: number, slidesPerView: number | "auto" | undefined): string => {
        if (slidesPerView === 1) {
            return 'bg-reviewMiddle';
        } else if (slidesPerView === 2) {
            return index % 2 === 0 ? 'bg-reviewLeft' : 'bg-reviewRight';
        } else if (slidesPerView === 3) {
            if (index % 3 === 0) return 'bg-reviewLeft';
            if (index % 3 === 1) return 'bg-reviewMiddle';
            return 'bg-reviewRight';
        }
        return '';
    };

    // Update slidesPerView when Swiper is resized or the breakpoint changes
    useEffect(() => {
        if (swiperInstance) {
            const updateSlidesPerView = () => {
                setSlidesPerView(swiperInstance.params.slidesPerView);
            };

            swiperInstance.on('resize', updateSlidesPerView);
            swiperInstance.on('breakpoint', updateSlidesPerView);

            // Cleanup listeners when the component unmounts or swiperInstance changes
            return () => {
                swiperInstance.off('resize', updateSlidesPerView);
                swiperInstance.off('breakpoint', updateSlidesPerView);
            };
        }
    }, [swiperInstance]);

    return (
        <div className='bg-background_blue'>
            <div className="p-4 ">
                <div className="flex justify-center items-center mt-4 md:mt-8 mb-8 w-full gap-8 md:gap-16">
                    {
                        testimonials.length > 3 &&
                        <button className="cursor-pointer w-8" onClick={() => swiperInstance?.slidePrev()}>
                            <Image src={backArrow} alt='back arrow' width={100} height={100} />
                        </button>
                    }
                    <h1 className='text-3xl text-[#1D263A] font-semibold text-center'>What our clients say about us</h1>

                    {
                        testimonials.length > 3 && <button className="cursor-pointer w-8" onClick={() => swiperInstance?.slideNext()}>
                            <Image src={nextArrow} alt='next arrow' width={100} height={100} />
                        </button>
                    }

                </div>
                <div className="px-2 lg:px-8">
                    <Swiper
                        // Enable loop
                        loop={true}  // Add this line to enable looping
                        breakpoints={bs}
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        slidesPerGroup={slidesPerView === "auto" ? 1 : slidesPerView}
                        effect='creative'
                        onSwiper={(swiper) => {
                            setSwiperInstance(swiper); // Capture Swiper instance
                            setSlidesPerView(swiper.params.slidesPerView); // Set initial slidesPerView
                        }}
                    >


                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className='mb-8'>
                                <Card
                                    testimonial={testimonial}
                                    bgClass={getBackgroundClass(index, slidesPerView)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}


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
                    <h3 className="text-lg text-[#525252] font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    <p className="mt-4 text-gray-600 text-sm text-center">{testimonial.testimonial}</p>
                </div>
            </div>
        </div>
    );
};

