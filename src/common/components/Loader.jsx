const Loader = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
      {/* Spinner */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-[#FF6767] rounded-full animate-spin"></div>
      </div>

      <p className="mt-4 text-gray-600 text-lg font-medium animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
