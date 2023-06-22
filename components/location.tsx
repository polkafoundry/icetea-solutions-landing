import Image from "next/image";
import { LocationIcon } from "./svg/location";
import AboutUsArrowRight from "./svg/home/about-us-arrow-right";
import Link from "next/link";
import { itsEmail, pathname } from "@/constants";

const OfficeLocation = () => {
  return (
    <div>
      <div className="text-[35px] xl:text-[48px] xl:leading-[70px] text-center text-[#01289D] font-semibold mt-[60px] capitalize">
        Office Location
      </div>
      <div className="max-w-[1440px] px-5 mx-auto grid lg:grid-cols-2 gap-[72px] mt-10">
        <div className="p-5 lg:p-6 border border-[#0083FF] rounded-[26px] text-[#0030C0]">
          <Image
            src="/images/home/location_preview.png"
            className="w-full h-auto lg:h-[390px] rounded-[2px]"
            width={947}
            height={588}
            priority
            loading="eager"
            alt="location"
          />
          <div className="text-[20px] xl:text-[24px] xl:leading-[30px] font-semibold flex mt-[35px] gap-1">
            <div className="min-w-[28px]">
              <LocationIcon />
            </div>
            Ha Noi - Viet Nam
          </div>
          <ul className="text-[14px] xl:text-[17px] xl:leading-[26px] list-disc pl-5 mt-1 capitalize">
            <li>11th Floor, IPH Tower, 241 Xuan Thuy Street, CauGiay, Hanoi</li>
            <li>
              contact mail to:{" "}
              <Link href={`mailto:${itsEmail}`}>{itsEmail}</Link>
            </li>
          </ul>
          <Link href={`/${pathname?.CONTACT}`}>
            <button className="flex w-fit mt-8 gap-2 text-white items-center btn-fill-gradient px-6 py-2">
              Contact now
              <AboutUsArrowRight />
            </button>
          </Link>
        </div>
        <div>
          <Image
            src="/images/home/location_map.svg"
            className="w-full h-auto lg:h-[622px]"
            width={709}
            height={622}
            alt="map"
          />
        </div>
      </div>
    </div>
  );
};

export default OfficeLocation;
