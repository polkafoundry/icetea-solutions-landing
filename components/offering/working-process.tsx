import clsx from "clsx";

const WorkingProcessContentLeft = ({ content, number, top }: any) => {
  return (
    <div style={{ top: top }} className="absolute w-fit z-[3] left-[160px]">
      <div className="relative w-[566px] h-[185px] working-process-content-bg-left">
        <div
          className={clsx(
            "absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-[48px] leading-[70px] font-semibold text-[#0030C0]",
            "w-[114px] h-[114px] bg-white rounded-full border-[2px] border-[#0083FF] flex items-center justify-center"
          )}
        >
          {number}
        </div>
        <div className="w-full h-full pl-[109px] pr-[60px] flex items-center text-[32px] leading-[40px] font-semibold text-white capitalize">
          {content}
        </div>
      </div>
    </div>
  );
};

const WorkingProcessContentRight = ({ content, number, top }: any) => {
  return (
    <div style={{ top: top }} className="absolute w-fit z-[3] right-[160px]">
      <div className="relative w-[566px] h-[185px] working-process-content-bg-right">
        <div
          className={clsx(
            "absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 text-[48px] leading-[70px] font-semibold text-[#0030C0]",
            "w-[114px] h-[114px] bg-white rounded-full border-[2px] border-[#0083FF] flex items-center justify-center"
          )}
        >
          {number}
        </div>
        <div className="w-full h-full pl-[100px] pr-[100px] flex items-center text-[32px] leading-[40px] font-semibold text-white capitalize">
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
      className="absolute w-1/2 h-[128px] z-[2] right-0 border-y-[2px] border-r-[2px] border-[#0083FF] rounded-r-[60px]"
    />
  );
};

const WorkingProcessLineLeft = ({ top }: any) => {
  return (
    <div
      style={{ top: top }}
      className="absolute w-1/2 h-[128px] z-[2] left-0 border-y-[2px] border-l-[2px] border-[#0083FF] rounded-l-[60px]"
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
      <div className="text-[48px] leading-[70px] text-center text-[#01289D] font-semibold mt-[120px] capitalize">
        {title}
      </div>
      <div className="relative h-[1000px] max-w-[1400px] mx-auto mt-[60px]">
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
  );
};

export default WorkingProcess;
