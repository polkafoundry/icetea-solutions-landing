import clsx from "clsx";

interface Props {
  title: string;
  subTitle: string;
  contents: any;
  isThree?: boolean;
}

const InsightBanner = ({ title, subTitle, contents, isThree }: Props) => {
  return (
    <div className="bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D] py-[55px]">
      <div className="max-w-[1440px] px-5 mx-auto flex gap-10 items-center">
        <div className="text-white">
          <div className="text-[60px] leading-[60px] font-bold capitalize">{title}</div>
          <div className="mt-6 text-[16px] leading-[23px]">{subTitle}</div>
        </div>
        <div
          className={clsx(
            "grid gap-6 w-fit min-w-fit",
            isThree ? "grid-cols-3" : "grid-cols-2"
          )}
        >
          {contents?.map((content: any, index: number) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center w-[309px] min-w-[309px] h-[190px] bg-white rounded-[24px]"
              >
                <div className="px-4 text-center">
                  <div className="w-fit mx-auto">{content?.img}</div>
                  <div className="text-[24px] leading-[30px] font-semibold text-[#0030C0] mt-3">
                    {content?.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InsightBanner;
