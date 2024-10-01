'use client'
import React from "react";
import Button from "../components/Button";
import main_video from '../public/images/best-practice/main-video.png'
import sub_video from '../public/images/best-practice/sub-video.png'
import play_Button from '../public/images/best-practice/play-circle.svg'
import Image, { StaticImageData } from "next/image";

export default function SuccessStories() {
    return (
        <div className="text-black grid px-2 md:px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-5">

            <div className="mr-auto place-self-center col-span-2  p-4 md:p-8 ">

                <h1 className="font-extrabold text-2xl  md:text-3xl xl:text-4xl text-secondary">Unlocking</h1>
                <h1 className="text-primary max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">Success Stories from Our Tutor</h1>
                <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-md lg:text-lg ">Discover the transformative journey of our tutor through their teaching techniques. These stories speak to the impact our courses have had on their professional and personal lives. </p>

                <div className="w-48 mb-6">
                    <Button label="View More" onClick={() => { }} classNames="rounded-xl" />
                </div>


            </div>
            <div className="lg:mt-0 px-4 lg:flex col-span-3 lg:order-last order-first">
                <Grid images={[main_video, sub_video, sub_video, sub_video]} playButton={true} />
            </div>

        </div>
    );
}
interface GridProps {
    images: StaticImageData[];
    playButton?: boolean
}
const Grid: React.FC<GridProps> = ({ images, playButton }) => {
    return (
        <div className="grid gap-2" >
            <div className='relative cursor-pointer' >
                <Image className="h-64 md:h-[300px] object-cover w-full rounded-xl" src={images[0]} alt="" />
                {playButton && <Image className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16" src={play_Button} alt="" />}
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div className='cursor-pointee' >
                    <Image className="h-24 md:h-36 object-cover w-full rounded-xl" src={images[1]} alt="" />
                </div>
                <div className='cursor-pointer' >
                    <Image className="h-24 md:h-36 object-cover w-full rounded-xl" src={images[2]} alt="" />
                </div>
                <div className='cursor-pointer' >
                    <Image className="h-24 md:h-36 object-cover w-full rounded-xl" src={images[3]} alt="" />
                </div>


            </div >
        </div >
    )
}