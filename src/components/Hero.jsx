import React from "react";

function Hero() {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-5">
      {/* ส่วนที่ 1 (ใหญ่) */}
      <div className="rounded-lg row-start-1 col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-4 overflow-hidden w-92 h-92">
        <div
          className="relative rounded-xl overflow-hidden shadow-lg w-full h-60 sm:h-96 lg:h-[480px] group"
          style={{
            backgroundImage: "url(../src/assets/image/gg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* เอฟเฟกต์เข้มขึ้นเมื่อ hover */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-300"></div>

          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <p className="text-white text-sm sm:text-base font-semibold">
              News
            </p>
            <h2 className="text-white text-lg sm:text-2xl font-bold">
              Newspaper
            </h2>
            <a href="#" className="text-white text-xs sm:text-sm mt-2">
              We Takeko have prepared a variety of modern industrial machinery
              with advanced technology 🥇 to meet the needs of all customers
            </a>
            <p className="text-white text-xs mt-4 italic">POST: 03 Dec 2025</p>
          </div>
        </div>
      </div>

      {/* ส่วนที่ 2 (ด้านขวาบน) */}
      <div className="rounded-lg row-start-2 sm:col-span-2 lg:col-span-2 lg:row-span-2 shadow-md overflow-hidden w-92 h-92">
        <div
          className="relative rounded-xl overflow-hidden shadow-lg w-full h-40 sm:h-60 lg:h-[233px] group"
          style={{
            backgroundImage: "url(https://via.placeholder.com/800x600)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-300"></div>

          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <p className="text-white text-sm sm:text-base font-semibold">
              News
            </p>
            <h2 className="text-white text-lg sm:text-2xl font-bold">Even</h2>
            <a href="#" className="text-white text-xs sm:text-sm mt-2">
              We Takeko have prepared a variety of modern industrial machinery
              with advanced technology 🥇 to meet the needs of all customers
            </a>
            <p className="text-white text-xs mt-4 italic">POST: 03 Dec 2025</p>
          </div>
        </div>
      </div>

      {/* ส่วนที่ 3 (ด้านขวาล่าง) */}
      <div className="rounded-lg row-start-3 sm:col-span-2 lg:col-span-2 lg:row-span-2 shadow-md overflow-hidden w-92 h-92">
        <div
          className="relative rounded-xl overflow-hidden shadow-lg w-full h-40 sm:h-60 lg:h-[236px] group"
          style={{
            backgroundImage: "url(https://via.placeholder.com/800x600)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-300"></div>

          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <p className="text-white text-sm sm:text-base font-semibold">
              News
            </p>
            <h2 className="text-white text-lg sm:text-2xl font-bold">
              Newspaper
            </h2>
            <a href="#" className="text-white text-xs sm:text-sm mt-2">
              We Takeko have prepared a variety of modern industrial machinery
              with advanced technology 🥇 to meet the needs of all customers
            </a>
            <p className="text-white text-xs mt-4 italic">POST: 03 Dec 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

