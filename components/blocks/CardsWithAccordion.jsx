import { useState } from "react";
import helper from "@/lib/utils/helper";

export default function CardsWithAccordion({ block }) {
  const { Theme, Title, Description, Groups } = block;
  const { colorExtractor } = helper;

  const extractedColor = colorExtractor(Theme);

  // State to manage open/close for each accordion item
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (groupIndex, itemIndex) => {
    setOpenItems((prev) => ({
      ...prev,
      [`${groupIndex}-${itemIndex}`]: !prev[`${groupIndex}-${itemIndex}`],
    }));
  };

  return (
    <section
      className={`py-[100px] bg-[${extractedColor.color}]`}
      style={{ color: extractedColor.textColor }}
    >
      <div className="container !max-w-[1024px]">
        <h2 className="font-secondary text-[50px] text-center mb-[50px] leading-normal">
          {Title}
        </h2>
        {Description && (
          <div
            className="opacity-70 text-center text-[20px] leading-[35px] mb-[50px]"
            dangerouslySetInnerHTML={{ __html: Description }}
          />
        )}

        {Groups?.length > 0 && (
          <div className="grid gap-[50px] grid-cols-1">
            {Groups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="grid bg-[#333] rounded-[15px] overflow-hidden text-white grid-cols-1 md:grid-cols-3"
              >
                <div className="p-[30px] lg:p-[50px] col-span-1 leading-normal text-center flex items-center justify-center text-[40px] font-secondary bg-[#9A0C16]">
                  {group?.Title}
                </div>
                <div className="p-[30px] lg:p-[50px] w-full col-span-2">
                  {group?.Items?.map((item, itemIndex) => {
                    const isOpen = openItems[`${groupIndex}-${itemIndex}`];

                    return (
                      <div key={itemIndex}>
                        {item?.Title && (
                          <div
                            className={`flex w-full items-center justify-between ${
                              item?.Description
                                ? "cursor-pointer select-none"
                                : ""
                            } ${
                              itemIndex === group?.Items.length - 1
                                ? ""
                                : "border-b-[1px]"
                            } border-[#7E7E7E] py-[20px]`}
                            onClick={() => toggleItem(groupIndex, itemIndex)}
                          >
                            <div className="text-[20px]">{item?.Title}</div>
                            {item?.Description && (
                              <div>
                                {isOpen ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 12h14"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                  </svg>
                                )}
                              </div>
                            )}
                          </div>
                        )}

                        {isOpen && item?.Description && (
                          <div
                            className="p-[15px] bg-[#F5F4F1] text-black"
                            dangerouslySetInnerHTML={{
                              __html: item?.Description,
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
