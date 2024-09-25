'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from './Card';
import { Pagination, Navigation } from 'swiper/modules';
import backArrow from '../../../public/images/landing-page/back.png'
import nextArrow from '../../../public/images/landing-page/next.png'
import Image from 'next/image';

export default function ClientTestimonials() {
    const [swiperInstance, setSwiperInstance] = useState<any>(null); // Store Swiper instance
    const [slidesPerView, setSlidesPerView] = useState<number | "auto" | undefined>(1); // Track current slidesPerView
    const swiper = useSwiper();


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
        <div className="p-4 md:p-8 bg-background_blue my-16">
            <div className="flex justify-center items-center mb-6 w-full gap-8 md:gap-16">
                {
                    testimonials.length > 3 &&
                    <button className="cursor-pointer w-8" onClick={() => swiperInstance.slidePrev()}>
                        <Image src={backArrow} alt='back arrow' width={100} height={100} />
                    </button>
                }
                <h1 className='text-3xl font-semibold text-center'>What our clients say about us</h1>

                {
                    testimonials.length > 3 && <button className="cursor-pointer w-8" onClick={() => swiperInstance.slideNext()}>
                        <Image src={nextArrow} alt='next arrow' width={100} height={100} />
                    </button>
                }

            </div>
            <div className="px-2 lg:px-8">
                <Swiper
                    // navigation
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
    );
}
