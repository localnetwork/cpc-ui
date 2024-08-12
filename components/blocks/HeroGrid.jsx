import Image from "next/image";

export default function HeroGrid() {
  return (
    <section className="p-[50px]">
      <div className="container">
        <div className="flex flex-wrap mx-[-30px] justify-between items-center">
          <div className="px-[30px] max-w-[50%] w-full">
            <h2 className="text-[48px] font-secondary mb-[30px] leading-[65px]">
              Preparing Students to Impact the World for Good.
            </h2>
            <div className="opacity-70 leading-[35px]">
              <p>
                Cordova Public College, founded in 2005, is a dynamic
                institution dedicated to fostering academic growth and personal
                development. Located in the heart of Cordova, our college offers
                a diverse range of programs designed to prepare students for
                success in an ever-changing world.
              </p>
            </div>
          </div>
          <div className="px-[30px] max-w-[50%] w-full relative group">
            <div className="relative overflow-hidden">
              <span className="bg-[#000] z-[1] bg-opacity-30 absolute top-0 left-0 w-full h-full group-hover:bg-opacity-60 transition" />
              <span className="cursor-pointer z-[2] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[2px] border-white rounded-full p-[15px] flex items-center justify-center">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  color="#fff"
                  className=""
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.25 5.78987C5.25 4.42081 6.7512 3.58195 7.91717 4.29947L18.0091 10.5099C19.1196 11.1933 19.1196 12.8074 18.0091 13.4907L7.91717 19.7011C6.7512 20.4187 5.25 19.5798 5.25 18.2107V5.78987Z"
                    fill="#fff"
                  ></path>
                </svg>
              </span>
              <Image
                src="/images/Hero1.webp"
                width={600}
                height={400}
                className="w-full group-hover:scale-105 transition"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
