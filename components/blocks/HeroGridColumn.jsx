import Image from "next/image";

export default function HeroGridColumn() {
  const data = [
    {
      title: "Excellent Academics",
      description: `Learn about PCA’s differentiated learning approach that meets each student where they’re at in their learning, providing opportunities for every child to grow into their God-given potential. In comparison to other New Hampshire school districts, PCA ranks in the top 5% across the state.Our students consistently test higher than the state and national averages in Math and English, and our Mosaic Learning Team makes sure no student is left behind.`,
      image: "/images/hero2.webp",
      color: "#7f821c",
    },
    {
      title: "Parent Partnership",
      description: `Learn about PCA’s differentiated learning approach that meets each student where they’re at in their learning, providing opportunities for every child to grow into their God-given potential. In comparison to other New Hampshire school districts, PCA ranks in the top 5% across the state.Our students consistently test higher than the state and national averages in Math and English, and our Mosaic Learning Team makes sure no student is left behind.`,
      image: "/images/hero2.webp",
      color: "#1B217A",
    },
    {
      title: "Impacting the World for Good",
      description: `Learn about PCA’s differentiated learning approach that meets each student where they’re at in their learning, providing opportunities for every child to grow into their God-given potential. In comparison to other New Hampshire school districts, PCA ranks in the top 5% across the state.Our students consistently test higher than the state and national averages in Math and English, and our Mosaic Learning Team makes sure no student is left behind.`,
      image: "/images/hero2.webp",
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
