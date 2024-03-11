export const Footer = () => {
  return (
    <div className="bg-[#12A795]">
      <div className="max-w-[1240px] m-auto flex flex-col items-center justify-between py-[50px]">
        <div className="flex gap-[12px] items-center">
          <img
            src="./headerImages/Pinecone Logo.png"
            className="w-[28px] h-[28px]"></img>
          <p className="font-bold text-white text-2xl">Ecommerce</p>
        </div>
        <div className="flex gap-[50px] py-[40px]">
          <p className="underline text-white">Холбоо барих</p>
          <p className="underline text-white">Үйлчилгээний нөхцөл</p>
          <p className="underline text-white">Хүргэлтийн бүс</p>
          <p className="underline text-white">Нууцлалын бодлого</p>
        </div>
        <div className="flex flex-col gap-[10px] items-center">
          <p className="text-white">2024 Pinecone Ecommerse LLC</p>
          <p className="text-white">Зохиогчийн эрх хуулиар хамгаалагдсан</p>
        </div>
      </div>
    </div>
  );
};
