import TimelineGallery from "../partials/Gallery/TimelineGallery";

export default function Timeline({ block }) {
  const { Timelines, Title } = block;
  return (
    <section className="py-[100px]">
      <div className="container relative">
        <h2 className="text-[48px] mb-[80px] font-secondary leading-normal">
          {Title}
        </h2>
        {Timelines.map((item, index) => {
          return (
            <div key={index} className="timeline-row grid grid-cols-10 gap-4">
              {/* 30% width */}
              <div className="col-span-2 flex items-center justify-center relative py-[100px]">
                <span className="timeline-line absolute h-full w-[2px] bg-[#222222] z-[-1]" />
                <div className="flex relative items-center justify-center font-secondary w-[150px] h-[150px] bg-[#9A0C16] rounded-full">
                  <span className="absolute border-[3px] w-[90%] h-[90%] rounded-full border-[#541c1c]" />
                  {item?.Title}
                </div>
              </div>
              {/* 70% width */}
              <div className="col-span-8  items-center">
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
