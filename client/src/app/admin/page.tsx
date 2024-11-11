"use client";
import AdminContainer from "../components/admin-panel/ui/admin-container";
import { Text } from "../components/admin-panel/ui/text";
import AdminTable from "../components/admin-panel/ui/admin-table";
import { Button } from "../components/admin-panel/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex flex-col gap-5">
      <AdminContainer
        rightComponent={
          <button className=" underline text-text_primary hover:opacity-75">
            View all
          </button>
        }
        title="Tutor Request List"
      >
        <AdminTable data={tableDataTutor} format={tableFormatTutor} />
      </AdminContainer>
      <AdminContainer
        rightComponent={
          <button className=" underline text-text_primary hover:opacity-75">
            View all
          </button>
        }
        title="Certification Requests"
      >
        <AdminTable data={tableDataCert} format={tableFormatCert} />
      </AdminContainer>
    </div>
  );
}
const ActionsButtons = () => {
  return (
    <div className="flex items-center gap-3 w-full justify-center">
      <Button color="button_primary" className=" bg-primary cursor-pointer">
        Approve
      </Button>
      <Button outline className=" text-primary cursor-pointer">
        Reject
      </Button>
    </div>
  );
};
const ActionsButton = () => {
  return (
    <div className="flex items-center gap-3 w-full justify-center">
      <Button color="button_primary" className=" bg-primary cursor-pointer">
        Certified
      </Button>
    </div>
  );
};

const ActionProfile = ({ ...data }) => {
  const { name, avatar, department } = data.tutor;

  return (
    <div className="flex items-center gap-3">
      <Image
        width={40}
        height={40}
        alt="Avatar"
        src={avatar}
        className="w-10 h-10 rounded-lg"
      />
      <div>
        <p className=" text-[#555555] font-normal">{name}</p>
        <p className=" text-sm font-medium  text-[#344054]">{department}</p>
      </div>
    </div>
  );
};

const tableFormatTutor = [
  {
    key: "tutor",
    title: "Tutor",
    component: ActionProfile,
    showSort: true,
    onclick: () => console.log("clicked"),
  },
  {
    key: "country",
    title: "Country",
    component: Text,
    showSort: true,
    onclick: () => console.log("clicked"),
  },
  {
    key: "contactNumber",
    title: "Contact Number",
    component: Text,
    showSort: true,
    onclick: () => console.log("clicked"),
  },
  {
    key: "hourlyRate",
    title: "Hourly Rate",
    component: Text,
    showSort: true,
    onclick: () => console.log("clicked"),
  },
  {
    key: "langauge",
    title: "Langauge",
    component: Text,
    showSort: true,
    onclick: () => console.log("clicked"),
  },
  {
    key: "actions",
    title: "Actions",
    component: ActionsButtons,
    showSort: false,
    onclick: () => console.log("clicked"),
  },
];

export type TableFormatTutor = (typeof tableFormatTutor)[number];

const tableFormatCert = [
  {
    key: "tutor",
    title: "Tutor",
    component: ActionProfile,
    showSort: true,
    onclick: () => console.log("clicked"),
  },
  {
    key: "country",
    title: "Country",
    component: Text,
    showSort: true,
    onclick: () => console.log("clicked"),
  },
  {
    key: "totalHourCompleted",
    title: "Total Hour Completed",
    component: Text,
    showSort: true,
    onclick: () => console.log("clicked"),
  },
  {
    key: "ratings",
    title: "Ratings",
    component: Text,
    showSort: true,
    onclick: () => console.log("clicked"),
  },

  {
    key: "actions",
    title: "Actions",
    component: ActionsButton,
    showSort: false,
    onclick: () => console.log("clicked"),
  },
];

export type TableFormatCert = (typeof tableFormatCert)[number];

const tableDataTutor = [
  {
    tutor: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1727093267255-e9b31b2b35ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
      department: "Mathematics",
    },
    slug: "",
    country: "United States",
    contactNumber: "+1 123 456 7890",
    hourlyRate: "$50",
    language: "English",
  },
  {
    tutor: {
      name: "Jane Smith",
      avatar:
        "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      department: "Physics",
    },
    slug: "",
    country: "Canada",
    contactNumber: "+1 234 567 8901",
    hourlyRate: "$60",
    language: "French, English",
  },
  {
    tutor: {
      name: "Emma Brown",
      avatar:
        "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      department: "Chemistry",
    },
    slug: "",
    country: "United Kingdom",
    contactNumber: "+44 789 456 1230",
    hourlyRate: "$55",
    language: "English",
  },
  {
    tutor: {
      name: "Liam Wilson",
      avatar:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHV0b3J8ZW58MHx8MHx8fDA%3D%3D",
      department: "Biology",
    },
    slug: "",
    country: "Australia",
    contactNumber: "+61 987 654 3210",
    hourlyRate: "$45",
    language: "English",
  },
  {
    tutor: {
      name: "Olivia Taylor",
      avatar:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      department: "History",
    },
    slug: "",
    country: "New Zealand",
    contactNumber: "+64 654 321 0987",
    hourlyRate: "$48",
    language: "English",
  }
];


export type TableDataTutor = (typeof tableDataTutor)[number];
const tableDataCert = [
  {
    tutor: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1727093267255-e9b31b2b35ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
      department: "Mathematics",
    },
    slug: "",
    country: "United States",
    contactNumber: "+1 123 456 7890",
    totalHourCompleted: "100",
    ratings: "4.5",
  },
  {
    tutor: {
      name: "Jane Smith",
      avatar:
        "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      department: "Physics",
    },
    slug: "",
    country: "Canada",
    contactNumber: "+1 234 567 8901",
    totalHourCompleted: "120",
    ratings: "4.7",
  },
  {
    tutor: {
      name: "Emma Brown",
      avatar:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      department: "Chemistry",
    },
    slug: "",
    country: "United Kingdom",
    contactNumber: "+44 789 456 1230",
    totalHourCompleted: "90",
    ratings: "4.6",
  },
  {
    tutor: {
      name: "Liam Wilson",
      avatar:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHV0b3J8ZW58MHx8MHx8fDA%3D%3D",
      department: "Biology",
    },
    slug: "",
    country: "Australia",
    contactNumber: "+61 987 654 3210",
    totalHourCompleted: "110",
    ratings: "4.8",
  },
  {
    tutor: {
      name: "Olivia Taylor",
      avatar:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      department: "History",
    },
    slug: "",
    country: "New Zealand",
    contactNumber: "+64 654 321 0987",
    totalHourCompleted: "130",
    ratings: "4.9",
  }
];


export type TableDataCert = (typeof tableDataCert)[number];
