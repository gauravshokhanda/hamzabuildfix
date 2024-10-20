"use client";
import AdminContainer from "../../components/admin-panel/ui/admin-container";
import { Text } from "../../components/admin-panel/ui/text";
import AdminTable from "../../components/admin-panel/ui/admin-table";
import { Button } from "../../components/admin-panel/ui/button";
import Searchbar from "../../components/admin-panel/ui/Searchbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex flex-col gap-5">
      <AdminContainer
        rightComponent={<Searchbar placeholder="Search user here..." />}
        title="Users"
      >
        <AdminTable data={tableDataUser} format={tableFormatUser} />
      </AdminContainer>
    </div>
  );
}
const ActionsButtons = ({}) => {
  return (
    <div className="flex items-center gap-3 w-full justify-center">
      <Button
        outline
        className=" text-secondary cursor-pointer border-secondary"
      >
        View Profile
      </Button>
      <Button color="button_primary" className=" bg-red-500 cursor-pointer">
        Ban
      </Button>
    </div>
  );
};

const ActionProfile = ({ ...data }) => {
  const { name, avatar, department } = data.tutor;

  return (
    <div className="flex items-center gap-3  w-full justify-center md:justify-start pl-3 md:pl-0">
      <Image
        width={40}
        height={40}
        alt="avatar"
        src={avatar}
        className="w-10 h-10 rounded-lg shrink-0"
      />
      <div>
        <p className=" text-[#555555] font-normal">{name}</p>
        <p className=" text-sm font-medium  text-[#344054]">{department}</p>
      </div>
    </div>
  );
};

const tableFormatUser = [
  {
    key: "name",
    title: "Name",
    component: ActionProfile,
    showSort: true,
    onclick: () => console.log("clicked"),
  },
  {
    key: "category",
    title: "Category",
    component: Text,
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

export type TableFormatUser = (typeof tableFormatUser)[number];

const tableDataUser = [
  {
    tutor: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1727093267255-e9b31b2b35ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
      department: "Mathematics",
    },
    slug: "",
    category: "Tutor",
    country: "United States",
    contactNumber: "+1 123 456 7890",
    langauge: "English",
  },
  {
    tutor: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1727093267255-e9b31b2b35ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
      department: "Mathematics",
    },
    slug: "",
    category: "Tutor",
    country: "United States",
    contactNumber: "+1 123 456 7890",
    langauge: "English",
  },
  {
    tutor: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1727093267255-e9b31b2b35ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
      department: "Mathematics",
    },
    slug: "",
    category: "Tutor",
    country: "United States",
    contactNumber: "+1 123 456 7890",
    langauge: "English",
  },
  {
    tutor: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1727093267255-e9b31b2b35ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
      department: "Mathematics",
    },
    slug: "",
    category: "Tutor",
    country: "United States",
    contactNumber: "+1 123 456 7890",
    langauge: "English",
  },
];

export type TableDataUser = (typeof tableDataUser)[number];
