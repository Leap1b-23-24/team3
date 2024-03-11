import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

export const Footer = () => {
  const data = [
    { label: "Холбоо барих" },
    { label: "Үйлчилгээний нөхцөл" },
    { label: "Хүргэлтийн бүс" },
    { label: "Нууцлалын бодлого" },
  ];
  return (
    <div className="bg-[#12A795]">
      <div className="max-w-[1240px] m-auto flex flex-col items-center justify-between py-[50px]">
        <div className="flex gap-3 items-center">
          <img src="./headerImages/Pinecone Logo.png" className="w-7 h-7"></img>
          <p className="font-bold text-white text-2xl">Ecommerce</p>
        </div>
        <div className="flex gap-[50px] py-10">
          {data.map((item) => {
            return (
              <Link href="#" className="underline text-white">
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-5 py-5">
          <FacebookIcon sx={{ fontSize: "40px", color: "white" }} />
          <InstagramIcon sx={{ fontSize: "40px", color: "white" }} />
          <TwitterIcon sx={{ fontSize: "40px", color: "white" }} />
        </div>
        <div className="flex flex-col gap-[10px] items-center">
          <p className="text-white">2024 Pinecone Ecommerse LLC</p>
          <p className="text-white">Зохиогчийн эрх хуулиар хамгаалагдсан</p>
        </div>
      </div>
    </div>
  );
};
