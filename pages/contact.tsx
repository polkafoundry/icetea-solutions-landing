import { useState } from "react";
import ModalSubmit from "@/components/contact/modal-submit";
import FooterComponent from "@/components/global/footer";
import PortfolioBanner from "@/components/portfolio/portfolio-banner";
import { countries } from "@/constants/countries";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { useRouter } from "next/router";
import clsx from "clsx";

const NEXT_PUBLIC_PRIVATE_KEY = process?.env?.NEXT_PUBLIC_PRIVATE_KEY;
const NEXT_PUBLIC_CLIENT_EMAIL = process?.env?.NEXT_PUBLIC_CLIENT_EMAIL;
const NEXT_PUBLIC_SHEET_ID = process?.env?.NEXT_PUBLIC_SHEET_ID;

const listFormData = [
  "name",
  "email",
  "country",
  "howKnow",
  "tellAbout",
];

const Contact = () => {
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isSubmitAction, setIsSubmitAction] = useState<boolean>(false);
  const doc = new GoogleSpreadsheet(NEXT_PUBLIC_SHEET_ID);
  let formDataDefault: { [key: string]: string } = {
    ["name"]: "",
    ["email"]: router?.query?.email ? (router?.query?.email as string) : "",
    ["phone"]: "",
    ["country"]: "",
    ["company"]: "",
    ["howKnow"]: "",
    ["tellAbout"]: "",
  };
  const [formData, setFormData] = useState<any>(formDataDefault);

  const handleSubmit = async () => {
    try {
      setIsSubmitAction(true);
      if (listFormData?.some((data) => !formData[data])) return;
      setIsSubmit(true);
      const privateKey = NEXT_PUBLIC_PRIVATE_KEY as string;
      await doc.useServiceAccountAuth({
        client_email: NEXT_PUBLIC_CLIENT_EMAIL as string,
        private_key: privateKey?.replace(/\\n/g, "\n"),
      });
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      const formatedDate = new Date().toLocaleString("en-US");
      await sheet.addRow({
        Timestamp: formatedDate,
        Name: formData["name"],
        Email: formData["email"],
        Phone: formData["phone"],
        Country: formData["country"],
        Company: formData["company"],
        "How Know About Us": formData["howKnow"],
        "Tell About Inquiries": formData["tellAbout"],
      });
      handleShowModal();
      setIsSubmit(false);
    } catch (err) {
      setIsSubmit(false);
    }
  };

  const handleChangeData = (value: string, key: string) => {
    const cloneData = { ...formData };
    cloneData[key] = value;
    setFormData(cloneData);
  };

  const handleShowModal = () => setIsShow(true);

  const handleCloseModal = () => {
    setIsSubmitAction(false);
    setIsShow(false);
  };

  return (
    <div>
      <ModalSubmit isShow={isShow} handleClose={handleCloseModal} />
      <div className="portfolio_bg h-[400px] md:h-[480px]">
        <PortfolioBanner />
        <div className="md:flex text-center md:text-left gap-[40px] max-w-[1240px] px-5 mx-auto mt-[100px] md:mt-[130px] text-white">
          <div className="font-be-vn md:min-w-[340px] xl:min-w-[440px] text-[40px] xl:text-[60px] leading-[50px] xl:leading-[72px] font-bold">
            Talk with us
          </div>
          <p className="font-be-vn xl:text-[20px] xl:leading-[28px] font-[300] opacity-[0.8]">
            Fill in your contact details and we&apos;ll get back to you soon.
            All information provided will be kept confidential. We do not
            disclose your personal information to third parties.
          </p>
        </div>
      </div>
      <div className="max-w-[880px] px-5 mx-auto mt-10 md:mt-[80px] pb-[100px]">
        <div className="md:flex gap-[40px]">
          <input
            className={clsx(
              "h-[64px] w-full md:w-[400px] mt-5 md:mt-0 bg-[#EFEFEF] rounded-[8px] outline-none px-5 border-[1px]",
              isSubmitAction && !formData["name"]
                ? "border-[#FF3434]"
                : "border-transparent"
            )}
            placeholder="Your name*"
            type={"text"}
            onChange={(e) => handleChangeData(e?.target?.value, "name")}
          />
          <input
            className={clsx(
              "h-[64px] w-full md:w-[400px] mt-5 md:mt-0 bg-[#EFEFEF] rounded-[8px] outline-none px-5 border-[1px]",
              isSubmitAction && !formData["email"]
                ? "border-[#FF3434]"
                : "border-transparent"
            )}
            placeholder="Your email address*"
            type={"email"}
            defaultValue={
              router?.query?.email ? (router?.query?.email as string) : ""
            }
            onChange={(e) => handleChangeData(e?.target?.value, "email")}
          />
        </div>
        <div className="md:flex gap-[40px] mt-5">
          <input
            className="h-[64px] w-full md:w-[45.1vw] md:max-w-[400px] xl:w-[400px] bg-[#EFEFEF] rounded-[8px] outline-none px-5 border-[1px] border-transparent"
            placeholder="Phone number"
            type={"text"}
            onChange={(e) => handleChangeData(e?.target?.value, "phone")}
          />
          <div className="select-wrap w-full md:w-fit">
            <select
              className={clsx(
                "appearance-none h-[64px] w-full md:w-[45.1vw] md:max-w-[400px] xl:w-[400px] mt-5 md:mt-0 bg-[#EFEFEF] rounded-[8px] outline-none px-5 border-[1px]",
                isSubmitAction && !formData["country"]
                  ? "border-[#FF3434]"
                  : "border-transparent"
              )}
              placeholder="Your country*"
              required
              onChange={(e) => handleChangeData(e?.target?.value, "country")}
            >
              <option value={""} disabled selected hidden>
                Your country*
              </option>
              {countries?.map((country, index) => {
                return (
                  <option key={index} value={country?.name}>
                    {country?.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="md:flex gap-[40px] mt-5">
          <input
            className="h-[64px] w-full md:w-[400px] bg-[#EFEFEF] rounded-[8px] outline-none px-5 border-[1px] border-transparent"
            placeholder="Your company name"
            type={"text"}
            onChange={(e) => handleChangeData(e?.target?.value, "company")}
          />
          <input
            className={clsx(
              "h-[64px] w-full md:w-[400px] mt-5 md:mt-0 bg-[#EFEFEF] rounded-[8px] outline-none px-5 border-[1px]",
              isSubmitAction && !formData["howKnow"]
                ? "border-[#FF3434]"
                : "border-transparent"
            )}
            placeholder="How did you know about us?*"
            type={"text"}
            onChange={(e) => handleChangeData(e?.target?.value, "howKnow")}
          />
        </div>
        <textarea
          className={clsx(
            "h-[280px] w-[100%] mt-5 resize-none bg-[#EFEFEF] rounded-[8px] outline-none p-5 border-[1px]",
            isSubmitAction && !formData["tellAbout"]
              ? "border-[#FF3434]"
              : "border-transparent"
          )}
          placeholder="Tell us about your inquiries*"
          onChange={(e) => handleChangeData(e?.target?.value, "tellAbout")}
        />
        <div className="text-center mt-5">
          <button
            className="px-[60px] py-[10px] text-white rounded-[40px] text-[18px] bg-gradient-to-bl hover:bg-gradient-to-br from-[#18C8FF] to-[#933FFE]"
            onClick={() => handleSubmit()}
            disabled={isSubmit}
          >
            {isSubmit ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Contact;
