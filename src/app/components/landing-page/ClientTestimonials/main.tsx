'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from './Card';
import { Pagination, Navigation } from 'swiper/modules';
import img from './../../../public/images/best-practice/person2.png'

export default function ClientTestimonials() {
    const bs = {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 0,
        },

        // when window width is >= 768px
        1024: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        // 1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 40
        // },
        // 1366: {
        //     slidesPerView: 5,
        //     spaceBetween: 40
        // }
    }
    const testimonials = [
        {
            name: "Hannah Schmitt",
            role: "Lead Designer",
            image: "https://images.pexels.com/photos/3807747/pexels-photo-3807747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
        },
        {
            name: "Hannah Schmitt",
            role: "Lead Designer",
            image: "https://images.pexels.com/photos/3807747/pexels-photo-3807747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            testimonial: "Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus cras.",
        },
        {
            name: "Hannah Schmitt",
            role: "Lead Designer",
            image: "https://images.pexels.com/photos/3807747/pexels-photo-3807747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            testimonial: "Consequat duis diam lacus cras. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
        },
    ];
    return (
        <div className="p-4 md:p-8 bg-background_blue">
            <h2 className="text-center text-3xl font-bold mb-8">What Our Clients Say About Us</h2>
            <div className='px-2 lg:px-8'>

                <Swiper
                    navigation
                    breakpoints={bs}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className=''>
                            <Card testimonial={testimonial} />

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

