"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";

const EducationSkills = () => {
  const skillCategories = [
    {
      category: "Front-End",
      skills: [
        { name: "HTML", icon: "/images/home/skill-tool/html-icon.svg", rating: 4 },
        { name: "CSS", icon: "/images/home/skill-tool/css-icon.svg", rating: 4 },
        { name: "JavaScript (Beginner)", icon: "/images/home/skill-tool/javascript.svg", rating: 3 },
      ],
    },
    {
      category: "UX/UI",
      skills: [
        { name: "Figma", icon: "/images/home/skill-tool/figma-icon.svg", rating: 5 },
        { name: "Adobe Photoshop", icon: "/images/home/skill-tool/photoshop-icon.svg", rating: 2 },
      ],
    },
    {
      category: "Back-End",
      skills: [
        { name: "JAVA OOP", icon: "/images/home/skill-tool/java.svg", rating: 3 },
      ],
    },
    {
      category: "Document/Planning",
      skills: [
        { name: "Excel", icon: "/images/home/skill-tool/Microsoft_Excel.svg", rating: 4 },
        { name: "Draw.io", icon: "/images/home/skill-tool/drawio.svg", rating: 5 },
        { name: "Jira", icon: "/images/home/skill-tool/jira.svg", rating: 3 },
      ],
    },
  ];

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden bg-white">
        <div className="container relative z-10 mx-auto px-4">
          {/* Vector Background - ปรับขนาดและตำแหน่งให้รองรับมือถือ */}
          <div className="no-print absolute top-0 left-0 transform -translate-y-1/2 opacity-30 md:opacity-50 w-32 md:w-64">
            <Image
              src={getImgPath("/images/home/education-skill/edu-skill-vector.svg")}
              alt="vector"
              width={260}
              height={170}
              className="w-full h-auto"
            />
          </div>
          
          <div className="relative z-10 py-16 md:py-32">
            {/* Header - ปรับ Font size ให้เล็กลงบนมือถือ */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-5 md:pb-7 mb-9 xl:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-black uppercase tracking-tight">
                Skills & Tools
              </h2>
              <p className="text-lg md:text-xl text-primary font-bold">( 03 )</p>
            </div>

            {/* Skills Grid - ปรับ Column ตาม Breakpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="flex flex-col gap-5 md:gap-6">
                  {/* Category Title */}
                  <h4 className="text-lg md:text-xl font-bold text-black border-l-4 border-primary pl-3">
                    {cat.category}
                  </h4>
                  
                  <div className="flex flex-col gap-4 md:gap-5">
                    {cat.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="group p-4 md:p-5 border border-softGray rounded-xl bg-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          {/* Icon Container */}
                          <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                            <Image
                              src={getImgPath(skill.icon)}
                              alt={skill.name}
                              fill
                              sizes="(max-width: 768px) 40px, 48px"
                              className="object-contain transition-transform group-hover:scale-110"
                            />
                          </div>
                          <p className="text-black font-semibold text-sm md:text-base leading-tight">
                            {skill.name}
                          </p>
                        </div>
                        
                        {/* Rating Dots - ปรับขนาดให้กด/มองเห็นง่ายบนมือถือ */}
                        <div className="flex gap-2">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${
                                i < skill.rating ? "bg-primary" : "bg-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;