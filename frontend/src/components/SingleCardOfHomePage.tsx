export const SingleCardOfHomePage = () => {
  return (
    <div className="max-w-[235px] max-h-[416px] w-full h-full rounded-xl border border-[#ECEDF0]">
      <img src="/Image.svg" className="rounded-t-xl" />

      <div className="p-6">
        <div className="h-[116px]">
          <b className="text-xl mb-3">Олон төрөл сүлжээс, өнгөтэй</b>
          <p className="text-base mb-6">Дугуй захтай цамц</p>
        </div>

        <div className="font-extrabold text-[24px] text-right ">768,000₮</div>
      </div>
    </div>
  );
};
