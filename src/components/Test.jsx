function Test() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-5">
        {/* ส่วนที่ 1 */}
        <div className="relative w-full h-60 sm:h-96 lg:h-[480px] overflow-hidden rounded-lg">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
            style={{
              backgroundImage: "url('https://via.placeholder.com/800x600')",
            }}
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
            <h2 className="text-white text-lg sm:text-2xl font-bold">
              Test Zoom
            </h2>
          </div>
        </div>
      </div>
    );
  }
  
  export default Test;
  