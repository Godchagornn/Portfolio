// import Logo from "../logo";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-14 flex items-center justify-center bg-white">
      <div className="container mx-auto px-4">
        {/* ใช้ items-center เสมอเพื่อให้ดูสมดุลบนทุกหน้าจอ */}
        <div className="flex flex-col gap-6 items-center">
          
          {/* Divider with Text */}
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black opacity-10" />
            <div className="mx-4 text-[10px] md:text-sm font-black tracking-[0.3em] text-gray-400 uppercase">
               {/* <Logo /> */}
               PORTFOLIO
            </div>
            <div className="flex-grow h-px bg-black opacity-10" />
          </div>

          {/* Copyright Text */}
          <div className="text-center">
            <p className="text-gray-500 text-xs md:text-base tracking-wide">
              © 2026 <span className="text-black font-bold">Godchagorn Kitima</span> 
              <span className="hidden sm:inline"> • </span> 
              <br className="sm:hidden" /> {/* ขึ้นบรรทัดใหม่เฉพาะบนมือถือ */}
              All Rights Reserved
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;