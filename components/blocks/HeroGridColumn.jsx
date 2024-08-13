import Image from "next/image";

export default function HeroGridColumn() {
  const data = [
    {
      title: "Excellent Academics",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      image: "/images/Hero2.webp",
      color: "#1B217A",
    },
    {
      title: "Parent Partnership",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      image: "/images/Hero2.webp",
      color: "#7f821c",
    },
    {
      title: "Impacting the World for Good",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      image: "/images/Hero2.webp",
      color: "#9a0c16",
    },
  ];
  return (
    <section className="bg-black px-[50px] pb-[30px]">
      <div className="container">
        <div className="flex flex-wrap mx-[-30px] justify-between">
          {data.map((item, index) => {
            const removeLastWord = item.title.split(" ").slice(0, -1).join(" ");
            const lastWord = item.title.split(" ").pop();
            return (
              <div key={index} className="max-w-[33.33%] px-[15px] w-full">
                <div
                  className={`${
                    index == 1 ? "h-[calc(100%+30px)]" : "h-full"
                  } flex flex-col`}
                >
                  <Image
                    src={item.image}
                    className="w-full flex"
                    width={500}
                    height={300}
                  />
                  <div
                    className="p-[30px] grow"
                    style={{ background: item.color }}
                  >
                    <h2 className="text-[40px] font-secondary leading-[45px]">
                      {removeLastWord}{" "}
                      <span className="text-[#ddcba4]">{lastWord}</span>
                    </h2>
                    <p className="text-[18px] mt-[20px]">{item.description}</p>
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
