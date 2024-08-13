import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/blocks/Banner";
import HeroGrid from "@/components/blocks/HeroGrid";
import HeroGridColumn from "@/components/blocks/HeroGridColumn";
import Courses from "@/components/blocks/Courses";
import News from "@/components/blocks/News";
import Faculty from "@/components/blocks/Faculty";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Banner />
      <HeroGrid />
      <HeroGridColumn />
      <Courses />
      <News />
      <Faculty />
    </>
  );
}
