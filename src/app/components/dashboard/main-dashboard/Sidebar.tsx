import React from "react";
import {
  Calendar,
  Video,
  Star,
  User,
  LayoutDashboard,
  MessageSquareMore,
  CreditCard,
  ChartLine,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Calendar, label: "My Schedule" },
    { icon: GraduationCap, label: "My Students" },
    { icon: MessageSquareMore, label: "Message" },
    { icon: Video, label: "Videos" },
    { icon: ChartLine, label: "My Stats" },
    { icon: Star, label: "Reviews" },
    { icon: CreditCard, label: "Payments" },
    { icon: User, label: "My Accounts" },
  ];

  return (
    <div className="bg-white h-screen p-6 flex flex-col border border-r border-[#3F3F441A]">
      <div className="mb-12 text-center">
        <Link href="/">
          <Image
            src={logo}
            className="h-12 w-12 mx-auto"
            width={512}
            height={512}
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center gap-4 bg-[#F7F7F7] rounded-2xl px-4 py-2">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <User size={24} />
        </div>
        <div>
          <h2 className="font-medium">Abeeda Alex</h2>
          <p className="text-sm text-gray-600">Tutor</p>
        </div>
      </div>
      <div className="my-6 bg-[#00000024] w-full h-[1px]"></div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center gap-4 p-3 rounded-lg ${
                  index === 0 ? "bg-[#A3D154] text-white" : "text-[#3F3F44]"
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
