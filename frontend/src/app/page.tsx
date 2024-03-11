import { SingleCardOfHomePage } from "@/components";

export default function Home() {
  return (
    <div className="max-w-[1240px] m-auto ">
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 place-content-center place-items-center gap-5  ">
        {new Array(4).fill(<SingleCardOfHomePage />)}
      </div>
    </div>
  );
}
