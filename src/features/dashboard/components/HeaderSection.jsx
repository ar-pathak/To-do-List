import { IoPersonAdd } from "react-icons/io5";

const HeaderSection = ({ onInvite }) => (
  <div className="flex flex-wrap justify-between items-center">
    <h1 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-0">
      Welcome back, <span className="text-[#FF6767]">Sundar 👋</span>
    </h1>
    <button
      onClick={onInvite}
      className="flex items-center gap-2 bg-white border border-[#FF6767] text-[#FF6767] px-5 py-2 rounded-xl shadow-sm hover:bg-[#FF6767] hover:text-white transition-all duration-200"
    >
      <IoPersonAdd className="text-lg" />
      <span className="text-sm font-medium">Invite</span>
    </button>
  </div>
);

export default HeaderSection;
