"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);
  const [selectedWork, setSelectedWork] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching work data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <div className="bg-softGray">
        <div className="container mx-auto px-4">
          <div className="py-16 xl:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-5 md:pb-7 mb-9 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tight">Latest Projects</h2>
              <p className="text-lg md:text-xl text-orange-500 font-bold">( 04 )</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 xl:gap-y-16">
              {workData?.map((value: any, index: any) => (
                <div
                  key={index}
                  className="group flex flex-col gap-4 md:gap-6 cursor-pointer"
                  onClick={() => setSelectedWork(value)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-md aspect-[4/3] sm:aspect-video lg:aspect-[16/10]">
                    <Image
                      src={getImgPath(value?.image)}
                      alt={value?.title}
                      fill
                      className="rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex justify-center items-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 px-1">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xl md:text-2xl font-black text-black group-hover:text-primary transition-colors">{value?.title}</h5>
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100">
                        <Image src={getImgPath("/images/icon/right-arrow-icon.svg")} alt="icon" width={16} height={16} />
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm md:text-base font-medium">{value?.client}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Popup Modal Responsive --- */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedWork(null)}
        >
          {/* Main Card: ล็อคความสูงและซ่อนส่วนเกินเพื่อให้ปุ่มปิดไม่เลื่อนตาม */}
          <div
            className="bg-white rounded-2xl md:rounded-3xl max-w-6xl w-full h-[95vh] md:h-auto md:max-h-[90vh] relative animate-in zoom-in-95 duration-300 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ✕ Close Button: วงกลม นิ่งสนิท ไม่เลื่อนตาม*/}
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[120] bg-white text-black w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full font-bold shadow-md cursor-pointer hover:bg-white hover:text-black transition-none border-none outline-none"
              onClick={() => setSelectedWork(null)}
            >
              <span className="text-xl md:text-2xl leading-none">✕</span>
            </button>

            {/* Scrollable Content Area: ส่วนนี้เท่านั้นที่เลื่อนขึ้นลงได้ */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="flex flex-col lg:flex-row min-h-full">
                
                {/* Left Side: Images Gallery */}
                <div className="w-full lg:w-3/5 bg-gray-50 p-4 md:p-10 lg:border-r border-gray-100">
                  <div className="flex flex-col gap-4 md:gap-8">
                    <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white">
                      <Image
                        src={getImgPath(selectedWork.image)}
                        alt={selectedWork.title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    {selectedWork.gallery?.map((imgUrl: string, idx: number) => (
                      <div key={idx} className="relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white">
                        <Image
                          src={getImgPath(imgUrl)}
                          alt={`${selectedWork.title}-${idx}`}
                          width={800}
                          height={600}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Details */}
                <div className="w-full lg:w-2/5 p-6 md:p-10 lg:p-12 flex flex-col bg-white">
                  <div className="mb-6 md:mb-8">
                    <span className="inline-block px-3 py-1 rounded-full border border-primary/30 text-primary text-[10px] md:text-xs font-black tracking-widest uppercase mb-4">
                      {selectedWork.category || "Project Showcase"}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-black leading-tight mb-4">
                      {selectedWork.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedWork.tags?.map((tag: string, i: number) => (
                        <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-xs font-bold">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8 md:space-y-10">
                    <div>
                      <h4 className="text-base md:text-lg font-black text-black border-l-4 border-primary pl-3 mb-4 uppercase tracking-tighter">Description</h4>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
                        {selectedWork.description}
                      </p>
                    </div>

                    {selectedWork.tools && (
                      <div>
                        <h4 className="text-base md:text-lg font-black text-black border-l-4 border-primary pl-3 mb-4 uppercase tracking-tighter">Tools Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {(Array.isArray(selectedWork.tools) ? selectedWork.tools : [selectedWork.tools]).map((tool: string, i: number) => (
                            <div key={i} className="p-2 bg-white border border-gray-100 rounded-xl shadow-sm">
                              <Image src={getImgPath(tool)} alt="tool" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedWork.links && (
                      <div className="pt-8 border-t border-gray-100 flex flex-col gap-4">
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Project Links</h4>
                        <div className="flex flex-wrap gap-4">
                          {(Array.isArray(selectedWork.links) ? selectedWork.links : [selectedWork.links]).map((link: string, i: number) => (
                            <Link key={i} href={link} target="_blank" className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full hover:bg-primary transition-all shadow-lg text-sm font-bold">
                              <span>View Project</span>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LatestWork;