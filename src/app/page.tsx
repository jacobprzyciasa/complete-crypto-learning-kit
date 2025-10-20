import Image from "next/image";
import banner from "../../public/banner.jpg";
import Header from "@/Components/Header";
import Content from "@/Components/Content";
import { IoIosArrowRoundDown } from "react-icons/io";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <div className="w-full h-auto relative">
        <div className="absolute top-0 left-0 w-full h-screen -z-10">
          <div className="absolute bg-[#00000050] w-full h-full"></div>
          <Image
            src={banner}
            alt="banner"
            className="relative w-full h-full object-cover -z-10"
          />
          <div className="absolute right-10 bottom-10 flex flex-col justify-center items-center">
            <IoIosArrowRoundDown className="text-white text-6xl animate-bounce" />
            <p className="text-white uppercase font-spartan font-light">scroll</p>
          </div>
        </div>
        <Content />
      </div>
      <Footer />
    </div>
  );
}
