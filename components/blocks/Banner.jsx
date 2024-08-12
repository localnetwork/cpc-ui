import Image from "next/image";

export default function Banner() {
  return (
    <section className="min-h-[700px] h-full-screen bg-black w-full flex items-center justify-center flex-col relative">
      <Image
        src="/banners/Banner1.jpg"
        alt="Banner"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
      />
      <span className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,_hsla(0,_0%,_5%,_0)_29.9%,_#0e0e0e)]" />
      <div className="relative z-[2] max-w-[700px] mx-auto text-center">
        <h1 className="font-secondary leading-normal text-[100px] text-white mb-[25px]">
          The CPC
        </h1>
        <p className="text-[25px]">
          Empowering Minds, Shaping Futures Since 2005
        </p>
      </div>
    </section>
  );
}
