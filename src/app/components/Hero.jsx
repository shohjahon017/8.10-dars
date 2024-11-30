"use client";
import React, { useState } from "react";
import TimeLine from "./TimeLine";

function Hero() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="font-g">
      <div className="mt-[208px] flex items-center gap-8 ml-[500px] pb-8">
        <div className="-ml-[450px] flex flex-col items-center">
          <h6 className="transform rotate-90 text-white text-[18px] font-bold">
            Follow us
          </h6>
          <div className="mt-10 flex gap-6 flex-col">
            <img width={24} src="/instagram.svg" alt="" />
            <img width={24} src="/twitter.svg" alt="" />
          </div>
        </div>
        <div className="w-[72px] h-[2px] ml-[350px] bg-[#FBD784]"></div>
        <span className="font-extrabold text-[18px] text-[#FBD784] font-g">
          A Hiking Guide
        </span>
      </div>

      <div className="ml-[450px] flex">
        <h2 className="font-semibold text-[88px] text-white max-w-[950px] leading-tight font-f">
          Be Prepared For The Mountains And Beyond!
        </h2>
        <div className="fixed right-3">
          <TimeLine currentStep={currentStep} />
        </div>
      </div>

      <div className="  mt-[850px] mx-auto max-w-4xl flex gap-[114px] items-center bg-equipment relative z-30">
        <div className=" " onMouseEnter={() => setCurrentStep(1)}>
          <div className="mt-8 flex items-center pb-[27px] gap-8">
            <div className="w-[72px] h-[2px] bg-[#FBD784]"></div>
            <span className="font-extrabold text-[18px] text-[#FBD784]">
              GET STARTED
            </span>
          </div>

          <h2 className="bg-equipment font-semibold text-[64px] text-white max-w-[555px] leading-tight mt-4 pb-[27px] font-f">
            What level of hiker are you?
          </h2>

          <p className="max-w-[632px] font-bold text-[18px] text-white mt-4 pb-[27px] font-g">
            Determining what level of hiker you are can be an important tool
            when planning future hikes. This hiking level guide will help you
            plan hikes according to different hike ratings set by various
            websites like All Trails and Modern Hiker. What type of hiker are
            you – novice, moderate, advanced moderate, expert, or expert
            backpacker?
          </p>
          <div className="flex items-center gap-4 cursor-pointer">
            <span className="text-[#FBD784]">read more </span>
            <img src="/arrow.svg" alt="arrow" />
          </div>
        </div>
        <div>
          <img src="/01.png" alt="image" />
        </div>
      </div>

      <div
        className="relative z-20 mt-[250px] mx-auto max-w-4xl flex gap-[114px] items-center bg-equipment2"
        onMouseEnter={() => setCurrentStep(2)}
      >
        <div>
          <img src="/02.png" alt="image" />
        </div>
        <div>
          <div className="mt-8 flex items-center pb-[27px] gap-8">
            <div className="w-[72px] h-[2px] bg-[#FBD784]"></div>
            <p className="font-extrabold text-[18px] text-[#FBD784] capitalize  ">
              Hiking Essentials
            </p>
          </div>
          <h2 className="font-semibold font-f text-[64px] text-white max-w-[555px] leading-tight mt-4 pb-[27px]">
            Picking the right Hiking Gear!
          </h2>
          <p className="max-w-[632px] font-bold text-[18px] text-white mt-4 pb-[27px]">
            The nice thing about beginning hiking is that you don’t really need
            any special gear, you can probably get away with things you already
            have. Let’s start with clothing. A typical mistake hiking beginners
            make is wearing jeans and regular clothes, which will get heavy and
            chafe if they get sweaty or wet.
          </p>
          <div className="flex items-center gap-4 cursor-pointer">
            <span className="text-[#FBD784]">read more </span>
            <img src="/arrow.svg" alt="arrow" />
          </div>
        </div>
      </div>

      <div
        className="relative z-20 mt-[250px] mx-auto max-w-4xl flex gap-[114px] items-center  "
        onMouseEnter={() => setCurrentStep(3)}
      >
        <div className="bg-equipment3">
          <div className="mt-8 flex items-center pb-[27px] gap-8">
            <div className="w-[72px] h-[2px] bg-[#FBD784]"></div>
            <p className="font-extrabold text-[18px] text-[#FBD784]  ">
              WHERE YOU GO IS THE KEY
            </p>
          </div>
          <h2 className="font-semibold font-f text-[64px] text-white max-w-[555px] leading-tight mt-4 pb-[27px]">
            Understand Your Map & Timing
          </h2>
          <p className="max-w-[632px] font-bold text-[18px] text-white mt-4 pb-[27px]">
            To start, print out the hiking guide and map. If it’s raining, throw
            them in a Zip-Lock bag. Read over the guide, study the map, and have
            a good idea of what to expect. I like to know what my next landmark
            is as I hike. For example, I’ll read the guide and know that say, in
            a mile, I make a right turn at the junction.
          </p>
          <div className="flex items-center gap-4 cursor-pointer">
            <span className="text-[#FBD784]">read more </span>
            <img src="/arrow.svg" alt="arrow" />
          </div>
        </div>
        <div>
          <img src="/03.png" alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
