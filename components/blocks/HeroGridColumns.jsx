import Image from "next/image";

export default function Block({ block }) {
  return (
    <section className="bg-black px-[15px] md:px-[30px] lg:px-[50px] pb-[30px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row flex-wrap mx-[-30px] justify-between">
          {block?.Items.map((item, index) => {
            const removeLastWord = item.Title.split(" ").slice(0, -1).join(" ");
            const lastWord = item.Title.split(" ").pop();
            return (
              <div key={index} className="lg:max-w-[33.33%] px-[15px] w-full">
                <div
                  className={` ${
                    index == 1 ? "h-[calc(100%+30px)]" : "h-full"
                  } flex flex-col`}
                >
                  <div className="relative">
                    <span className="pb-[56.65%] block bg-[#333]" />
                    {item?.Image?.url && (
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_TENANT_API + item?.Image?.url
                        }
                        className="w-full absolute top-0 left-0 h-full object-cover bg-[#f3f4f4]"
                        width={500}
                        height={300}
                        alt="Sample Text"
                      />
                    )}
                  </div>

                  <div
                    className="p-[20px] lg:p-[30px] grow"
                    style={{ background: item.Color }}
                  >
                    <h2 className="text-[30px] lg:text-[35px] md:text-[40px] font-secondary leading-[45px]">
                      {removeLastWord}{" "}
                      <span className="text-[#ddcba4]">{lastWord}</span>
                    </h2>
                    <div
                      className="text-[16px] md:text-[18px] mt-[20px]"
                      dangerouslySetInnerHTML={{ __html: item.Description }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
