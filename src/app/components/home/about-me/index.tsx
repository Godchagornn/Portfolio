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
    { label: "Address", value: "15/7 Pa Sang, Wiang Chiang Rung, Chiang Rai" },
    { label: "Call Me", value: "093-243-1253" },
    { label: "Email", value: "pan.godchagorn2548@gmail.com" },
  ];

  return (
    <section id="about">
      <div className="relative bg-softGray py-16 md:py-32 overflow-hidden">
        {/* Background Decorative SVG */}
        <div className="absolute top-0 left-0 w-full opacity-20 pointer-events-none">
          <Image
            src={getImgPath("/images/home/about-me/svg/resume-bg-img.svg")}
            alt="background-decoration"
            width={1200}
            height={348}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:max-w-6xl">
          {/* Section Header */}
          <div className="flex items-end justify-between border-b-2 border-black pb-6 mb-12 md:mb-20">
            <div>
              <p className="text-primary font-bold tracking-[0.2em] mb-2 uppercase text-sm md:text-base">Get to know me</p>
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase leading-none">About Me</h2>
            </div>
            <p className="hidden md:block text-2xl text-gray-300 font-black italic">/ 01</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Personal Information */}
            <div className="lg:col-span-5">
              <h3 className="text-xl md:text-2xl font-bold text-black uppercase mb-8 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary inline-block"></span>
                Personal Details
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-8">
                <ul className="space-y-6">
                  {personalInfoLeft.map((item, idx) => (
                    <li key={idx} className="group">
                      <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1 group-hover:translate-x-1 transition-transform">
                        {item.label}
                      </p>
                      <p className="text-lg text-black font-semibold">{item.value}</p>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-6">
                  {personalInfoRight.map((item, idx) => (
                    <li key={idx} className="group">
                      <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1 group-hover:translate-x-1 transition-transform">
                        {item.label}
                      </p>
                      <p className="text-lg text-black font-semibold">{item.value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Professional Bio & Vision */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black uppercase mb-8 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-primary inline-block"></span>
                  Professional Profile
                </h3>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-light">
                    I am a <span className="text-black font-bold border-b-4 border-primary/30">Digital Industry Integration student</span> at Chiang Mai University.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-10">
                    I am deeply passionate about bridging the gap between <span className="text-black font-medium italic">User Needs</span> and <span className="text-black font-medium italic">Technical Solutions</span>. 
                    I specialize in analyzing complex business requirements and translating them into intuitive, user-centric digital experiences through 
                    <strong className="text-primary font-bold"> UX/UI Design and System Analysis</strong>.
                  </p>
                </div>
              </div>

              {/* Quote Area */}
              <div className="mt-6">
                <blockquote className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-black/5 border-l-8 border-primary relative">
                  <span className="absolute top-4 left-4 text-6xl text-primary/10 font-serif leading-none">“</span>
                  <p className="text-lg md:text-xl text-black italic font-medium relative z-10 leading-relaxed">
                    Driven by curiosity and a commitment to creating user-centric digital experiences that solve real-world problems.
                  </p>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;