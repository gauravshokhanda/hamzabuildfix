"use client";
import Image from "next/image";
import girl_with_book from "public/images/best-practice/girl-with-book.png";
import profiles from "public/images/best-practice/profiles.png";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section className=" md:px-4 pt-8 md:pt-16 text-black bg-white">
      <div className="grid px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 p-4 md:p-8 ">
          <h1 className="font-semibold text-xl">
            The Tafawwaq Tutor Experience
          </h1>
          <h1 className="text-primary max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl">
            Elevate Your Teaching Journey
          </h1>
          <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-md lg:text-lg ">
            Embark on a journey of knowledge and skill enhancement with our
            online courses. Whether you&apos;re looking to acquire new expertise
            or refine existing talents, our diverse range of courses offers a
            flexible and engaging learning experience. Empower yourself today!
          </p>

          <div className="w-48 mb-6">
            <Button
              label="Learn More"
              onClick={() => {}}
              classNames="rounded-xl"
            />
          </div>

          <div className="flex items-center gap-4">
            <Image src={profiles} alt="hero" className="w-1/3 h-full" />

            <div className="">
              <h1 className="font-semibold text-md md:text-lg">
                10K+ Instructors
              </h1>
              <p className="text-[#0554F2] text-sm">
                have started their studies
              </p>
            </div>
          </div>
        </div>

        <div className="lg:mt-0 lg:col-span-5 lg:flex lg:order-last order-first">
          <Image src={girl_with_book} alt="hero" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
