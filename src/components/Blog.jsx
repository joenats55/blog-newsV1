import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import Gg from "../assets/image/gg.png";
import B3 from "../assets/image/B3.png";
import B2 from "../assets/image/B2.png";

function Blog() {
  // ข้อมูลของ Blog
  const cardsData = [
    {
      id: 1,
      image: "https://via.placeholder.com/800x600",
      author: "TAKECO ENGINEERING THAILAND",
      date: "03 Dec 2025",
      title: "Test Title 1",
      description:
        "You can customize the view Blog post with author simple mouse click and immediately see the result of your changes",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/800x600",
      author: "TAKECO ENGINEERING THAILAND",
      date: "05 Dec 2025",
      title: "Test Title 2",
      description:
        "You can customize the view Blog post with author simple mouse click and immediately see the result of your changes",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/800x600",
      author: "ANOTHER COMPANY",
      date: "06 Dec 2025",
      title: "Test Title 3",
      description: "This is a description for card 3.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/800x600",
      author: "ANOTHER COMPANY",
      date: "06 Dec 2025",
      title: "Test Title 4",
      description: "This is a description for card 4.",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/800x600",
      author: "ANOTHER COMPANY",
      date: "06 Dec 2025",
      title: "Test Title 5",
      description: "This is a description for card 5.",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/800x600",
      author: "ANOTHER COMPANY",
      date: "06 Dec 2025",
      title: "Test Title 6",
      description: "This is a description for card 6.",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/800x600",
      author: "ANOTHER COMPANY",
      date: "07 Dec 2025",
      title: "Test Title 7",
      description:
        "You can customize the view Blog post with author simple mouse click and immediately see the result of your changes",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/800x600",
      author: "ANOTHER COMPANY",
      date: "07 Dec 2025",
      title: "Test Title 8",
      description:
        "You can customize the view Blog post with author simple mouse click and immediately see the result of your changes",
    },
    // {
    //   id: 9,
    //   image: Gg,
    //   author: "ANOTHER COMPANY",
    //   date: "07 Dec 2025",
    //   title: "Test Title 9",
    //   description: "You can customize the view Blog post with author simple mouse click and immediately see the result of your changes",
    // },
    // {
    //   id: 10,
    //   image: Gg,
    //   author: "ANOTHER COMPANY",
    //   date: "07 Dec 2025",
    //   title: "Test Title 8",
    //   description: "You can customize the view Blog post with author simple mouse click and immediately see the result of your changes",
    // },
    // {
    //   id: 11,
    //   image: Gg,
    //   author: "ANOTHER COMPANY",
    //   date: "07 Dec 2025",
    //   title: "Test Title 9",
    //   description: "You can customize the view Blog post with author simple mouse click and immediately see the result of your changes",
    // },
    // {
    //   id: 12,
    //   image: Gg,
    //   author: "ANOTHER COMPANY",
    //   date: "07 Dec 2025",
    //   title: "Test Title 9",
    //   description: "You can customize the view Blog post with author simple mouse click and immediately see the result of your changes",
    // },
  ];

  const itemsPerPage = 6; // จำนวนที่จะแสดงในแต่ละหน้า
  const [currentPage, setCurrentPage] = useState(1);

  // คำนวณข้อมูลสำหรับหน้าแสดงผล
  const indexOfLastCard = currentPage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  // คำนวณจำนวนหน้าทั้งหมด
  const totalPages = Math.ceil(cardsData.length / itemsPerPage);

  return (
    <div className="bg-white min-h-screen relative top-8">
      <header className="bg-[#007AFF] text-white py-2 px-4 text-lg font-bold rounded-lg w-40 mb-4 shadow-lg sm:text-sm">
        Blog
      </header>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Posts */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {currentCards.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-[350px] overflow-y-auto"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 "
              />
              <div className="p-4 flex-grow">
                <p className="text-gray-400 text-[10px] mb-1">
                  BY: {card.author}
                </p>
                <p className="text-gray-400 text-[10px] mb-2 italic">
                  <a className="text-[#007AFF]">POST</a>: {card.date}
                </p>
                <a
                  href="#"
                  className="text-2xl font-bold mb-2 sm:text-basewwww"
                >
                  {card.title}
                </a>
                <p className="text-gray-700 text-sm sm:text-xs clamp-text">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Section List */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold mb-0">Section</h3>
            <div className="flex gap-2 md:pt-1">
              <div className="flex-none w-12 size-1.5 bg-[#007AFF] rounded-lg md:w-12 lg:w-12 lg:size-1.5"></div>
              <div className="flex-none w-32 size-1.5 bg-[#d4d4d8] rounded-lg md:w-32 lg:w-32 lg:size-1.5"></div>
            </div>
            <ul className="space-y-2 pt-1">
              <a href="#" className="flex items-center mr-2">
                <SlArrowRight />
                Event
              </a>
              <a href="#" className="flex items-center mr-2">
                <SlArrowRight />
                Products
              </a>
              <a href="#" className="flex items-center mr-2">
                <SlArrowRight />
                Services
              </a>
              <a href="#" className="flex items-center mr-2">
                <SlArrowRight />
                Business
              </a>
            </ul>
          </div>

          {/* Related Posts */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold mb-0">Related Posts</h3>
            <div className="flex gap-2 sm:py-1 md:pt-1 md:pd-1 ">
              <div className="flex-none w-12 size-1.5 bg-[#007AFF] rounded-lg md:w-12 lg:w-12 lg:size-1.5"></div>
              <div className="flex-none w-48 size-1.5 bg-[#d4d4d8] rounded-lg md:w-32 lg:w-48 lg:size-1.5"></div>
            </div>
            {Array(4)
              .fill()
              .map((_, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img
                    src="https://via.placeholder.com/800x600"
                    alt="Related Post"
                    className="w-12 h-12 object-cover rounded-md mr-4 transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="text-sm sm:text-xs">
                    <a href="#">
                      Betting against meme stocks could get you seriously
                      burned...
                    </a>
                    <p className="text-gray-500 text-xs italic sm:text-[10px]">
                      03 Dec 2025
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Help Section */}
          <div className="bg-[#007AFF] text-white rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4 sm:text-lg ">
              How We Can Help You!
            </h3>
            <p className="text-sm mb-4 text-left sm:text-xs mt-2">
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vel
              facilisis.
            </p>
            <button href="#" className="bg-white text-[#007AFF] font-bold py-2 px-4 rounded-full">
              Contact Us
            </button>
          </div>
        </aside>
      </div>

      {/* Pagination */}
      <nav aria-label="Page navigation example" className="mt-8 p-[1.5rem]">
        <ul className="inline-flex -space-x-px text-sm gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li key={page}>
              <button
                onClick={() => setCurrentPage(page)}
                className={`flex items-center justify-center px-3 h-8 ${
                  currentPage === page
                    ? "text-blue-600 border bg-blue-50"
                    : "text-gray-500 bg-white border"
                } hover:bg-gray-100 hover:text-gray-700 rounded-lg `}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Blog;
