import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  category: string;
  description: string;
  image: string;
  time: string;
  author: {
    name: string;
    avatar: string;
  };
  href: string;
};

function BlogCard({
  title,
  category,
  description,
  image,
  time,
  author,
  href
}: Props) {
  return (
    <Link href={href} className=" flex gap-5">
      <img
        src={image}
        alt=""
        className=" aspect-square md:max-w-[200px] max-w-[150px] rounded-2xl"
      />
      <div className=" flex h-full justify-evenly flex-col">
        <div className="font-semibold  text-sm text-primary">{category}</div>
        <div className=" font-semibold text-lg">{title}</div>
        <div className=" text-sm line-clamp-2">{description}</div>
        <div className=" flex items-center gap-3">
          <img src={author.avatar} alt="" className=" w-10 h-10 rounded-full" />
          <div>
            <p className=" text-[#555555] text-sm md:text-base font-normal">
              {author.name}
            </p>
            <div className=" text-sm">{time}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
