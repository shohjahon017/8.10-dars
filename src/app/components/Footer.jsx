import React from "react";

function Footer() {
  return (
    <div className="font-g">
      <div className="flex mx-[209px] mt-[272px] justify-between text-white pb-32">
        <div className="flex flex-col mr-[200px]">
          <h4 className="font-f text-[32px]">MNTN</h4>
          <span className="max-w-[303px] pb-[124px] pt-6 font-bold text-[18px]">
            Get out there & discover your next slope, mountain & destination!
          </span>
          <span className="text-gray-600 font-medium text-[18px]">
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <h6 className="text-[#FBD784] font-bold text-2xl ">
            More on The Blog
          </h6>
          <a className="font-medium text-[18px]" href="#">
            About MNTN
          </a>
          <a className="font-medium text-[18px]" href="#">
            Contributors & Writers
          </a>
          <a className="font-medium text-[18px]" href="#">
            Write For Us
          </a>
          <a className="font-medium text-[18px]" href="#">
            Contact Us
          </a>
          <a className="font-medium text-[18px]" href="#">
            Privacy Policy
          </a>
        </div>{" "}
        <div className="flex flex-col gap-5">
          <h6 className="text-[#FBD784] font-bold text-2xl">More on MNTN</h6>
          <a className="font-medium text-[18px]" href="#">
            The Team
          </a>
          <a className="font-medium text-[18px]" href="#">
            Jobs
          </a>
          <a className="font-medium text-[18px]" href="#">
            Press
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
