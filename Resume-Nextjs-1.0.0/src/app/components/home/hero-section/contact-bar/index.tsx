"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactBar = () => {
  const [contactBarData, setContactBarData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactBarData(data?.contactBar);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-softGray bg-white">
        <div className="container mx-auto px-4">
          {/* ปรับ flex-col สำหรับมือถือ และ flex-row สำหรับหน้าจอ sm ขึ้นไป */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 md:py-7">
            
            {/* 1. Contact Items (Email, Phone) */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 lg:gap-11">
              {contactBarData?.contactItems?.map((value: any, index: number) => (
                <Link
                  key={index}
                  href={value?.link || "#!"}
                  target={value?.type === "email" || value?.type === "phone" ? "_self" : "_blank"}
                  className="flex items-center gap-3 lg:gap-4 group"
                >
                  <div className="w-10 h-10 md:w-6 md:h-6 flex items-center justify-center">
                    <Image
                      src={getImgPath(value?.icon)}
                      alt={value?.type}
                      width={24}
                      height={24}
                      className="min-w-[20px] min-h-[20px] group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h6 className="text-sm md:text-base xl:text-lg text-black hover:text-primary transition-colors font-medium">
                    {value?.label}
                  </h6>
                </Link>
              ))}
            </div>

            {/* 2. Social Items (Line, FB, IG) */}
            <div className="flex items-center justify-center gap-6 md:gap-4">
              {contactBarData?.socialItems?.map((value: any, index: number) => (
                <Link
                  key={index}
                  href={value?.link || "#!"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:-translate-y-1 transition-transform"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full sm:bg-transparent">
                    <Image
                      src={getImgPath(value?.icon)}
                      alt={value?.platform}
                      width={28}
                      height={28}
                      className="hover:opacity-80 transition-opacity"
                    />
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;