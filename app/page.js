"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Mobile from "./sections/Mobile";
import { motion } from "framer-motion";
import Script from "next/script";
import Logo from "./components/Logo";
import Button from "./components/Button";
const Home = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        id="g"
        src={`https://www.googletagmanager.com/gtag/js?id=G-1YH9SXSLKW`}
      />

      <Script strategy="lazyOnload" id="g">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-1YH9SXSLKW', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <div className="lg:block hidden relative bg-white w-full h-[4600px]  12l:h-[4400px] overflow-hidden text-left text-lg text-black font-body1">
        <Navbar />
        <Hero />

        <div className="absolute top-[2720px] z-50 12l:top-[2480px] pt-20 bg-white flex flex-row items-start justify-start py-8 px-[80px] gap-[50px] text-45xl font-subtitle-1">
          <div className="12l:min-w-[550px] min-w-[300px] flex flex-col items-start justify-start gap-[16px]">
            <div className=" font-semibold">{`Why build Sculpt `}</div>
            <div className=" relative text-xl">
              We are thrilled to be building Sculpt and our main objective is to
              make college life truly enjoyable.
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[56px] text-xl px-5">
            <div className="px-2">
              Without communication tools and AI capabilities, WhatsApp groups
              can become cluttered for students and college staff.
            </div>
            <div className="px-2">
              Loneliness among college students is common as they struggle to
              find peers who share their interests, skills, and thoughts. I have
              personally experienced this problem and unfortunately lost a
              friend to suicide because of it.
            </div>
            <div className="px-2">
              Lack of college student community for connecting, creating,
              collaborating, and growing together.
            </div>
            <div className="px-2">
              Students face the challenge of procrastination due to social media
              use, lack of motivation, and seeking social validation.
            </div>
          </div>
        </div>
        <div className="absolute top-[3320px] 12l:top-[3087px] w-full flex flex-col items-center justify-start gap-[24px] text-center text-45xl font-subtitle-1">
          <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
            <div className="self-stretch relative font-semibold">{`Launching soon `}</div>
            <div className="w-[700px] text-xl">
              <span className="w-[700px]">
                We will be launching our Beta app in selected collages this
                December
              </span>
              <span className="text-purple-100">{`. Be the first collage to be the part of sculpt  &  make collage worth-while `}</span>
              <span>.</span>
            </div>
          </div>
          <div className="rounded-lg flex flex-row items-end justify-start py-3.5 px-10 text-left text-xl text-white">
            {/* <div className="relative font-semibold">{` Wishlist now  `}</div> */}
            <Button />
          </div>
        </div>
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          className="absolute top-[3500px] z-[99] 12l:top-[3353.79px] rounded-lg bg-white shadow-[0px_0px_2px_rgba(145,_158,_171,_0.2),_0px_12px_24px_-4px_rgba(145,_158,_171,_0.12)] w-[286px] overflow-hidden flex flex-col items-start justify-start p-4 box-border gap-[12px] [transform:_rotate(-5.17deg)] [transform-origin:0_0] text-5xl text-purple-100 font-subtitle-1"
        >
          <div className="relative bg-secoundary-main w-2 h-2" />
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="flex-1 relative font-medium">{`Sampreet kulkarni `}</div>
          </div>
          <img
            className="self-stretch relative rounded max-w-full overflow-hidden h-[270.2px] shrink-0 object-cover"
            alt=""
            src="./asset13.jpg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-base text-text-primary font-body1">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start text-xl text-text-primary1 font-subtitle-1">
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
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          className="absolute top-[3680px] cursor-pointer 12l:top-[3586px] -right-20 rounded-lg h-[100px] flex flex-row items-center justify-start p-4 gap-[16px] [transform:_rotate(0.24deg)] [transform-origin:0_0] text-5xl text-text-primary1 font-subtitle-1"
        >
          <a href="mailto:kulkarnisampreet9@gmail.com">
            {" "}
            <img
              src="./asset25.svg"
              className="[user-select:none] [user-drag:none]"
            />
          </a>
        </motion.div>
        <div className="absolute bottom-[0px] bg-white box-border w-full flex flex-col items-start justify-start pt-20 px-[88px] pb-20 gap-[40px] text-xl text-purple-100 border-t-[1px] border-solid border-grey-5">
          <div className="w-full flex flex-row items-start justify-between">
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[5px] gap-[60px]">
              <div className="relative leading-[140%]">{`Join Wishlist `}</div>
              <a
                href="mailto:kulkarnisampreet9@gmail.com"
                className="[text-decoration:none] text-purple-950"
              >
                <div className="relative leading-[140%] text-black">
                  Contact Us
                </div>
              </a>
            </div>
            <a href="#">
              <img
                className="relative rounded-31xl w-12 h-12"
                alt=""
                src="./asset16.svg"
              />
            </a>
          </div>
          <div className="w-full flex flex-col items-start justify-start text-45xl font-subtitle-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="relative font-medium inline-block w-[513px]">
                <img src="./logo.svg" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-xl text-text-primary">
                <div className="self-stretch relative">{`College-specific chat-based community app that provides building blocks to eliminate loneliness, procrastination & increase productivity.`}</div>
                <div className="relative text-base leading-[140%] font-body1 text-purple-100">
                  <a
                    href="mailto:kulkarnisampreet9@gmail.com"
                    className="text-purple-950 [text-decoration:none]"
                  >
                    kulkarnisampreet9@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mobile />
    </>
  );
};

export default Home;
