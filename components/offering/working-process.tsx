import clsx from "clsx";

const WorkingProcessContentLeft = ({ content, number, top }: any) => {
  return (
    <div
      style={{ top: top }}
      className="lg:absolute w-full lg:w-fit z-[3] left-16 xl:left-[160px]"
    >
      <div
        className={clsx(
          "relative flex lg:block w-full lg:w-[510px] xl:w-[566px] lg:h-[166px] xl:h-[185px] working-process-content-bg-left",
          "p-5 lg:p-0"
        )}
      >
        <div
          className={clsx(
            "lg:absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-[48px] leading-[70px] font-semibold text-[#0030C0]",
            "xl:w-[114px] xl:h-[114px] bg-white rounded-full border-[2px] border-[#0083FF] items-center justify-center",
            "w-[80px] h-[80px] hidden lg:flex"
          )}
        >
          {number}
        </div>
        <div
          className={clsx(
            "w-full h-full xl:pl-[109px] xl:pr-[60px] flex items-center font-semibold text-white capitalize",
            "text-[28px] p-0 lg:pl-[50px] lg:pr-[30px]"
          )}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

const WorkingProcessContentRight = ({ content, number, top }: any) => {
  return (
    <div
      style={{ top: top }}
      className="lg:absolute w-full lg:w-fit z-[3] right-16 xl:right-[160px]"
    >
      <div
        className={clsx(
          "relative flex lg:block w-full lg:w-[510px] xl:w-[566px] lg:h-[166px] xl:h-[185px] working-process-content-bg-right",
          "p-5 lg:p-0"
        )}
      >
        <div
          className={clsx(
            "absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 text-[48px] leading-[70px] font-semibold text-[#0030C0]",
            "xl:w-[114px] xl:h-[114px] bg-white rounded-full border-[2px] border-[#0083FF] items-center justify-center",
            "w-[80px] h-[80px] hidden lg:flex"
          )}
        >
          {number}
        </div>
        <div
          className={clsx(
            "w-full h-full xl:pl-[100px] xl:pr-[100px] flex items-center font-semibold text-white capitalize",
            "text-[28px] p-0 lg:pl-[80px] lg:pr-[30px]"
          )}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

const WorkingProcessLineRight = ({ top }: any) => {
  return (
    <div
      style={{ top: top }}
      className="absolute hidden lg:block w-1/2 h-[128px] z-[2] right-0 border-y-[2px] border-r-[2px] border-[#0083FF] rounded-r-[60px]"
    />
  );
};

const WorkingProcessLineLeft = ({ top }: any) => {
  return (
    <div
      style={{ top: top }}
      className="absolute hidden lg:block w-1/2 h-[128px] z-[2] left-0 border-y-[2px] border-l-[2px] border-[#0083FF] rounded-l-[60px]"
    />
  );
};

interface Props {
  title: string;
  data: string[];
}

const WorkingProcess = ({ title, data }: Props) => {
  return (
    <div>
      <div className="xl:text-[48px] text-[35px] xl:leading-[70px] text-center text-[#01289D] font-semibold mt-[120px] capitalize">
        {title}
      </div>
      <div className="px-5 xl:px-0">
        <div className="relative lg:h-[1000px] max-w-[1400px] grid gap-5 lg:block mx-auto mt-8 xl:mt-[60px]">
          {data?.map((value: any, index: number) => {
            if (index % 2 === 0) {
              return (
                <>
                  <WorkingProcessContentLeft
                    key={index}
                    top={`${index * 126}px`}
                    content={value}
                    number={index + 1}
                  />
                  {index !== data?.length - 1 && (
                    <WorkingProcessLineRight top={`${index * 126 + 90}px`} />
                  )}
                </>
              );
            }
            return (
              <>
                <WorkingProcessContentRight
                  key={index}
                  top={`${index * 126}px`}
                  content={value}
                  number={index + 1}
                />
                {index !== data?.length - 1 && (
                  <WorkingProcessLineLeft top={`${index * 126 + 90}px`} />
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
