import { getImgPath } from "@/utils/image";
import Image from "next/image";

const AboutMe = () => {
  const personalInfoLeft = [
    { label: "Name", value: "Godchagorn Kitima" },
    { label: "Nickname", value: "Pan" },
    { label: "Birthday", value: "29 December 2005" },
    { label: "Age", value: "20 years" },
  ];

  const personalInfoRight = [
    { label: "Address", value: "15/7 Pa Sang, Wiang Chiang Rung, Chiang Rai, 57350" },
    { label: "Call Me", value: "093-243-1253" },
    { label: "Email", value: "pan.godchagorn2548@gmail.com" },
  ];

  return (
    <section>
      <div className="relative bg-softGray py-12 md:py-32">
        {/* Background SVG - ปรับให้จางลงหรือไม่บังเนื้อหาบนมือถือ */}
        <div className="absolute top-0 w-full px-4 md:px-9 opacity-40 md:opacity-100">
          <Image
            src={getImgPath("/images/home/about-me/svg/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full h-auto"
          />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-black uppercase">About Me</h2>
              <p className="text-lg md:text-xl text-primary font-bold">( 01 )</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 items-center lg:items-start">
              
              {/* Profile Image Area - ปรับให้โชว์บนมือถือด้วยแต่อยู่ตรงกลาง */}
              <div className="w-full max-w-[303px] aspect-[303/440] shrink-0">
                <Image
                  src={getImgPath("/images/home/about-me/me picture.jpg")}
                  alt="Godchagorn Kitima"
                  width={303}
                  height={440}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>

              {/* Details Area */}
              <div className="w-full flex-1 text-center lg:text-left">
                <h3 className="mb-8 text-2xl md:text-3xl font-bold text-black uppercase tracking-wider underline decoration-primary decoration-4 underline-offset-8">
                  Personal Details
                </h3>
                
                {/* Personal Info Grid - ปรับเป็น 1 คอลัมน์บนมือถือ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 pb-10 border-b border-mistGray text-left">
                  <ul className="space-y-4">
                    {personalInfoLeft.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary font-bold text-xl">▸</span>
                        <span className="text-base md:text-lg text-gray-700">
                          <strong className="text-black font-semibold">{item.label}:</strong> {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-4">
                    {personalInfoRight.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary font-bold text-xl">▸</span>
                        <span className="text-base md:text-lg text-gray-700">
                          <strong className="text-black font-semibold">{item.label}:</strong> {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Professional Profile Section */}
                <div className="pt-10">
                  <h4 className="text-xl md:text-2xl font-bold text-black mb-5 uppercase tracking-tight">
                    Professional Profile
                  </h4>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                    I am a <span className="text-black font-bold">Digital Industry Integration student at Chiang Mai University</span> with a passion for bridging the gap between user needs and technical solutions. 
                    I specialize in <span className="text-primary font-bold">UX/UI Design, Business Analysis, and System Analysis.</span>
                  </p>
                  
                  {/* Quote / Vision */}
                  <div className="bg-white/50 p-6 rounded-r-xl border-l-4 border-primary shadow-sm inline-block w-full">
                    <p className="text-base md:text-lg text-black italic font-medium leading-snug">
                      "Driven by curiosity and a commitment to creating user-centric digital experiences that solve real-world problems."
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;