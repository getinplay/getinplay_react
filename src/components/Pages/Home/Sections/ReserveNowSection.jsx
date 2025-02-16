function ReserveNowSection() {
  return (
    <>
      <div className="flex justify-center">
        <div className="lg:w-max min-h-[500px] pt-10 pb-20 flex flex-col-reverse lg:flex-row items-center justify-center">
          <div className="lg:w-[40svw] w-[80svw] flex flex-col justify-between items-start pl-5 max-lg:rounded-b-xl lg:rounded-l-xl h-full bg-red-500 p-5 ">
            <h4 className="text-3xl font-bold text-white tracking-wide">
              Reserve Now!
            </h4>
            <p className="text-white text-start text-lg font-semibold">
              Secure your spot at the most anticipated events of the year. Don't
              miss out!
            </p>
            <button className="hover:bg-gray-200 duration-300 active:translate-y-2 active:shadow-none shadow-lg shadow-red-300 cursor-pointer text-lg text-red-500 bg-white font-semibold rounded-lg px-5 py-2">
              Join for free
            </button>
          </div>
          <div className="lg:w-[40svw] w-[80svw] lg:rounded-r-xl max-lg:rounded-t-xl h-full pr-5 bg-amber-400"></div>
        </div>
      </div>
    </>
  );
}
export default ReserveNowSection;
