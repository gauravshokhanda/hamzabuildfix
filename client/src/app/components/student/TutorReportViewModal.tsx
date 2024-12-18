import React from "react";

const TutorReportViewModal = () => {
  return (
    <div className="container mx-auto p-8 pt-10 overflow-y-auto h-screen">
      {/* Header */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold pb-3">
          Tutor Self-Assessment Report
        </h1>
        <div className="flex justify-end w-full">
          <button className="bg-admin_button text-white px-4 py-2 mb-6 rounded-lg">
            Export PDF
          </button>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {/* Strengths Section */}
        <div>
          <h2 className="text-xl font-semibold">1. Strengths</h2>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>
              <strong>Expert Knowledge:</strong> I have a deep understanding of
              my subject area, which allows me to provide thorough and
              insightful explanations to students.
            </li>
            <li>
              <strong>Effective Communication:</strong> I excel at breaking down
              complex concepts into easily understandable segments, ensuring
              that students grasp the material.
            </li>
            <li>
              <strong>Patience and Empathy:</strong> I am patient and
              empathetic, which helps me connect with students and address their
              individual needs and concerns effectively.
            </li>
            <li>
              <strong>Adaptability:</strong> I can tailor my teaching methods to
              fit different learning styles and paces, providing personalized
              support to each student.
            </li>
            <li>
              <strong>Strong Organizational Skills:</strong> I maintain
              well-organized lesson plans and materials, which helps keep
              sessions focused and productive.
            </li>
          </ul>
        </div>

        {/* Areas for Improvement Section */}
        <div>
          <h2 className="text-xl font-semibold">2. Areas for Improvement</h2>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>
              <strong>Time Management:</strong> I need to work on better
              managing the time spent on each topic to ensure all planned
              material is covered within the session.
            </li>
            <li>
              <strong>Use of Technology:</strong> I could enhance my use of
              educational technology and tools to make lessons more interactive
              and engaging.
            </li>
            <li>
              <strong>Feedback Mechanism:</strong> I should implement a more
              structured approach to providing and receiving feedback from
              students to better gauge their understanding and progress.
            </li>
            <li>
              <strong>Continual Learning:</strong> I need to stay updated with
              the latest developments in my subject area and teaching strategies
              to continuously improve my effectiveness.
            </li>
            <li>
              <strong>Student Engagement:</strong> I could work on incorporating
              more engaging activities and real-world applications to maintain
              student interest and motivation.
            </li>
          </ul>
        </div>

        {/* Goals Section */}
        <div>
          <h2 className="text-xl font-semibold">3. Goals</h2>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>
              <strong>Improve Time Management:</strong> Develop and adhere to a
              more structured lesson plan to ensure efficient use of session
              time and coverage of all relevant topics.
            </li>
            <li>
              <strong>Enhance Technological Integration:</strong> Explore and
              integrate new educational technologies and tools to create more
              interactive and engaging learning experiences.
            </li>
            <li>
              <strong>Strengthen Feedback Practices:</strong> Implement regular
              feedback sessions and surveys to better understand student needs
              and improve teaching methods.
            </li>
            <li>
              <strong>Pursue Professional Development:</strong> Engage in
              ongoing professional development opportunities to stay current
              with advancements in my field and teaching methodologies.
            </li>
            <li>
              <strong>Increase Student Engagement:</strong> Introduce varied
              instructional techniques and real-life examples to enhance student
              participation and interest in the subject matter.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TutorReportViewModal;
