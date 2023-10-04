"use client";
import React from "react";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useScroll } from "framer-motion";
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600"] });
const images = ["./asset5.svg", "./2.svg", "3.svg"];
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [rightImageX, setRightImageX] = useState(0);
  const [imageX, setImageX] = useState(0); // Initial horizontal position
  const [isImageVisible, setIsImageVisible] = useState(true); // Initial visibility
  const { scrollYProgress } = useScroll();
  const maxScrollY = 200;
  const progress = Math.min(scrollY / maxScrollY, 1);

  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const rightcontrols = useAnimation();
  // Define an effect to update scroll position and trigger animations
  useEffect(() => {
    // Function to update scroll position
    const updateScrollPosition = () => {
      setScrollY(window.scrollY);
      // setScrollX(window.scrollX);

      setImageX(-scrollY * 0.3);
      setRightImageX(-scrollY * 0.3);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", updateScrollPosition);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  // Define animation properties based on scroll position
  useEffect(() => {
    // Customize these calculations based on your desired animation behavior
    const imageX = scrollY * 0.5; // Adjust horizontal movement
    const rightImageX = scrollY * -0.5; // Adjust horizontal movement
    const imageY = scrollY * 0.7; // Adjust vertical movement

    controls.start({ x: progress * imageX, y: progress * imageY });
    controls2.start({ x: progress * imageX * 1.3, y: progress * imageY });
    controls3.start({ x: progress * imageX * 1.5, y: progress * imageY });
    rightcontrols.start({ x: progress * rightImageX, y: progress * imageY });
    const test1 = document.getElementById("test1");
    const test2 = document.getElementById("test2");
    const test3 = document.getElementById("test3");
    console.log(test2.getBoundingClientRect().x);
  }, [scrollX, scrollY, controls, scrollYProgress]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="w-full relative">
      <div className="18l:w-[964px] flex flex-col items-center justify-center mx-auto mt-28 gap-[24px] text-center 14l:w-[800px] 12l:w-[600px] lg:w-[450px] 14l:-text-[42px] 12l:text-[34px] lg:text-[24px] 18l:text-[50px] font-subtitle-1">
        <div className="flex flex-col items-center justify-start gap-[16px]">
          <div className="font-semibold">
            <h1>Making college life worth-while </h1>
          </div>
          <div className="relative text-lg 14l:text-xl lg:text-base inline-block 14l:w-[817px] 12l:w-[700px] lg:w[450px] lg:-mt-12 12l:-mt-16 14l:-mt-20 18l:-mt-24">{`College-specific chat-based community app that provides building blocks to eliminate loneliness, procrastination & increase productivity.`}</div>
        </div>
        <Button text="Whishlist Now" />
        <div className="absolute top-[0px] left-[-5px] w-[300px] 14l:w-[350px] 18l:w-[390px] flex flex-col items-start justify-start box-border gap-[12px] text-xl text-text-primary1">
          <motion.img
            initial={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, y: 100, x: 0 }}
            animate={controls} // Animation controls
            id="test1"
            style={{
              x: progress * imageX,
              y: progress * scrollY,
            }}
            className="object-contain w-[300px] 14l:w-[350px]  18l:w-[390px] test"
            src="./asset1.svg"
          />
        </div>
      </div>
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={controls2}
        id="test3"
        className="absolute test 18l:top-[425px] 14l:top-[360px] 12l:top-[280px] lg:top-[270px] 18l:w-auto 14l:scale-90 12l:scale-75 lg:scale-50 14l:left-[-20px] 12l:left-[-45px] lg:left-[-70px] flex flex-row items-center justify-start p-4 gap-[4px]"
      >
        <img src="./asset2.svg" />
        <img src="./asset3.svg" />
      </motion.div>
      <div className="absolute 18l:top-[600px] 14l:top-[525px] lg:w-[370px] 12l:w-auto top-[450px] 14l:left-[5px] 12l:left-[-20px] lg:left-[-122px] rounded flex flex-col items-end justify-start p-2 text-xl text-text-primary1">
        <motion.img
          initial={{ x: 0, y: 0 }}
          animate={controls3} // Animation controls
          src="./asset4.svg"
          alt=""
          id="test2"
          className="test lg:w-[250px] 12l:w-auto"
        />
      </div>
      <div
        id="image-container"
        className="absolute top-[-50px] lg:top-[-90px] 14l:right-[-140px] right-[-190px] rounded-lg flex flex-col items-start justify-start py-4 px-3 gap-[12px] [transform:_rotate(11.27deg)] [transform-origin:0_0]"
      >
        {images.map((src, index) => (
          <motion.img
            initial={{ x: 0, y: 0 }}
            animate={rightcontrols} // Animation controls
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className={
              currentIndex === index
                ? "active w-[70%] 14l:w-[90%] 18l:w-full"
                : "rotate w-[70%] 14l:w-[90%] 18l:w-full"
            }
          />
        ))}
      </div>
      <div className="absolute lg:top-[200px] 12l:top-[270px] lg:w-[270px] right-[0px] rounded-lg w-[350px] 18l:w-[390px]  flex flex-col items-start justify-start p-4 box-border gap-[16px] text-text-primary1">
        <motion.img
          initial={{ x: 0, y: 0 }}
          animate={rightcontrols} // Animation controls
          src="./asset6.svg"
          alt=""
          className=" lg:w-[270px] 12lg:w-[350px] 18l:w-[390px]"
        />
      </div>
      <div className="absolute z-20 lg:top-[400px] 12l:top-[482px] right-[-80px] rounded-lg w-[180px] overflow-hidden flex flex-col items-start justify-start py-4 px-3 box-border gap-[12px] text-text-primary1">
        <motion.img
          initial={{ x: 0, y: 0 }}
          animate={rightcontrols} // Animation controls
          src="./asset7.svg"
          alt=""
          srcset=""
          className="z-20"
        />
      </div>
      <div className="absolute 18l:top-[530px] lg:top-[400px] 12l:top-[482px] right-16 rounded w-[240px] 18l:w-[267px] flex flex-col items-end justify-start p-2 box-border gap-[4px] text-xl text-text-primary1">
        <motion.img
          initial={{ x: 0, y: 0 }}
          animate={rightcontrols} // Animation controls
          src="./asset8.svg"
          alt=""
          className="w-[240px] 18l:w-[267px]"
        />
      </div>
      <div className="absolute top-[900px] z-[99] w-full flex items-center justify-center">
        <img
          className="w-[390px] h-auto object-cover z-[99]"
          alt=""
          id="phone"
          src="/asset9.svg"
        />
      </div>
      <div className="absolute top-[1150px] 12:top-[1200px] left-[1px] bg-lavender-100 w-full h-[1450px] 12l:h-[1250px]" />
      <div className="absolute top-[1800px] flex flex-col items-center justify-center w-full gap-[80px] text-center text-45xl font-subtitle-1">
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <div className="self-stretch relative font-semibold">{`THIS IS SCULPT `}</div>
          <div className="self-stretch relative text-xl w-[1000px]">{`A college-specific chat-based platform where you can chat, study & use it as a productivity platform & it’s a platform where you can find like-minded peers from colleges to build communities, learn & grow together `}</div>
        </div>
        <div className="w-full gap-10 px-10 mx-10 flex flex-wrap items-center justify-center text-left text-13xl">
          <div className="w-[25%] h-auto rounded-2xl bg-gray flex flex-col items-start justify-start p-6 gap-[16px]">
            <img
              className="relative rounded-lg w-12 h-12"
              alt=""
              src="/asset10.svg"
            />
            <div className="relative font-medium inline-block w-[375px]">
              Dedicated chat system
            </div>
            <div className="relative text-base inline-block w-[375px]">
              A dedicated chat system designed for college students where
              students can organize, chat, and document stuff like never before.
            </div>
          </div>
          <div className="rounded-2xl h-auto w-[25%] bg-gray flex flex-col items-start justify-start p-6 gap-[16px]">
            <img
              className="relative rounded-lg w-12 h-12"
              alt=""
              src="/asset11.svg"
            />
            <div className="relative font-medium inline-block w-[375px]">{`Building Communities `}</div>
            <div className="relative text-base inline-block w-[375px]">{`Creating the best community experience where you can interact with like-minded people, create communities & grow together 🚀`}</div>
          </div>
          <div className="rounded-2xl h-auto w-[25%] bg-gray flex flex-col items-start justify-start p-6 gap-[16px]">
            <img
              className="relative rounded-lg w-12 h-12"
              alt=""
              src="/asset12.svg"
            />
            <div className="relative font-medium inline-block w-[375px]">{`Improving college life `}</div>
            <div className="relative text-base inline-block w-[375px]">{`With our tech & sections from great minds to college students, we are confident that we will elevate and enhance your college experience.`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
