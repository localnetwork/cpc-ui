import Image from "next/image";

export default function Faculty() {
  const staticData = [
    {
      name: "Dr. John Doe",
      designation: "President",
      image: "/images/Professor.jpg",
    },
    {
      name: "Dr. John Dee",
      designation: "Chief Executive Officer",
      image: "/images/Professor.jpg",
    },
    {
      name: "Dr. John Daa",
      designation: "President",
      image: "/images/Professor.jpg",
    },
    {
      name: "Dr. John Daa",
      designation: "President",
      image: "/images/Professor.jpg",
    },
  ];
  return (
    <section className="py-[100px] px-[50px]">
      <div className="container">
        <h2 className="font-secondary leading-normal text-[80px] mb-[25px]">
          Our Faculty
        </h2>

        <div className="grid grid-cols-3 gap-x-[50px] gap-y-[100px]">
          {staticData.map((item, index) => (
            <div className="" key={index}>
              <Image
                className="w-full h-[550px] object-cover"
                src={item.image}
                width={500}
                height={500}
                alt="Sample Text"
              />
              <h3 className="font-secondary mt-[30px] leading-normal text-[30px] mb-[15px]">
                {item.name}
              </h3>
              <h4 className="text-[#707070] text-[20px] font-semibold">
                {item.designation}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
