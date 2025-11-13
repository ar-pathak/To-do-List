import { FiUpload } from "react-icons/fi";

const AvatarUploader = ({ avatar, onChange }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden shadow-md">
                <img
                    src={avatar || "/img/profile-default.png"}
                    alt="avatar"
                    className="w-full h-full object-cover"
                />
            </div>

            <label className="mt-3 cursor-pointer flex items-center gap-2 text-sm text-[#FF6767] hover:underline">
                <FiUpload />
                Upload new photo
                <input
                    type="file"
                    accept="image/*"
                    onChange={onChange}
                    className="hidden"
                />
            </label>
        </div>
    );
};

export default AvatarUploader;
