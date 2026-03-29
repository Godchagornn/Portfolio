"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const RecreationActivities = () => {
  const activityData = {
    title: "Recreation Activities",
    clubName: "SANCAMT",
    description: `Recreational Club Member (SANCAMT) \n\nActively participated in university and faculty events as a member of the SANCAMT recreational club. Contributed to organizing activities that foster relationships within and across faculties, including freshman orientation workshops. \n\nInvolved in activity planning, designing interactive games, and creating an engaging and enjoyable atmosphere to encourage student participation. This experience strengthened key skills in teamwork, communication, and time management.`,
    images: [
      { src: "/images/activity/rec-1.jpg", label: "สานสัมพันธ์สันทนาการ #10" },
      { src: "/images/activity/rec-2.jpg", label: "Activity Night" },
      { src: "/images/activity/rec-3.jpg", label: "สองสื่อแบบศิลป์ 67" },
      { src: "/images/activity/rec-4.jpg", label: "สองสื่อแบบศิลป์ 68" },
      { src: "/images/activity/rec-5.jpg", label: "Workshop SANCAMT 67" },
      { src: "/images/activity/rec-6.jpg", label: "Workshop SANCAMT 68" },
    ],
    socialLink: "https://www.instagram.com/sancamt?igsh=cm02aHg5djFiY3p1", 
  };

  return (
    <section className="bg-white">
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          
          {/* Header - Responsive Text Size */}
          <div className="flex items-center justify-between gap-2 border-b border-black pb-5 md:pb-7 mb-9 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black uppercase leading-tight">
              {activityData.title}
            </h2>
            <p className="text-lg md:text-xl text-primary font-bold shrink-0">( 05 )</p>
          </div>
          
          {/* Description - Responsive Padding & Font */}
          <div className="max-w-4xl mb-12 md:mb-16">
            <p className="text-base md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
              {activityData.description}
            </p>
          </div>

          {/* Activity Gallery Grid - Responsive Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {activityData.images.map((img, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-2xl shadow-sm border border-gray-100 bg-white flex flex-col"
              >
                <div className="aspect-[4/3] relative w-full">
                  <Image
                    src={getImgPath(img.src)}
                    alt={img.label}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                {/* Caption - จัดกึ่งกลางเสมอ */}
                <div className="p-4 border-t border-gray-50 mt-auto">
                  <p className="text-xs md:text-sm font-bold text-black text-center uppercase tracking-wider">
                    {img.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Footer - Responsive Alignment */}
          <div className="mt-12 md:mt-20 flex justify-center md:justify-end">
            <Link 
              href={activityData.socialLink}
              target="_blank"
              className="flex items-center gap-3 group border-b-2 border-transparent hover:border-primary pb-1 transition-all"
            >
              <span className="text-base md:text-xl font-bold text-black group-hover:text-primary transition-colors">
                Follow our activities on Instagram
              </span>
              <div className="shrink-0">
                <Image
                  src={getImgPath("/images/icon/instagram.svg")}
                  alt="instagram"
                  width={28}
                  height={28}
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecreationActivities;