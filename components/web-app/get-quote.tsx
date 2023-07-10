import Image from "next/image";
import AboutUsArrowRight from "../svg/home/about-us-arrow-right";
import { SmallLogoInWebApp } from "../svg/insight/small-logo";
import Link from "next/link";
import {
  itsEmail,
  listFormData,
  pathname,
  toastType,
  typeOfConsultation,
} from "@/constants";
import { useState, useContext } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import clsx from "clsx";
import { ToastContext } from "../context/toast-context";

const NEXT_PUBLIC_PRIVATE_KEY = process?.env?.NEXT_PUBLIC_PRIVATE_KEY;
const NEXT_PUBLIC_CLIENT_EMAIL = process?.env?.NEXT_PUBLIC_CLIENT_EMAIL;
const NEXT_PUBLIC_SHEET_ID = process?.env?.NEXT_PUBLIC_SHEET_ID;

const GetQuote = () => {
  const formDataDefault: { [key: string]: string } = {
    ["typeOfConsultation"]: "",
    ["firstName"]: "",
    ["lastName"]: "",
    ["phoneNumber"]: "",
    ["email"]: "",
    ["role"]: "",
    ["company"]: "",
    ["message"]: "",
  };
  const { toast } = useContext(ToastContext);
  const doc = new GoogleSpreadsheet(NEXT_PUBLIC_SHEET_ID);
  const [formData, setFormData] = useState<any>(formDataDefault);
  const [isSubmitAction, setIsSubmitAction] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isCheckPolicy, setIsCheckPolicy] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async () => {
    try {
      setIsSubmitAction(true);
      if (!isCheckPolicy) {
        setErrorMessage("Please confirm that you have read privacy policy");
        return;
      }
      if (listFormData?.some((data) => !formData[data])) {
        setErrorMessage("Please enter fields are required");
        return;
      }
      setErrorMessage("");
      setIsSubmit(true);
      const privateKey = NEXT_PUBLIC_PRIVATE_KEY as string;
      await doc.useServiceAccountAuth({
        client_email: NEXT_PUBLIC_CLIENT_EMAIL as string,
        private_key: privateKey?.replace(/\\n/g, "\n"),
      });
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      const formatedDate = new Date().toUTCString();
      await sheet.addRow({
        ["Time"]: formatedDate,
        ["Type Of Consultation"]: formData["typeOfConsultation"],
        ["First Name"]: formData["firstName"],
        ["Last Name"]: formData["lastName"],
        ["Phone Number"]: formData["phoneNumber"],
        ["Email"]: formData["email"],
        ["Role"]: formData["role"],
        ["Company"]: formData["company"],
        ["Message"]: formData["message"],
      });
      await fetch(`${process?.env?.NEXT_PUBLIC_URL || ""}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          typeOfConsultation: formData["typeOfConsultation"],
          firstName: formData["firstName"],
          lastName: formData["lastName"],
          phoneNumber: formData["phoneNumber"],
          email: formData["email"],
          role: formData["role"],
          company: formData["company"],
          message: formData["message"],
        }),
      });
      setIsSubmit(false);
      toast("Your form has been submitted.", toastType?.SUCCESS);
    } catch (err) {
      setIsSubmit(false);
      toast("Your form has been failed.", toastType?.ERROR);
    }
  };

  const handleChangeData = (value: string, key: string) => {
    const cloneData = { ...formData };
    cloneData[key] = value;
    setFormData(cloneData);
  };

  return (
    <div className="w-full flex border border-[#0083FF] rounded-[24px] bg-white overflow-hidden">
      <div className="w-full px-5 py-8 lg:p-[48px]">
        <div className="lg:max-w-[606px] text-[#0030C0] text-[16px] leading-[23px]">
          <div className="text-[35px] xl:text-[48px] xl:leading-[70px] font-semibold">
            Get Quote
          </div>
          <div className="mt-4 capitalize">
            You are welcome to fill in the form below, and our IT experts will
            reach out to you during business hours to discuss your project.
          </div>
          {errorMessage && (
            <div className="text-[14px] mt-3 py-2 px-4 bg-[#ff7070] text-white">
              {errorMessage}
            </div>
          )}
          <select
            className={clsx(
              "w-full h-[46px] mt-8 border border-[#0030C0] text-[#757575] rounded-[6px] outline-none",
              isSubmitAction && !formData["typeOfConsultation"]
                ? "border-[#FF3434]"
                : "border-[#0030C0]"
            )}
            defaultValue={""}
            onChange={(e) =>
              handleChangeData(e?.target?.value, "typeOfConsultation")
            }
          >
            <option disabled value={""}>
              Type of consultation
            </option>
            {typeOfConsultation?.map((type: any, index: number) => {
              return (
                <option key={index} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <div className="font-[500] text-[20px] leading-[29px]">
                First name<span className="text-[#D31819]">*</span>
              </div>
              <input
                placeholder="Enter name"
                className={clsx(
                  "w-full h-[46px] mt-2 px-4 border border-[#0030C0] text-[#757575] rounded-[6px] outline-none",
                  isSubmitAction && !formData["firstName"]
                    ? "border-[#FF3434]"
                    : "border-[#0030C0]"
                )}
                onChange={(e) =>
                  handleChangeData(e?.target?.value, "firstName")
                }
              />
            </div>
            <div>
              <div className="font-[500] text-[20px] leading-[29px]">
                Last name<span className="text-[#D31819]">*</span>
              </div>
              <input
                placeholder="Enter name"
                className={clsx(
                  "w-full h-[46px] mt-2 px-4 border border-[#0030C0] text-[#757575] rounded-[6px] outline-none",
                  isSubmitAction && !formData["lastName"]
                    ? "border-[#FF3434]"
                    : "border-[#0030C0]"
                )}
                onChange={(e) => handleChangeData(e?.target?.value, "lastName")}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <div className="font-[500] text-[20px] leading-[29px]">
                Phone number
              </div>
              <input
                type="number"
                placeholder="Enter phone number"
                className="w-full h-[46px] mt-2 px-4 border border-[#0030C0] text-[#757575] rounded-[6px] outline-none"
                onChange={(e) =>
                  handleChangeData(e?.target?.value, "phoneNumber")
                }
              />
            </div>
            <div>
              <div className="font-[500] text-[20px] leading-[29px]">
                Email<span className="text-[#D31819]">*</span>
              </div>
              <input
                placeholder="Enter email"
                className={clsx(
                  "w-full h-[46px] mt-2 px-4 border border-[#0030C0] text-[#757575] rounded-[6px] outline-none",
                  isSubmitAction && !formData["email"]
                    ? "border-[#FF3434]"
                    : "border-[#0030C0]"
                )}
                onChange={(e) => handleChangeData(e?.target?.value, "email")}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <div className="font-[500] text-[20px] leading-[29px]">Role</div>
              <input
                placeholder="Enter your role"
                className="w-full h-[46px] mt-2 px-4 border border-[#0030C0] text-[#757575] rounded-[6px] outline-none"
                onChange={(e) => handleChangeData(e?.target?.value, "role")}
              />
            </div>
            <div>
              <div className="font-[500] text-[20px] leading-[29px]">
                Company
              </div>
              <input
                placeholder="Enter company"
                className="w-full h-[46px] mt-2 px-4 border border-[#0030C0] text-[#757575] rounded-[6px] outline-none"
                onChange={(e) => handleChangeData(e?.target?.value, "company")}
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="font-[500] text-[20px] leading-[29px]">Message</div>
            <textarea
              placeholder="Enter message"
              className="w-full h-[150px] mt-2 py-2 px-4 border border-[#0030C0] text-[#757575] rounded-[6px] outline-none resize-none"
              onChange={(e) => handleChangeData(e?.target?.value, "message")}
            />
          </div>
          <div className="flex gap-2 mt-8">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] border border-[#0030C0] rounded-[4px]"
              onChange={(e) => setIsCheckPolicy(e?.target?.checked)}
            />
            <div className="text-[#757575]">
              I agree to the{" "}
              <span className="text-[#0030C0]">
                <Link href={`/${pathname?.PRIVACYPOLICY}`}>privacy policy</Link>
              </span>
            </div>
          </div>
          <button
            className="flex w-full sm:w-[290px] mt-8 gap-2 text-white items-center justify-between btn-fill-gradient px-6 py-2 flex-nowrap"
            onClick={() => handleSubmit()}
            disabled={isSubmit}
          >
            <div className="w-full">
              {isSubmit ? "Loading..." : "Confirm the infomation"}
            </div>
            <AboutUsArrowRight />
          </button>
        </div>
      </div>
      <div className="relative hidden lg:block w-[480px] min-w-[480px] xl:w-[597px] xl:min-w-[597px] bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D]">
        <Image
          src="/images/home/quote_bg.png"
          className="absolute top-0 left-0 w-full h-full mix-blend-screen pointer-events-none select-none z-0"
          width={597}
          height={996}
          alt="quote"
        />
        <div className="py-[69px] px-[44px] text-white">
          <SmallLogoInWebApp />
          <div className="text-[36px] leading-[46px] font-semibold mt-8 capitalize">
            Let&apos;s make our dreams realized now!
          </div>
          <div className="text-[16px] leading-[23px] mt-2 capitalize">
            Thank you for your interest! Please fill out the form on the left,
            we will contact you as soon as possible.
            <br /> If you have something else to share with us, feel free to
            directly grab a talk via{" "}
            <Link href={`mailto:${itsEmail}`}>{itsEmail}</Link> or hotline at
            +84 246 658 5248.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
