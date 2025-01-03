import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gg from "../assets/image/gg.png";
import B1 from "../assets/image/B1.png";
import B2 from "../assets/image/B2.png";
import B3 from "../assets/image/B3.png";

const CustomArrow = ({ className, style, onClick, direction }) => {
  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        display: "block",
        background: direction === "left" ? "#e5e5e5" : "#e5e5e5",
        borderRadius: "100%",
        width: "19px",
        height: "19px",
      }}
      onClick={onClick}
    />
  );
};

const BreakingNews = () => {
 
  const settings = {
    dots: true,
    speed: 6000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* หัวข้อ BreakingNews */}
      <div className="bg-[#007AFF] text-white py-2 px-4 text-lg font-bold rounded-lg w-40 mb-4 shadow-lg sm:text-sm">
        <p>Breaking News</p>
      </div>

      {/* เนื้อหา BreakingNews */}

      <Slider {...settings}>
        <div className="md:grid-cols-3 lg:grid-cols-3 grid-rows-1 gap-5 rounded-lg shadow-xl">
          <div className="flex items-center gap-2 rounded-lg shadow-sm p-4 overflow-hidden w-92 h-92">
            <img src="https://via.placeholder.com/800x600" alt="Posts News" className="w-20 h-20 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 object-cover cursor-pointer" />
            <div className="text-[10px]">
              <p className="text-gray-400 italic">
                {" "}
                <a className="text-[#007AFF]">POST</a>: 23 Dec 2025
              </p>
              <a href="#" className="text-xs">
                พบกันภายในงาน Metalex Asean Community Connector กับ
                เครื่องตัดใบเลื่อยสายพาน Band Saw อัตโนมัติแบบ Double Column
                จากประเทศอิตาลี ในรุ่น “ HYDMECH H-320A
              </a>
            </div>
          </div>
        </div>
        <div className="md:grid-cols-3 lg:grid-cols-3 grid-rows-1 gap-5 rounded-lg shadow-xl">
          <div className="flex items-center gap-2 rounded-lg shadow-md p-4 overflow-hidden w-92 h-92">
            <img src="https://via.placeholder.com/800x600" alt="Posts News" className="w-20 h-20 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 object-cover cursor-pointer" />
            <div className="text-[10px]">
              <p className="text-gray-400 italic">
                {" "}
                <a className="text-[#007AFF]">POST</a>: 23 Dec 2025
              </p>
              <a href="#" className="text-xs">
                พบกันภายในงาน Metalex Asean Community Connector กับ
                เครื่องตัดใบเลื่อยสายพาน Band Saw อัตโนมัติแบบ Double Column
                จากประเทศอิตาลี ในรุ่น “ HYDMECH H-320A
              </a>
            </div>
          </div>
        </div>
        <div className="md:grid-cols-3 lg:grid-cols-3 grid-rows-1 gap-5 rounded-lg shadow-xl">
          <div className="flex items-center gap-2 rounded-lg shadow-sm p-4 overflow-hidden w-92 h-92">
            <img src="https://via.placeholder.com/800x600" alt="Posts News" className="w-20 h-20 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 object-cover cursor-pointer" />
            <div className="text-[10px]">
              <p className="text-gray-400 italic">
                {" "}
                <a className="text-[#007AFF]">POST</a>: 23 Dec 2025
              </p>
              <a href="#" className="text-xs">
                พบกันภายในงาน Metalex Asean Community Connector กับ
                เครื่องตัดใบเลื่อยสายพาน Band Saw อัตโนมัติแบบ Double Column
                จากประเทศอิตาลี ในรุ่น “ HYDMECH H-320A
              </a>
            </div>
          </div>
        </div>
        <div className="md:grid-cols-3 lg:grid-cols-3 grid-rows-1 gap-5 rounded-lg shadow-xl">
          <div className="flex items-center gap-2 rounded-lg shadow-sm p-4 overflow-hidden w-92 h-92">
            <img src="https://via.placeholder.com/800x600" alt="Posts News" className="w-20 h-20 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 object-cover cursor-pointer" />
            <div className="text-[10px]">
              <p className="text-gray-400 italic">
                {" "}
                <a className="text-[#007AFF]">POST</a>: 23 Dec 2025
              </p>
              <a href="#" className="text-xs">
                พบกันภายในงาน Metalex Asean Community Connector กับ
                เครื่องตัดใบเลื่อยสายพาน Band Saw อัตโนมัติแบบ Double Column
                จากประเทศอิตาลี ในรุ่น “ HYDMECH H-320A
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BreakingNews;
