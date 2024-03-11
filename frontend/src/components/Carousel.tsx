"use client";
import { useState } from "react"

export default function Carousel (){
    const slides= [
        {
            url: "Carousel1.png"
        },
        {
            url: "Carousel2.jpg"
        },
        {
            url: "Carousel3.jpg"
        },
        {
            url: "Carousel4.jpg"
        },
        {
            url: "Carousel1.png"
        },
    ]

    const [imageIndex,setImageIndex] = useState(0)
    const prevSlide =()=> {
        const isFirstSlide = imageIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : imageIndex - 1;
        setImageIndex(newIndex)
    }
    const nextSilde = ()=> {
        const isLastSlide = imageIndex === slides.length - 1;
        const newIndex = isLastSlide ? slides.length - 1 : imageIndex - 1;
        setImageIndex(newIndex)
    }
    return(
     <div className="max-w-[1400px] h-[780px] w-full  m-auto py-16 px-4 relative">
        <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500" style={{backgroundImage: `url(${slides[imageIndex].url})`}}></div>
        <button
            className="border-[1px] border-[#000] px-[10px] py-[5px] rounded-[5px]"
            onClick={prevSlide}
          >
            {"<"}
          </button>
          <button
            className="border-[1px] border-[#000] px-[10px] py-[5px] rounded-[5px]"
            onClick={prevSlide}
          >
            {">"}
          </button>
     </div>
    )
}