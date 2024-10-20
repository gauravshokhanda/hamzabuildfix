import Image from "next/image";
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  MapPinIcon,
  BanknotesIcon
} from "@heroicons/react/24/outline";

const reviews = [
  {
    title: "The seller did a fantastic job of designing my website",
    rating: 5,
    name: "Hannah Schmitt",
    date: "December 8, 2024",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged....",
  },
  {
    title: "The seller did a fantastic job of designing my website",
    rating: 5,
    name: "Hannah Schmitt",
    date: "December 8, 2024",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged....",
  },
  {
    title: "The seller did a fantastic job of designing my website",
    rating: 5,
    name: "Hannah Schmitt",
    date: "December 8, 2024",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged....",
  },
];

export default function Profile() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 rounded-lg overflow-auto">
      <div className="max-w-7xl mx-auto bg-white lg:p-16 p-4 rounded-lg shadow-md overflow-auto">
        <div className="flex gap-16 items-center mt-4 ml-4">
          <div className="w-48 h-48">
            <Image
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=456&h=456&q=80"
              alt="Profile Picture"
              className="rounded-full"
              height={456}
              width={456}
            />
          </div>
          <div className="flex gap-3 flex-col items-start">
            <div>
              <h1 className="text-2xl font-semibold">Alexson David</h1>
              <p className="text-gray-600 whitespace-nowrap mt-1">
                My clients describe my training style as motivating and life
                changing.
              </p>
              <div className="flex items-center space-x-4 text-gray-500 mt-2">
                <span>UI Designer</span>
                <span>•</span>
                <span className="flex items-center gap-2"><MapPinIcon className="h-4 w-4 inline-block" /> London, UK</span>
                <span>•</span>
                <span className="flex items-center gap-2"><BanknotesIcon className="h-4 w-4 inline-block" /> $44 / hour</span>
                <span>•</span>
                <span className="flex items-center">
                  <span className="mr-1">⭐</span> 4.6
                </span>
              </div>
            </div>
            <div className="flex gap-3 mt-2">
              <button className="bg-none border border-stone-300 text-[#42ABD1] px-8 py-2 rounded-md">
                Message
              </button>
              <button className="bg-[#42ABD1] text-white px-8 py-2 rounded-md">
                Schedule a session
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-300 my-12"></div>

        <h2 className="text-2xl font-semibold xl:text-left text-center">About</h2>
        <div className="flex xl:flex-row flex-col gap-20 justify-between items-center">
          <div className="w-4/6">
            <div>
              <div>
                <Image
                  src="https://plus.unsplash.com/premium_photo-1673264933048-3bd3f5b86f9d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Introduction video"
                  className="w-full rounded-md"
                  width={800}
                  height={600}
                />
              </div>
              <div className="py-8">
                <p className="text-sm text-stone-400 font-normal">
                  Hello my name is Nicole Wells and web developer from Portland.
                  In pharetra orci dignissim, blandit mi semper, ultricies diam.
                  Suspendisse malesuada suscipit nunc non volutpat. Sed porta
                  nulla id orci laoreet tempor non consequat enim. Sed vitae
                  aliquam velit. Aliquam ante erat, blandit at pretium et,
                  accumsan ac est. Integer vehicula rhoncus molestie. Morbi
                  ornare ipsum sed sem condimentum, et pulvinar tortor luctus.
                  Suspendisse condimentum lorem ut elementum aliquam.
                </p>
                <p className="mt-4 text-sm text-stone-400 font-normal">
                  Mauris nec erat ut libero vulputate pulvinar. Aliquam ante
                  erat, blandit at pretium et, accumsan ac est. Integer vehicula
                  rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et
                  pulvinar tortor luctus. Suspendisse condimentum lorem ut
                  elementum aliquam. Mauris nec erat ut libero vulputate
                  pulvinar.
                </p>
              </div>
            </div>

            <div className="max-w-md pb-8">
      <h3 className="text-lg font-semibold mb-4">Schedule</h3>
      <div className="flex justify-between mb-2">
        <span className="text-gray-700">Monday - Thursday</span>
        <span className="text-gray-500">09:30 AM – 05:00 PM</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-700">Friday</span>
        <span className="text-gray-500">09:30 AM – 01:00 PM</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-700">Saturday – Sunday</span>
        <span className="text-gray-500">Holiday</span>
      </div>
    </div>

    <h3 className="text-lg font-semibold mb-4">Education</h3>

            <div className="px-6 py-8 bg-white border border-stone-100 rounded-lg shadow-md">
              <div className="flex items-start mb-10">
                <div className="w-8 h-8 bg-blue-100 text-[#42ABD1] rounded-full flex items-center justify-center mr-4">
                  M
                </div>
                <div className="flex-1">
                  <div className="flex gap-6 items-center">
                    <h3 className="font-semibold">Bachelors in Fine Arts</h3>
                    <span className="text-xs text-[#42ABD1] bg-blue-100 px-2 py-0.5 rounded-xl">
                      2012 - 2014
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-[#42ABD1] text-sm hover:underline mb-4 inline-block"
                  >
                    Modern College
                  </a>
                  <p className="text-gray-600 text-sm text-stone-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 text-[#42ABD1] rounded-full flex items-center justify-center mr-4">
                  H
                </div>
                <div className="flex-1">
                  <div className="flex gap-6 items-center">
                    <h3 className="font-semibold">Computer Science</h3>
                    <span className="text-xs text-[#42ABD1] bg-blue-100 px-2 py-0.5 rounded-xl">
                      2012 - 2014
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-[#42ABD1] text-sm hover:underline mb-4 inline-block"
                  >
                    Harvard University
                  </a>
                  <p className="text-gray-600 text-sm text-stone-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.
                  </p>
                </div>
              </div>
            </div>

    <h3 className="text-lg font-semibold mb-4 mt-8">Work and Experience</h3>

            <div className="px-6 py-8 bg-white border border-stone-100 rounded-lg shadow-md">
              <div className="flex items-start mb-10">
                <div className="w-8 h-8 bg-blue-100 text-[#42ABD1] rounded-full flex items-center justify-center mr-4">
                  M
                </div>
                <div className="flex-1">
                  <div className="flex gap-6 items-center">
                    <h3 className="font-semibold">Product Designer</h3>
                    <span className="text-xs text-[#42ABD1] bg-blue-100 px-2 py-0.5 rounded-xl">
                      2012 - 2014
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-[#42ABD1] text-sm hover:underline mb-4 inline-block"
                  >
                    Modern College
                  </a>
                  <p className="text-gray-600 text-sm text-stone-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 text-[#42ABD1] rounded-full flex items-center justify-center mr-4">
                  H
                </div>
                <div className="flex-1">
                  <div className="flex gap-6 items-center">
                    <h3 className="font-semibold">Sr UX designer</h3>
                    <span className="text-xs text-[#42ABD1] bg-blue-100 px-2 py-0.5 rounded-xl">
                      2012 - 2014
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-[#42ABD1] text-sm hover:underline mb-4 inline-block"
                  >
                    Harvard University
                  </a>
                  <p className="text-gray-600 text-sm text-stone-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.
                  </p>
                </div>
              </div>
            </div>



    <h3 className="text-lg font-semibold mb-4 mt-8">Awards</h3>

            <div className="px-6 py-8 bg-white border border-stone-100 rounded-lg shadow-md">
              <div className="flex items-start mb-10">
                <div className="w-8 h-8 bg-blue-100 text-[#42ABD1] rounded-full flex items-center justify-center mr-4">
                  M
                </div>
                <div className="flex-1">
                  <div className="flex gap-6 items-center">
                    <h3 className="font-semibold">Perfect Attandance Program</h3>
                    <span className="text-xs text-[#42ABD1] bg-blue-100 px-2 py-0.5 rounded-xl">
                      2012 - 2014
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-[#42ABD1] text-sm hover:underline mb-4 inline-block"
                  >
                    Modern College
                  </a>
                  <p className="text-gray-600 text-sm text-stone-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 text-[#42ABD1] rounded-full flex items-center justify-center mr-4">
                  H
                </div>
                <div className="flex-1">
                  <div className="flex gap-6 items-center">
                    <h3 className="font-semibold">Top performer recognition</h3>
                    <span className="text-xs text-[#42ABD1] bg-blue-100 px-2 py-0.5 rounded-xl">
                      2012 - 2014
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-[#42ABD1] text-sm hover:underline mb-4 inline-block"
                  >
                    Harvard University
                  </a>
                  <p className="text-gray-600 text-sm text-stone-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.
                  </p>
                </div>
              </div>
            </div>













          </div>

          <div className="w-2/6 flex gap-6 flex-col justify-center items-center">
            <div className="lg:max-w-sm w-96 p-6 bg-white rounded-lg shadow-md">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 space-x-2">
                  <CalendarIcon className="h-6 w-6 text-[#42ABD1]" />
                  <span className="text-gray-700 text-sm font-semibold">
                    Experience: <span className="block">0-2 Years</span>
                  </span>
                </li>
                <li className="flex items-start gap-3 space-x-2">
                  <ClockIcon className="h-6 w-6 text-[#42ABD1]" />
                  <span className="text-gray-700 text-sm font-semibold">
                    Age: <span className="block">28-33 Years</span>
                  </span>
                </li>
                <li className="flex items-start gap-3 space-x-2">
                  <UserIcon className="h-6 w-6 text-[#42ABD1]" />
                  <span className="text-gray-700 text-sm font-semibold">
                    Gender: <span className="block">Female</span>
                  </span>
                </li>
                <li className="flex items-start gap-3 space-x-2">
                  <GlobeAltIcon className="h-6 w-6 text-[#42ABD1]" />
                  <span className="text-gray-700 text-sm font-semibold">
                    Language:
                    <span className="block">English, German, Spanish</span>
                  </span>
                </li>
                <li className="flex items-start gap-3 space-x-2">
                  <AcademicCapIcon className="h-6 w-6 text-[#42ABD1]" />
                  <span className="text-gray-700 text-sm font-semibold">
                    Education Level:{" "}
                    <span className="block">Master Degree</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="lg:max-w-sm w-96 px-6 py-4 bg-white rounded-lg shadow-md">
              <h2 className="font-semibold text-gray-900 mb-3">
                Teaching Grades
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 text-sm bg-stone-100 text-black font-normal rounded-full">
                  Elementary
                </span>
                <span className="px-4 py-1.5 text-sm bg-stone-100 text-black font-normal rounded-full">
                  Middle School
                </span>
                <span className="px-4 py-1.5 text-sm bg-stone-100 text-black font-normal rounded-full">
                  High School
                </span>
                <span className="px-4 py-1.5 text-sm bg-stone-100 text-black font-normal rounded-full">
                  Vocational Training
                </span>
              </div>
            </div>

            <div className="lg:max-w-sm w-96 p-6 bg-white rounded-lg shadow-md">
              <h2 className="font-semibold text-gray-900 mb-3">Subjects</h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 text-sm bg-stone-100 text-black font-normal rounded-full">
                  English Speaking
                </span>
                <span className="px-4 py-1.5 text-sm bg-stone-100 text-black font-normal rounded-full">
                  English Listening
                </span>
                <span className="px-4 py-1.5 text-sm bg-stone-100 text-black font-normal rounded-full">
                  English Writing
                </span>
                <span className="px-4 py-1.5 text-sm bg-stone-100 text-black font-normal rounded-full">
                  Vocabulary
                </span>
              </div>
            </div>

            <div className="lg:max-w-sm w-96 p-6 bg-white rounded-lg shadow-md">
              <h2 className="font-semibold text-gray-900 mb-2">
                Cancellation Policy
              </h2>
              <p className="text-sm text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s,{" "}
                <a href="#" className="text-[#42ABD1] underline">
                  See Full Policy
                </a>
                .
              </p>
            </div>

            {reviews.map((review, idx) => (
              <div
                className="lg:max-w-sm w-96 px-4 py-6 bg-white rounded-lg shadow-md"
                key={idx}
              >
                <h3 className="font-semibold mb-2">{review.title}</h3>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <svg
                        key={idx}
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-800">{review.rating}.0</span>
                </div>
                <div className="flex items-center mb-4 gap-3">
                  <Image
                    className="w-10 h-10 rounded-full object-cover mr-2"
                    src={review.image}
                    alt={review.name}
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="text-gray-900 font-bold">{review.name}</p>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-xs text-stone-500 tracking-wide leading-5">
                  {review.text}
                </p>
              </div>
            ))}

            <div className="flex justify-center items-center mt-2">
              <button className="bg-[#42ABD1] text-white px-12 py-4 rounded-md text-lg">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
