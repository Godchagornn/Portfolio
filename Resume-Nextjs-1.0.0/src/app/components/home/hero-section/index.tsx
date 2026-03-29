import { getImgPath } from "@/utils/image";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-28 md:pt-40 pb-12 lg:pb-30 xl:pt-52 bg-white min-h-[600px] lg:min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-4 items-center">
          
          {/* 1. Text Content Area */}
          <div className="flex flex-col gap-6 md:gap-9 max-w-2xl z-10 order-2 lg:order-1">
            <div className="space-y-3">
              {/* Badge/Small Title */}
              <span className="text-primary font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-xs md:text-sm lg:text-base block">
                Digital Industry Integration student
              </span>
              
              {/* Name and Wave Icon */}
              <div className="flex items-center gap-3 md:gap-6">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black leading-[1.1]">
                  Godchagorn <br /> 
                  <span className="text-gray-300">Kitima</span>
                </h1>
                
                {/* Wave Animation */}
                <div className="wave animate-bounce self-end mb-4 md:mb-10 lg:mb-14 shrink-0">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className="w-10 h-10 md:w-16 md:h-16"
                  />
                </div>
              </div>
            </div>

            {/* Description with Primary Border */}
            <div className="border-l-2 border-primary pl-5 md:pl-7">
              <p className="text-gray-500 font-normal text-base md:text-lg leading-relaxed max-w-md xl:max-w-xl">
                I am a second-year student at <span className="text-black font-semibold">Chiang Mai University</span>. 
                With a profound passion for technology, I exhibit strong leadership and communication skills, 
                aiming to contribute meaningfully to the success of innovative teams and organizations.
              </p>
            </div>
          </div>

          {/* 2. Mobile & Tablet Image (โชว์เฉพาะจอเล็ก) */}
          <div className="block lg:hidden order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={getImgPath("/images/home/banner/banner-img.jpg")}
                alt="banner-img"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Desktop Image Area (โชว์เฉพาะจอใหญ่ 1024px ขึ้นไป) */}
      <div className="absolute right-0 top-0 hidden lg:block h-full w-1/2 2xl:w-[45%]">
        <div className="relative h-full w-full">
          {/* Gradient Overlay เพื่อให้รูปกลืนกับพื้นหลังฝั่งซ้าย */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          
          <Image
            src={getImgPath("/images/home/banner/banner-img.jpg")}
            alt="banner-img"
            fill
            className="object-cover object-center z-1"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;