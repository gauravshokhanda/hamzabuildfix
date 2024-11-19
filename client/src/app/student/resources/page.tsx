"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import DashboardHeader from "src/app/components/dashboard/DashboardHeader";

const questions = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  { question: "Can I change my plan later?", answer: "Yes" },
  { question: "What is your cancellation policy?", answer: "Yes" },
  { question: "Can other info be added to an invoice?", answer: "Yes" },
  { question: "How does billing work?", answer: "Yes" },
  { question: "How do I change my account email?", answer: "Yes" },
];

const teamMembers = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function page() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center bg-stone-50 rounded-md">
      <div className="w-full px-4 mx-auto">
      <DashboardHeader />
        <div className="md:gap-0 flex flex-col gap-12 justify-center items-center md:flex-row md:items-start mt-8">
          <div className="bg-white xl:w-1/4 md:w-60 w-full p-4 rounded-md shadow-md h-60 overflow-auto">
            <ul className="space-y-4 text-gray-600">
              <li className="bg-[#00ADEF] text-white px-4 py-2 rounded-md">
                FAQ
              </li>
              <li className="hover:bg-gray-100 px-4 py-2 rounded-md">
                Contact Us
              </li>
              <li className="hover:bg-gray-100 px-4 py-2 rounded-md">
                Feedback/Suggestion
              </li>
              <li className="hover:bg-gray-100 px-4 py-2 rounded-md">
                Report an Issue
              </li>
            </ul>
          </div>
          <div className="md:w-3/4 w-full md:ml-8 p-6 rounded-md shadow-md">
            <div className="flex justify-center pb-4 items-center flex-col">
              <h1 className="text-2xl font-semibold text-center text-gray-800">
                Frequently Asked Questions
              </h1>
              <p className="text-stone-500 mt-2 text-center">
                Everything you need to know about the product and billing.
              </p>
            </div>

            <div className="mt-6">
              {questions.map((item, index) => (
                <div key={index}>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <div className="flex justify-between items-center">
                          <DisclosureButton className="group flex-1 text-left cursor-pointer">
                            {item.question}
                          </DisclosureButton>
                          <DisclosureButton className="w-5 h-5 flex items-center justify-center rounded-full border border-stone-300 cursor-pointer">
                            {open ? (
                              <MinusIcon className="w-4 h-4 text-stone-400" />
                            ) : (
                              <PlusIcon className="w-4 h-4 text-stone-400" />
                            )}
                          </DisclosureButton>
                        </div>
                        <DisclosurePanel className="mt-2 text-stone-500">
                          {item.answer}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                  {index < questions.length - 1 && (
                    <hr className="my-6 border-t border-stone-300" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8 bg-white py-6 rounded-md">
              <div className="flex justify-center items-center py-2 -space-x-0.5">
                <dt className="sr-only">Team Members</dt>
                {teamMembers.map((teamMember) => (
                  <dd key={teamMember.id}>
                    <Image
                      width={60}
                      height={60}
                      alt=""
                      src={teamMember.imageUrl}
                      className="h-9 w-9 rounded-full bg-gray-50 ring-2 ring-white"
                    />
                  </dd>
                ))}
              </div>
              <p className="text-gray-500 font-bold text-xl">
                Still have questions?
              </p>
              <p className="text-stone-500 my-1">
                Can’t find the answer you’re looking for? Please chat with our
                friendly team.
              </p>
              <button className="bg-[#A3D154] text-white px-6 py-2 rounded-md mt-4">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
