import { SingleCardOfHomePage } from "@/components";

export default function Home() {
  return (
    <div>
      <div className="flex">
        {new Array(4).fill(<SingleCardOfHomePage />)}
      </div>
    </div>
  );
}
