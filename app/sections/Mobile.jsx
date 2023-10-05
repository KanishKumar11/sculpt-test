"use client";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
const images = ["./asset5.svg", "./2.svg", "3.svg"];
const Mobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="lg:hidden block relative bg-common-white w-full h-[4320px] overflow-hidden text-left text-sm text-black font-poppins">
      <Navbar />
      <div className="absolute top-[1002px] bg-lavender-100 w-full h-[1270px] tab:h-[1100px]" />
      <div className="absolute top-[127px] -left-5 bg-common-white shadow-[0px_0px_2px_rgba(145,_158,_171,_0.2),_0px_12px_24px_-4px_rgba(145,_158,_171,_0.12)] w-[187px] flex flex-col items-start justify-start py-2.5 px-4 box-border text-text-primary1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <img src="./asset17.svg" />
          </div>
        </div>
      </div>
      <div className="absolute top-[294px] left-[calc(50%_-_195px)] bg-common-white w-[390px] flex flex-col items-center justify-start py-0 px-6 box-border gap-[16px] text-center text-21xl font-h4-medium">
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
          <div className="self-stretch relative font-semibold">{`Making college life worth-while `}</div>
          <div className="self-stretch relative text-sm">{`College-specific chat-based community app that provides building blocks to eliminate loneliness, procrastination & increase productivity.`}</div>
        </div>
        <div className="rounded-lg flex flex-row items-center justify-start py-4 px-6 box-border text-sm text-common-white">
          <Button text="join Wishlist" />
        </div>
      </div>
      <div className="absolute top-[103px] -right-24 rounded-lg w-56 flex flex-col items-start justify-start py-2 px-3 box-border gap-[8px] [transform:_rotate(10.44deg)] [transform-origin:0_0]">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className={
              currentIndex === index ? "active w-[95%] " : "rotate w-[95%]"
            }
          />
        ))}
      </div>
      <div className="absolute top-[617.47px] left-[-11px] rounded  flex flex-col items-start justify-center p-2 box-border gap-[4px] [transform:_rotate(-9.17deg)] [transform-origin:0_0] text-text-primary1">
        <img src="./asset19.svg" className="w-[125px]" />
      </div>
      <div className="absolute top-[596px] -right-5 rounded-lg flex flex-col items-start justify-start p-3 box-border gap-[16px] text-text-primary1">
        <img src="./asset20.svg" alt="" srcset="" className="w-[180px]" />
      </div>
      <div className="absolute top-[780px] right-20 flex flex-row items-start justify-start gap-[13px] [transform:_rotate(270deg)] [transform-origin:0_0]">
        <img src="./asset3.svg" alt="" srcset="" />
      </div>
      <div className="absolute top-[820px] items-center justify-center flex w-full">
        <img
          className="mx-auto h-[435px] object-cover"
          alt=""
          src="asset9.svg"
        />
      </div>
      <div className="absolute top-[1307px] w-full flex flex-col items-center justify-start py-0 px-4 box-border gap-[64px] text-center text-21xl font-h4-medium">
        <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
          <div className="self-stretch relative font-semibold">{`THIS IS SCULPT `}</div>
          <div className="self-stretch relative text-sm w-[300px] md:w-[350px] mx-auto">{`A college-specific chat-based platform where you can chat, study & use it as a productivity platform & it’s a platform where you can find like-minded peers from colleges to build communities, learn & grow together `}</div>
        </div>
        <div className="self-stretch flex flex-wrap w-full items-center justify-center gap-[24px] text-left text-xl">
          <div className="self-stretch rounded-lg bg-gray flex flex-col items-start justify-start py-6 px-4 gap-[16px] max-w-[300px]">
            <img
              className="relative rounded-lg w-12 h-12"
              alt=""
              src="asset10.svg"
            />
            <div className="self-stretch relative font-medium">
              Dedicated chat system
            </div>
            <div className="self-stretch relative text-sm">
              A dedicated chat system designed for college students where
              students can organize, chat, and document stuff like never before.
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-gray flex flex-col items-start justify-start py-6 px-4 gap-[16px] w-[300px]">
            <img
              className="relative rounded-lg w-12 h-12"
              alt=""
              src="asset11.svg"
            />
            <div className="self-stretch relative font-medium">{`Building Communities `}</div>
            <div className="self-stretch relative text-sm">{`Creating the best community experience where you can interact with like-minded people, create communities & grow together 🚀`}</div>
          </div>
          <div className="self-stretch rounded-lg bg-gray flex flex-col items-start justify-start h-auto py-6 px-4 gap-[16px] max-w-[300px]">
            <img
              className="relative rounded-lg w-12 h-12"
              alt=""
              src="/asset12.svg"
            />
            <div className="self-stretch relative font-medium">{`Improving college life `}</div>
            <div className="self-stretch relative text-sm">{`With our tech & sections from great minds to college students, we are confident that we will elevate and enhance your college experience.`}</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2244px] tab:top-[2244px] flex flex-col items-start justify-start w-full py-6 px-6 pr-8 gap-[40px] text-13xl font-h4-medium">
        <div className="self-stretch flex flex-col items-center justify-center gap-[4px] md:w-full mt-10  max-w-[350px] w-[340px]">
          <div className="self-stretch relative font-semibold">{`Why build Sculpt `}</div>
          <div className="self-stretch relative text-sm text-text-secoundry">
            We are thrilled to be building Sculpt and our main objective is to
            make college life truly enjoyable.
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-[32px] text-base">
          <div className="md:w-full max-w-[355px] flex flex-col items-center justify-start gap-[8px] w-[340px]">
            <div className="self-stretch relative font-semibold">
              <span>{`Lack of student focused `}</span>
              <span className="text-purple-200">chat system.</span>
            </div>
            <div className="self-stretch relative text-sm text-text-secoundry">
              Without communication tools and AI capabilities, WhatsApp groups
              can become cluttered for students and college staff.
            </div>
          </div>
          <div className="max-w-[95%] md:max-w-[355px] flex flex-col items-start justify-start gap-[8px] text-[#535353] w-[340px]">
            <div className="self-stretch relative font-semibold">
              <span className="text-purple-200">Loneliness</span>
              <span className="text-black">{` `}</span>
              <span>:</span>
              <span className="text-black">
                {" "}
                greatest problem among college students .
              </span>
            </div>
            <div className="self-stretch relative text-sm text-text-secoundry">{`Loneliness among college students is common as they struggle to find peers who share their interests, skills, and thoughts. I have personally experienced this problem and unfortunately lots of students commit suicide due to this problem `}</div>
          </div>
          <div className="max-w-[95%] md:max-w-[355px] flex flex-col items-start justify-start gap-[8px] w-[340px]">
            <div className="self-stretch relative font-semibold">
              <span>{`Student `}</span>
              <span className="text-purple-200">communities....</span>
              <span>{` `}</span>
            </div>
            <div className="text-[#575757] self-stretch relative text-sm text-text-secoundry">
              Lack of college student community for connecting, creating,
              collaborating, and growing together.
            </div>
          </div>
          <div className="max-w-[95%] md:max-w-[355px] flex flex-col items-start justify-start gap-[8px] text-purple-200 w-[340px]">
            <div className="self-stretch relative font-semibold">
              <span>{`Procrastination: `}</span>
              <span className="text-black">{`a challenge.  `}</span>
            </div>
            <div className=" text-[#575757] self-stretch relative text-sm text-text-secoundry">
              Students face the challenge of procrastination due to social media
              use, lack of motivation, and seeking social validation.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3069.91px] left-[0px] w-full h-[771.45px] text-base font-h4-medium">
        <img
          className="absolute top-[140.09px] left-[16px] rounded-31xl w-10 h-10"
          alt=""
          src="./asset22.svg"
        />
        <div className="absolute top-[194.35px] flex flex-col items-center justify-center w-full py-0 md:px-4 gap-[16px] text-center text-13xl">
          <div className="w-[300px] max-w-[358px] flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative font-semibold">{`Launching soon `}</div>
            <div className="self-stretch relative text-sm font-medium text-slategray">
              <span>
                We will be launching our Beta app in selected colleges this
                December.
              </span>
              <span className="text-lightgray">{` `}</span>
              <span className="text-purple-100">{`Be the first college to be the part of sculpt  &  make college worth-while `}</span>
              <span className="text-black">.</span>
            </div>
          </div>
          <div className="rounded-lg  flex flex-row items-center justify-start py-4 px-6 box-border text-sm text-common-white">
            <Button />
          </div>
        </div>
        <div className="absolute top-[418.45px] left-2 rounded-lg bg-common-white shadow-[0px_0px_2px_rgba(145,_158,_171,_0.2),_0px_12px_24px_-4px_rgba(145,_158,_171,_0.12)] overflow-hidden flex flex-col items-start justify-start p-4 gap-[12px] [transform:_rotate(-0.03deg)] [transform-origin:0_0] text-purple-100">
          <div className="relative bg-secoundary-main w-2 h-2" />
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="flex-1 relative font-medium">{`Sampreet kulkarni `}</div>
          </div>
          <img
            className="relative rounded w-[154.07px] h-[151.07px] object-cover"
            alt=""
            src="./asset13.jpg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm text-text-primary font-poppins">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start text-xs text-text-primary1 font-h4-medium">
              <div className="flex-1 relative font-medium">{`Founder, CEO @ Sculpt `}</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-row items-center justify-start">
                <a
                  className="flex-1 relative [text-decoration:underline] text-[inherit]"
                  href="https://www.linkedin.com/in/sampreet-kulkarni-35b4b620b/"
                  target="_blank"
                >{`LinkedIn `}</a>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-row items-center justify-start">
                <a
                  className="flex-1 relative [text-decoration:underline] text-[inherit]"
                  href="mailto:kulkarnisampreet9@gmail.com"
                  target="_blank"
                >
                  Email
                </a>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-primary-main">
              <div className="flex-1 flex flex-row items-center justify-start">
                <a
                  className="flex-1 relative [text-decoration:underline] text-[inherit]"
                  href="https://twitter.com/SampreetKulkar6"
                  target="_blank"
                >
                  Twitter/X
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-[70px] right-2 rounded-lg flex flex-row items-center justify-start p-4 box-border [transform:_rotate(9.15deg)] [transform-origin:0_0] text-text-primary1">
          <a
            href="mailto:kulkarnisampreet9@gmail.com
"
          >
            <img src="./asset24.svg" alt="" className="w-[300px]" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-[0px] w-full bg-common-white shadow-[0px_0px_2px_rgba(145,_158,_171,_0.2),_0px_12px_24px_-4px_rgba(145,_158,_171,_0.12)] flex flex-col items-end justify-start py-10 px-4 box-border gap-[40px] text-purple-100">
        <a href="#">
          <img
            className="relative rounded-31xl w-12 h-12"
            alt=""
            src="./asset16.svg"
          />
        </a>
        <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
          <div className="relative leading-[140%]">{`Join Wishlist `}</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-13xl font-h4-medium">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="relative font-medium inline-block w-[513px]">
              <img src="./logo.svg" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-sm text-text-primary">
              <div className="self-stretch relative">{`College-specific chat-based community app that provides building blocks to eliminate loneliness, procrastination & increase productivity.`}</div>
              <div className="relative text-base leading-[140%] font-poppins text-purple-100">
                kulkarnisampreet9@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
