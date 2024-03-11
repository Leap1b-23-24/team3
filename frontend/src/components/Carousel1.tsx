"use client";
import { url } from "inspector";
import { useState } from "react";

export default function Carousel() {
  const slides1 = [
    {
      url: "Carousel1.png",
    },
    {
      url: "Carousel2.jpg",
    },
    {
      url: "Caousel3.jpeg",
    },
    {
      url: "Carousel4.webp",
    },
    {
      url: "Carousel1.png",
    },
  ];
  return (
    <div className="max-w-[1237px] h-[557px]  m-auto overflow-hidden">
      <div className="flex  relative w-[500%]">
        <div className="relative">
          <div
            className="flex"
            style={{
              transform: `translateX(${(-100 * 4) / 5}%)`,
              transition: "2s",
            }}
          >
            {slides1.map((index) => {
              return (
                <div>
                  <div className="flex">
                    <img
                      className="w-[1237px] h-[557px] rounded-[20px]"
                      src={index.url}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
