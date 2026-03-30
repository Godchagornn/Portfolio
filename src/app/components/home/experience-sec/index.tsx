import React from 'react';

const EducationSec = () => {
    const education = [
        {
            year: "2024 - Now",
            level: "Bachelor's Degree",
            institution: "Chiang Mai University (CMU)",
            subDetail: "College of Arts, Media and Technology (CAMT)",
            major: "Digital Industry Integration (DII)",
            gpa: "3.23",
            description: "Focusing on UX/UI Design, Business Analysis, and Software Development through real-world industry integration."
        },
        {
            year: "2018 - 2024",
            level: "High School",
            institution: "Chiang Rai Provincial Administrative Organization School",
            subDetail: "Software Engineering Program",
            major: "",
            gpa: "3.99",
            description: "Developed a strong foundation in programming and logic, graduating with honors."
        },
        {
            year: "2012 - 2018",
            level: "Elementary School",
            institution: "Huai Hang Pa Sa School",
            subDetail: "",
            major: "",
            gpa: "",
            description: "Completed primary education with focus on fundamental academic skills."
        }
    ];

    return (
        <section className="bg-white">
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    {/* Header - Responsive text size */}
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-5 md:pb-7 mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tight">Education</h2>
                        <p className="text-lg md:text-xl text-primary font-bold">( 02 )</p>
                    </div>

                    <div className="space-y-12 md:space-y-24">
                        {education.map((edu, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 items-start relative">
                                
                                {/* 1. Year and Level - Center on mobile, left on desktop */}
                                <div className="flex flex-col items-start">
                                    <h3 className="font-black mb-1 text-black text-xl md:text-2xl">{edu.year}</h3>
                                    <h4 className="text-sm md:text-base font-bold text-primary uppercase tracking-[0.1em]">{edu.level}</h4>
                                </div>

                                {/* 2. Institution with Timeline Logic */}
                                <div className="relative">
                                    {/* Vertical Timeline Line (Show only on Desktop sm+) */}
                                    {index < education.length - 1 && (
                                        <div className="absolute left-0 top-10 w-px h-full bg-gray-200 hidden sm:block"></div>
                                    )}

                                    {/* Timeline Dot (Show only on Desktop sm+) */}
                                    <div className="absolute left-0 top-2 transform -translate-x-1/2 hidden sm:block z-10">
                                        <div className={`w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center ${index === 0 ? 'border-primary' : 'border-black'}`}>
                                            {index === 0 && <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>}
                                        </div>
                                    </div>

                                    {/* Institution Details - Remove padding on mobile */}
                                    <div className="sm:pl-8 lg:pl-12">
                                        <div className="flex flex-col gap-2 mb-4">
                                            <span className="text-xl md:text-2xl text-black font-black leading-tight">
                                                {edu.institution}
                                            </span>
                                            {edu.subDetail && (
                                                <span className="text-sm md:text-base text-gray-500 font-medium italic">
                                                    {edu.subDetail}
                                                </span>
                                            )}
                                        </div>
                                        
                                        {edu.major && (
                                            <p className="text-sm md:text-base font-bold text-black mb-3">
                                                Major: <span className="font-normal text-gray-700">{edu.major}</span>
                                            </p>
                                        )}
                                        
                                        {edu.gpa && (
                                            <div className="inline-flex items-center bg-primary/5 border border-primary/20 text-primary px-3 py-1 rounded-full font-black text-xs md:text-sm">
                                                GPA {edu.gpa}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* 3. Description - Separate row on mobile */}
                                <div className="sm:pl-4 border-l-2 sm:border-l-0 border-gray-100 pl-4 mt-2 sm:mt-0">
                                    <p className="leading-relaxed text-sm md:text-base text-gray-600 font-normal">
                                        {edu.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSec;