import Image from "next/image";
import CallToAction from "./CallToAction";

const HeroSection = () => {
  return (
    <div className="w-full mb-10">
    <div className="relative w-full h-[300px]">
      <div>
        <Image src="/img/img1.jpg" alt="hero" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg">
          <CallToAction />
        </div>
      </div>
    </div>
  </div>
  

  );
};

export default HeroSection;
