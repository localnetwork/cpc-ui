import TimelineGallery from "../partials/Gallery/TimelineGallery";

export default function Timeline({ block }) {
  const { Timelines, Title } = block;
  return (
    <section className="py-[100px]">
      <div className="container relative">
        <h2 className="text-[48px] mb-[30px] md:mb-[80px] font-secondary leading-normal">
          {Title}
        </h2>
        {Timelines.map((item, index) => {
          return (
            <div
              key={index}
              className="timeline-row mb-[50px] md:mb-0 grid grid-cols-1 md:grid-cols-10 gap-4"
            >
              {/* 30% width */}
              <div className="col-span-1 md:col-span-2 flex items-center justify-center relative py-[15px] md:py-[100px]">
                <span className="timeline-line absolute h-full w-[2px] bg-[#222222] z-[-1] hidden md:block" />
                <div className="flex relative items-center justify-center font-secondary w-full min-h-[150px] md:min-h-auto md:!max-w-[150px] md:!max-h-[150px] bg-[#9A0C16] md:rounded-full">
                  <span className="absolute border-[3px] w-[calc(100%-15px)] h-[calc(100%-15px)] md:w-[90%] md:h-[90%] md:rounded-full border-[#541c1c]" />
                  {item?.Title}
                </div>
              </div>
              {/* 70% width */}
              <div className="col-span-1 md:col-span-8  items-center">
                <div className="flex h-full flex-col justify-center">
                  <div
                    className="text-[20px]"
                    dangerouslySetInnerHTML={{ __html: item?.Description }}
                  />

                  {item?.Gallery && <TimelineGallery gallery={item?.Gallery} />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
