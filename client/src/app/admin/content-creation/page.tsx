"use client";
import AdminContainer from "../../components/admin-panel/ui/admin-container";
import { Button } from "../../components/admin-panel/ui/button";
import Searchbar from "../../components/admin-panel/ui/Searchbar";
import { default as TabComponent } from "../../components/admin-panel/ui/Tabs";
import BlogCard from "../../components/admin-panel/blog/BlogCard";

import { Fragment, useState } from "react";
import CareerCard from "../../components/admin-panel/blog/CareerCard";
import Paginations from "../../components/student/Paginations";

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);

  const Tabs = [
    {
      title: "Blogs",
      component: Blogs,
    },
    {
      title: "Careers",
      component: Careers,
    },
  ];

  return (
    <div className=" flex flex-col gap-5 w-full h-full mt-5">
      <div className="flex md:flex-row flex-col items-center gap-5 w-full justify-between px-2">
        <TabComponent
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          tabItems={Tabs}
        />
        <Button
          color="button_primary"
          className=" bg-primary cursor-pointer 
          justify-center ml-auto w-fit "
        >
          {tabIndex === 0 ? "Create Blog" : "Add Position"}
        </Button>
      </div>
      <Fragment>{Tabs[tabIndex].component()}</Fragment>
    </div>
  );
}

const Blogs = () => {
  return (
    <AdminContainer
      footer={<Paginations />}
      rightComponent={<Searchbar placeholder="Search blog here..." />}
      title="Blogs"
    >
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:p-8 p-5 lg:gap-8 gap-5 flex-1">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </AdminContainer>
  );
};
const Careers = () => {
  return (
    <AdminContainer
      footer={<Paginations />}
      rightComponent={<Searchbar placeholder="Search blog here..." />}
      title="Careers"
    >
      <div className=" grid grid-cols-1 lg:p-8 p-5 lg:gap-8 gap-5 flex-1">
        {careers.map((career, index) => (
          <CareerCard key={index} {...career} />
        ))}
      </div>
    </AdminContainer>
  );
};

const blogs = [
  {
    title: "UX review presentations",
    category: "Design",
    description: "How do you create compelling presentations that wow your... ",
    image:
      "https://plus.unsplash.com/premium_photo-1673264933188-811321fb4dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGxwYXBlciUyMDRrfGVufDB8fDB8fHww",
    time: "20 Jan 2022",
    author: {
      name: "Olivia Rhye",
      avatar:
        "https://images.unsplash.com/photo-1727093267255-e9b31b2b35ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
    },
    href: "/admin/blog/1",
  },
  {
    title: "UX review presentations",
    category: "Design",
    description: "How do you create compelling presentations that wow your... ",
    image:
      "https://plus.unsplash.com/premium_photo-1673264933188-811321fb4dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGxwYXBlciUyMDRrfGVufDB8fDB8fHww",
    time: "20 Jan 2022",
    author: {
      name: "Olivia Rhye",
      avatar:
        "https://images.unsplash.com/photo-1727093267255-e9b31b2b35ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
    },
    href: "/admin/blog/1",
  },
  {
    title: "UX review presentations",
    category: "Design",
    description: "How do you create compelling presentations that wow your... ",
    image:
      "https://plus.unsplash.com/premium_photo-1673264933188-811321fb4dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGxwYXBlciUyMDRrfGVufDB8fDB8fHww",
    time: "20 Jan 2022",
    author: {
      name: "Olivia Rhye",
      avatar:
        "https://images.unsplash.com/photo-1727093267255-e9b31b2b35ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
    },
    href: "/admin/blog/1",
  },
  {
    title: "UX review presentations",
    category: "Design",
    description: "How do you create compelling presentations that wow your... ",
    image:
      "https://plus.unsplash.com/premium_photo-1673264933188-811321fb4dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGxwYXBlciUyMDRrfGVufDB8fDB8fHww",
    time: "20 Jan 2022",
    author: {
      name: "Olivia Rhye",
      avatar:
        "https://images.unsplash.com/photo-1727093267255-e9b31b2b35ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
    },
    href: "/admin/blog/1",
  },
];

const careers = [
  {
    title: "Product Designer",
    category: "Design",
    description:
      "We’re looking for a mid-level product designer to join our team.",
    tag: {
      name: "Software",
      color: "#ff0000",
    },
    location: "Remote",
    timing: "Full-time",
  },
  {
    title: "Product Designer",
    category: "Design",
    description:
      "We’re looking for a mid-level product designer to join our team.",
    tag: {
      name: "Software",
      color: "#175CD3",
    },
    location: "Remote",
    timing: "Full-time",
  },
];
