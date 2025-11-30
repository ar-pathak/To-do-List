
const AvatarCircle = ({ label, muted = false }) => (
  <div
    className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold shadow-sm ${
      muted
        ? "bg-gray-800 text-gray-50"
        : "bg-gradient-to-tr from-[#FF6767] to-[#FF9B7B] text-white"
    }`}
  >
    {label}
  </div>
);

export default AvatarCircle;