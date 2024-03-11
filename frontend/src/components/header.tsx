export const Header = () => {
  return (
    <div className="bg-[#12A795]">
      <div className="max-w-[1240px] m-auto flex items-center justify-between py-[10px]">
        <div className="flex gap-[12px] items-center">
          <img
            src="./headerImages/Pinecone Logo.png"
            className="w-[28px] h-[28px]"></img>
          <p className="font-bold text-white text-2xl">Ecommerce</p>
        </div>
        <div className="flex bg-white items-center rounded-lg overflow-hidden relative w-[35%]">
          <img
            src="./headerImages/searchIcon.png"
            className="w-[28px] h-[28px] absolute left-[4px]"></img>
          <input
            placeholder="Хайлт"
            type="search"
            className="py-[9px] pl-[35px] w-full"
          />
        </div>
        <div className="w-[12%] flex items-center justify-between gap-[8px]">
          <img
            src="./headerImages/heart.png"
            className="w-[23px] h-[23px]"></img>
          <img
            src="./headerImages/sags.png"
            className="w-[23px] h-[23px]"></img>
          <img
            src="./headerImages/Avatar.png"
            className="w-[41px] h-[41px]"></img>
        </div>
      </div>
    </div>
  );
};
