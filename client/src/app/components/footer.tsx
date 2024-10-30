"use client";
import Image from "next/image";
import logo from "public/images/logo.png";
import Link from "next/link";
import useAdminRoute from "../../hooks/useAdminRoute";
import useTeacherRoute from "../../hooks/useTeacherRoute";
import useStudentRoute from "../../hooks/useStudentRoute";

export default function Footer() {
  const adminRoute = useAdminRoute();
  const teacherRoute = useTeacherRoute();
  const studentRoute = useStudentRoute();

  if (adminRoute || teacherRoute || studentRoute) {
    return null;
  }

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-16 w-full">
      <div className="mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 w-full">
        {/* Logo and CTA */}
        <div className="mb-8 md:mb-0 lg:w-1/3 w-full">
          <div className="mb-4">
            <Image src={logo} alt="Logo" className="w-16" />
          </div>
          <p className="text-white mb-4 text-sm">
            Ready to get started? Get transparent <br /> your knowledge in both
            ways
          </p>
          <button className="bg-white hover:bg-secondary text-black font-bold py-2 px-4 rounded-3xl whitespace-nowrap">
            Start for free
          </button>
        </div>

        {/* Resources */}
        <div className="lg:w-1/3 w-full flex">
          <div className="mb-8 md:mb-0 md:w-full w-1/2">
            <h3 className="font-bold mb-5">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white hover:text-white">
                  24/7 Live Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Become a Tutor */}
          <div className="mb-8 md:mb-0 md:w-full w-1/2">
            <h3 className="font-bold mb-5">Become a tutor</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white hover:text-white">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link
                  href="/best-practices"
                  className="text-white hover:text-white"
                >
                  Best practices
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Social */}
        <div className="flex lg:w-1/3 w-full">
          <div className="mb-8 md:mb-0 md:w-full w-1/2">
            <h3 className="font-bold mb-5">Social</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white hover:text-white">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-white">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-white">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className=" md:w-full w-1/2">
            <h3 className="font-bold mb-5">Address</h3>
            <p className="text-white">
              San Francisco,<br></br> 91401 US
            </p>
            <Link
              href="#"
              className="text-secondary hover:text-white underline mb-4 inline-block"
            >
              Location map
            </Link>
            <p className="text-white mt-4">Inquiries</p>
            <p className="text-white">800 284 994</p>
            <p className="text-white">hello@reflectowl.com</p>
          </div>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-white">
        <div className="container mx-auto flex flex-wrap-reverse justify-between gap-y-4">
          <p>© 2023 Reflectowl. All rights reserved</p>
          <ul className="flex flex-wrap items-center text-xs">
            <li className="px-3 border-r">
              <Link href="#" className="hover:text-white">
                Terms & conditions
              </Link>
            </li>
            <li className="px-3 border-r">
              <Link href="#" className="hover:text-white">
                Sitemap
              </Link>
            </li>
            <li className="px-3 border-r">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li className="px-3">
              <Link href="#" className="hover:text-white">
                Cookies Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
