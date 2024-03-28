"use client";

export const ProductDetailCard = () => {
  return (
    <>
      <div className="w-[100%] flex border border-black">
        <div className="w-[50%] flex  border border-blue-800">
          <div className="w-[20%] flex flex-col justify-between border border-red-800">
            <img src="./bag1.png" className="w-full h-[155px]"></img>
            <img src="./bag2.png" className="w-full h-[155px]"></img>
            <img src="./bag3.png" className="w-full h-[155px]"></img>
          </div>
          <div className="w-[70%] m-auto border border-yellow-800">
            <img src="./bag4.png" className="w-full h-[487px] cover-fit"></img>
          </div>
        </div>
        <div className="w-[50%] flex flex-col pr-[32px] text-[#111C85] gap-[64px] border border-green-800">
          <div className="flex flex-col gap-[16px]">
            <p className="font-bold text-3xl">Sofa</p>
            <p className="text-2xl">750’000₮</p>
            <p className="text-[#9295AA]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
          </div>

          <div className="flex items-center gap-[20px]">
            <p className="font-bold text-l ">Add To cart</p>
            <img src="./julh.png" className="w-[15px] h-[13x]"></img>
          </div>
        </div>
      </div>
    </>
  );
};
