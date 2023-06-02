import { navItems, nextPath } from "@/constants";
import clsx from "clsx";
import Link from "next/link";
import { ImageComponent } from "./image";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { LogoText } from "../svg/logo-text";

const HeaderComponent = () => {
  const router = useRouter();
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleShow = () => setIsShow(!isShow);

  return (
    <header className="h-[73px]">
      <div className="fixed w-full top-0 left-0 z-50 py-[14px] text-white bg-white">
        <div className="px-5 max-w-[1440px] mx-auto flex justify-between items-center">
          <Link href="/">
            <LogoText />
          </Link>
          <div className="flex gap-5 items-center">
            {navItems?.map((navItem: any, index: number) => {
              return (
                <Link key={index} href={`/${navItem?.value}`}>
                  <div>
                    <div className="text-[16px] leading-[22px] text-[#0030C0]">
                      {navItem?.title}
                    </div>
                    <div></div>
                  </div>
                </Link>
              );
            })}
            <button className="btn-fill-gradient px-[18px] py-[10px] border border-[#0083FF]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
