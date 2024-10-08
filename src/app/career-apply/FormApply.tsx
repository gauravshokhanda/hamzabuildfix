export default function FormApply() {
  return (
    <div>
      <div className=" bg-background_blue text-3xl text-header px-4 py-10 text-center font-semibold">
        apply for this job
      </div>
      <div className=" max-w-screen-md m-auto py-20 px-4">
        <form className=" p-6 bg-white shadow-md rounded-md">
          {/* First Name and Last Name */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray/35 rounded-md focus:outline-none  "
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray/35 rounded-md focus:outline-none  "
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray/35 rounded-md focus:outline-none  "
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className=" flex gap-4 mb-4 ">
            <div className="w-1/2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                className="w-full px-3 py-2 border border-gray/35 rounded-md focus:outline-none  "
                id="gender"
                name="gender"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Location */}
            <div className="w-1/2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="location"
              >
                Location
              </label>
              <input
                className="w-full px-3 py-2 border border-gray/35 rounded-md focus:outline-none  "
                type="text"
                id="location"
                name="location"
                placeholder="Location"
              />
            </div>
          </div>
          {/* Gender */}

          {/* Target Base Salary */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="salary"
            >
              What is your target base salary for this role?
            </label>
            <input
              className="w-full px-3 py-2 border border-gray/35 rounded-md focus:outline-none  "
              type="text"
              id="salary"
              name="salary"
              placeholder="Base Salary"
            />
          </div>

          {/* File Upload */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="file"
            >
              Upload Resume
            </label>
            <button type="button" className=" font-bold py-2 px-4 rounded">
              Choose File
            </button>
          </div>
        </form>
        <button className=" mt-8 flex mx-auto bg-[#20bfa9] px-10 md:px-20 text-white text-sm py-3 rounded-md">
          Apply for the position
        </button>
      </div>
    </div>
  );
}
