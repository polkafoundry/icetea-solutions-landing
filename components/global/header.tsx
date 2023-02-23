import { nextPath } from "@/constants";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <header className="flex justify-between items-center px-[100px] py-[14px] text-white">
      <Link href="/">
        <div className="text-[28px] font-bold cursor-pointer">
          Icetea Solutions
        </div>
      </Link>
      <div className="flex gap-[60px]">
        <button className="hover:scale-110 duration-500">
          <Link href={`/${nextPath.PORTFOLIO}`}>
            Portfolio
          </Link>
        </button>
        <Link href={`/${nextPath.CONTACT}`}>
          <button className="px-[30px] py-[10px] rounded-[40px] bg-gradient-to-bl hover:bg-gradient-to-br from-[#18C8FF] to-[#933FFE]">
            Contact Us
          </button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
