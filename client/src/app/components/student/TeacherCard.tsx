import React from "react";
import { Button } from "../admin-panel/ui/button";
import TeacherProfileModal from "./TeacherProfileModal";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  rating: number;
  totalRating: string;
  subject: string;
  description: string;
  rate: string;
  totalHours: string;
  responseTime: string;
  testimonial: {
    title: string;
    description: string;
  };
}

const TeacherCard: React.FC<Props> = ({
  name,
  image,
  rating,
  totalRating,
  subject,
  description,
  rate,
  totalHours,
  responseTime,
  testimonial,
}) => {
  return (
    <div className="flex flex-col border  border-slate p-7 rounded-2xl bg-[#fafafa] shadow-md gap-5">
      <div className="flex flex-col md:flex-row">
        <div className="flex md:flex-row flex-col divide-x-0 md:divide-x-2  divide-slate w-full">
          <div className="flex md:flex-row flex-col w-full gap-3">
            <div className="flex items-center flex-col">
              <Image
                width={217}
                height={217}
                src={image}
                alt={`${name}'s profile`}
                className="rounded-lg aspect-square max-w-[217px] w-full object-cover"
              />
              <div className="flex gap-1.5 mt-2 items-center justify-center">
                {new Array(rating).fill(0).map((_, index) => (
                  <FilledStarIcon key={index} />
                ))}
                {new Array(5 - rating).fill(0).map((_, index) => (
                  <EmptyStarIcon key={index} />
                ))}
              </div>
              <p className="text-sm">
                {rating} ({totalRating})
              </p>
            </div>
            <div className="pl-0 md:pl-3 flex flex-col gap-4 pr-2 w-full">
              <h3 className="text-[#1D263A] text-[24px] font-semibold">
                {name}
              </h3>
              <p className="text-[#1D263A] text-[17px]">{subject}</p>
              <p className="text-[#1D263A] text-[17px]">{description}</p>
              <Button
                color="button_primary"
                className="bg-secondary cursor-pointer border-secondary w-fit"
              >
                Chat Now
              </Button>
            </div>
          </div>
          <div className="my-2 md:pl-3 gap-3 flex flex-col shrink-0 text-[#1D263A] text-[17px]">
            <p>
              <span className="font-semibold mt-2">$ {rate}</span> per hour
            </p>
            <p className="flex items-center mt-2 gap-4">
              <TimeIcon />
              <span>{totalHours} hours tutoring</span>
            </p>
            <p className="flex items-center mt-2 gap-4">
              <MessageIcon />
              Response time: <span>{responseTime}</span>
            </p>
            <TeacherProfileModal/>
          </div>
        </div>
      </div>
      <div className="pl-5">
        <div className="relative">
          <h3 className="text-[#1D263A] text-[17px] font-bold">
            {testimonial.title}
          </h3>
          <div className="absolute -top-1.5 -left-5">
            <TestimonialIcon />
          </div>
        </div>
        <p className="text-[#1D263A] text-[17px]">{testimonial.description}</p>
      </div>
    </div>
  );
};

export default TeacherCard;

const TestimonialIcon = () => {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.8"
        d="M7.49564 15.2534H0.967641L7.11164 0.725372H11.2716L7.49564 15.2534ZM17.8636 15.2534H11.3356L17.4796 0.725372H21.6396L17.8636 15.2534Z"
        fill="#A3D154"
      />
    </svg>
  );
};

export const FilledStarIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0551 2.23318L15.1012 8.71138L21.913 9.75659L16.9841 14.7963L18.1473 21.9161L12.0551 18.5529L5.96297 21.9161L7.1262 14.7963L2.19727 9.75659L9.00905 8.71138L12.0551 2.23318Z"
        fill="#FFA033"
        stroke="#FFA033"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const EmptyStarIcon = () => {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.984 1.23318L12.8916 7.71138L19.3938 8.75659L14.6889 13.7963L15.7992 20.9161L9.984 17.5529L4.16875 20.9161L5.27911 13.7963L0.574219 8.75659L7.07637 7.71138L9.984 1.23318Z"
        stroke="#FFA033"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const TimeIcon = () => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6599 9.51272C15.0959 9.51272 15.5137 9.51272 15.9315 9.51272C15.8987 11.738 13.6419 14.3455 10.5646 14.5321C10.5646 14.1322 10.5646 13.7327 10.5646 13.3224C10.1781 13.3224 9.82882 13.3224 9.44327 13.3224C9.44327 13.7252 9.44327 14.1261 9.44327 14.5274C6.61344 14.3891 4.16411 12.01 4.05273 9.51179C4.47759 9.51179 4.90194 9.51179 5.3409 9.51179C5.3409 9.162 5.3409 8.83706 5.3409 8.4779C4.91454 8.4779 4.48363 8.4779 4.05273 8.4779C4.16059 5.97874 6.60941 3.59025 9.43319 3.4538C9.43319 3.84954 9.43319 4.24434 9.43319 4.65461C9.81521 4.65461 10.171 4.65461 10.5545 4.65461C10.5545 4.25325 10.5545 3.85845 10.5545 3.46365C13.0714 3.52413 15.7727 5.69601 15.9506 8.45961C15.5263 8.45961 15.1024 8.45961 14.6599 8.45961C14.6599 8.81502 14.6599 9.14606 14.6599 9.51272ZM9.43975 5.78978C9.43975 5.89903 9.43975 5.98343 9.43975 6.06783C9.43975 6.88041 9.4337 7.69298 9.44479 8.50556C9.44731 8.68139 9.38582 8.79158 9.24319 8.89942C8.73015 9.28907 8.22718 9.68949 7.70304 10.0998C7.94949 10.3713 8.18484 10.6305 8.42877 10.8992C8.51596 10.8345 8.58198 10.7881 8.64497 10.7389C9.22304 10.2864 9.79707 9.82922 10.3817 9.38378C10.5122 9.28438 10.5621 9.1831 10.5606 9.02837C10.5535 8.02824 10.5576 7.02811 10.5566 6.02798C10.5566 5.95202 10.5495 5.87606 10.5455 5.78978C10.1756 5.78978 9.82579 5.78978 9.43975 5.78978Z"
        fill="#A3D154"
      />
      <path
        d="M16.1918 3.54798C16.2296 3.98826 16.2633 4.384 16.2996 4.81209C15.9282 4.84163 15.5729 4.86977 15.1702 4.90165C15.0795 3.90949 14.9903 2.92671 14.8975 1.91158C15.9735 1.82764 17.0299 1.74512 18.1069 1.66119C18.1442 2.01895 18.1784 2.34951 18.2152 2.7068C17.8307 2.73962 17.4658 2.77104 17.0525 2.80668C18.9289 4.74598 19.828 6.99475 19.6495 9.57596C19.4701 12.167 18.2797 14.3084 16.1288 15.9542C12.7254 18.5584 7.83531 18.6808 4.33822 16.3021C0.643562 13.7894 -0.540783 9.49718 0.926294 5.84645C2.52642 1.86234 6.60007 -0.0886851 9.98478 0.00368514C9.98478 0.336124 9.98478 0.669032 9.98478 1.02632C6.98813 1.11729 4.59021 2.27824 2.88777 4.59172C1.76038 6.12356 1.31788 7.84624 1.48823 9.6899C1.81279 13.2051 4.59323 16.0874 8.26974 16.7729C12.2043 17.5067 16.0229 15.7254 17.7304 12.3719C19.3426 9.2046 18.4133 5.6242 16.1918 3.54798Z"
        fill="#A3D154"
      />
    </svg>
  );
};

const MessageIcon = () => {
  return (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_12215_6928)">
        <path
          d="M0.956809 19C1.10827 18.4898 1.23869 18.0467 1.3708 17.6045C1.55507 16.9856 1.74944 16.3699 1.91773 15.7471C1.94298 15.6518 1.88155 15.4979 1.8033 15.4236C1.11584 14.7751 0.585734 14.0437 0.397252 13.1365C0.131357 11.8598 0.533565 10.7447 1.42381 9.77426C2.4226 8.68502 3.72262 8.03335 5.19429 7.6958C7.81201 7.0957 10.3262 7.32073 12.6511 8.67018C13.6945 9.27574 14.5057 10.0907 14.9028 11.194C15.3866 12.5349 15.0913 13.7695 14.1809 14.8759C13.1669 16.1073 11.7701 16.7918 10.1874 17.1747C8.40438 17.606 6.62558 17.5537 4.85688 17.0802C4.76011 17.0544 4.62212 17.0817 4.5304 17.1286C3.46766 17.6803 2.40997 18.2397 1.3506 18.7976C1.24206 18.8539 1.13267 18.9094 0.956809 19ZM7.70935 13.3436C8.26639 13.3491 8.74348 12.9201 8.74769 12.4099C8.75106 11.9152 8.2849 11.4738 7.74806 11.4628C7.18766 11.4519 6.71477 11.8699 6.70468 12.3864C6.69458 12.9076 7.14559 13.3381 7.70935 13.3436ZM12.4744 12.4138C12.4786 11.8879 12.0293 11.4636 11.4672 11.4628C10.9093 11.4613 10.4466 11.891 10.4482 12.4075C10.4499 12.917 10.895 13.335 11.4462 13.3436C12.0142 13.3522 12.4711 12.9388 12.4744 12.4138ZM4.98898 12.4497C4.99403 11.9348 4.52198 11.4917 3.97084 11.4933C3.42475 11.4941 2.96532 11.9035 2.95775 12.3942C2.95018 12.9115 3.41381 13.3436 3.97589 13.3436C4.52535 13.3436 4.98393 12.9388 4.98898 12.4497Z"
          fill="#A3D154"
        />
        <path
          d="M15.1955 9.8985C15.6263 9.74066 16.0067 9.63908 16.4619 9.91726C17.2377 10.3908 18.0682 10.7869 18.9391 11.2495C18.9004 11.1003 18.8785 11.0065 18.8524 10.9135C18.6505 10.2017 18.451 9.48906 18.2415 8.77879C18.1919 8.61157 18.223 8.50765 18.3711 8.38575C19.3404 7.58484 19.9303 6.60421 19.884 5.36963C19.8436 4.28117 19.2958 3.40212 18.4553 2.67466C17.3471 1.71513 16.0058 1.19707 14.5299 0.961877C12.6518 0.662609 10.8301 0.84467 9.09509 1.59167C7.83966 2.13238 6.80385 2.90829 6.23504 4.12177C5.88836 4.86252 5.83115 5.62749 6.09115 6.40652C6.11808 6.487 6.13659 6.56905 6.16267 6.66516C5.88584 6.71907 5.62668 6.76986 5.35657 6.823C4.98466 6.02287 4.94848 5.21258 5.20091 4.38822C5.62079 3.01847 6.55731 1.99408 7.85733 1.31897C11.2879 -0.464139 14.7395 -0.455543 18.1229 1.44789C19.1696 2.03705 19.9698 2.87938 20.4065 3.96003C21.1167 5.71735 20.6918 7.27385 19.3472 8.63658C19.221 8.76394 19.1755 8.86396 19.2285 9.03821C19.5979 10.2665 19.953 11.4988 20.3123 12.7302C20.3241 12.7701 20.3291 12.8107 20.3451 12.8849C20.2542 12.8498 20.1886 12.8318 20.1306 12.8005C18.892 12.1372 17.6534 11.4738 16.4164 10.808C16.1766 10.6791 15.9789 10.4509 15.6457 10.5556C15.6171 10.5642 15.5439 10.4947 15.5153 10.4486C15.4067 10.2704 15.3049 10.0884 15.1955 9.8985Z"
          fill="#A3D154"
        />
        <path
          d="M12.8672 6.43778C12.311 6.437 11.8499 6.00646 11.8516 5.4884C11.8524 4.97738 12.3278 4.53434 12.8722 4.53668C13.4133 4.53903 13.8996 4.99301 13.8979 5.49309C13.8963 5.99864 13.4175 6.43856 12.8672 6.43778Z"
          fill="#A3D154"
        />
        <path
          d="M9.12 6.43778C8.56634 6.43543 8.09934 5.99864 8.10354 5.48606C8.10691 4.9766 8.58653 4.53356 9.12926 4.53668C9.67703 4.53981 10.1432 4.98129 10.1415 5.49465C10.1398 6.01349 9.67788 6.44012 9.12 6.43778Z"
          fill="#A3D154"
        />
        <path
          d="M17.6267 5.49621C17.625 6.01974 17.1639 6.44325 16.6026 6.43699C16.0658 6.43152 15.5912 5.9752 15.5938 5.46574C15.5954 4.97738 16.0826 4.53512 16.6161 4.53668C17.1664 4.53746 17.6292 4.9766 17.6267 5.49621Z"
          fill="#A3D154"
        />
      </g>
      <defs>
        <clipPath id="clip0_12215_6928">
          <rect
            width="20.4327"
            height="19"
            fill="white"
            transform="translate(0.316406)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
