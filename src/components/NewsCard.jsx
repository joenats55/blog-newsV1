import React from "react";

const NewsCard = () => {
  const newsData = [
    {
      title: "Newspaper",
      subtitle: "News",
      description:
        "We, Takeko, have prepared a variety of modern industrial machinery with advanced technology to meet the needs of all customers.",
      postDate: "03 Dec 2025",
      image: "../src/assets/image/gg.png", 
    },
    {
      title: "Event",
      subtitle: "News",
      description:
        "We, Takeko, have prepared a variety of modern industrial advanced technology to meet the needs of all customers.",
      postDate: "03 Dec 2025",
      image: "../src/assets/image/N3.png", 
    },
    {
      title: "FIVES",
      subtitle: "News",
      description:
        "We, Takeko, have prepared a variety of modern industrial machinery with advanced technology to meet the needs of all customers.",
      postDate: "03 Dec 2025",
      image: "../src/assets/image/N2.png", 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {newsData.map((news, index) => (
        <div
          key={index}
          className="relative rounded-xl overflow-hidden shadow-lg"
        >
          {/* รูปภาพ */}
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-60 object-cover"
          />

          {/* ชั้นข้อความ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
            <div>
              <p className="text-white text-sm font-semibold">{news.subtitle}</p>
              <h2 className="text-white text-2xl font-bold">{news.title}</h2>
              <p className="text-white text-sm mt-2">{news.description}</p>
              <p className="text-white text-xs mt-4">POST: {news.postDate}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;