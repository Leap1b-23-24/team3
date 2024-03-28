"use client";
import { Container } from "@mui/material";

export const NotFound = () => {
  return (
    <>
      <div className="max-w-[1240px] m-auto py-[50px] px-[100px]">
        <div className="flex flex-col items-center">
          <img src="404.png" className="max-w-[1020px]"></img>
          <div className="">
            <button className="bg-[#FB2E86] w-[165px] py-[8px] px-3 rounded text-[16px] font-[500] text-[#EEEFFB]">
              Нүүр хуудас
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
