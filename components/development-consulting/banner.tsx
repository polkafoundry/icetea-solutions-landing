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
      <div className="max-w-[1440px] px-5 mx-auto grid lg:flex gap-10 items-center">
        <div className="text-white">
          <div className="text-[35px] lg:text-[40px] leading-[40px] xl:text-[60px] xl:leading-[60px] font-bold capitalize">
            {title}
          </div>
          <div className="mt-3 xl:mt-6 text-[14px] xl:text-[16px] xl:leading-[23px]">
            {subTitle}
          </div>
        </div>
        <div
          className={clsx(
            "grid gap-5 xl:gap-6 lg:w-fit min-w-fit",
            isThree ? "lg:grid-cols-3 grid-cols-2" : "grid-cols-2"
          )}
        >
          {contents?.map((content: any, index: number) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center lg:w-[200px] lg:min-w-[200px] xl:w-[309px] p-3 xl:min-w-[309px] lg:h-[210px] bg-white rounded-[24px]"
              >
                <div className="px-4 text-center">
                  <div className="w-fit mx-auto">{content?.img}</div>
                  <div className="text-[20px] xl:text-[24px] xl:leading-[30px] font-semibold text-[#0030C0] mt-3">
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
