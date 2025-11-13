import { useState } from "react";
import AvatarUploader from "./AvatarUploader";

const ProfileCard = () => {
    const [avatar, setAvatar] = useState(null);

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) setAvatar(URL.createObjectURL(file));
    };

    return (
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Profile</h2>
            <p className="text-gray-500 text-sm mb-5">
                Your personal information visible to others in the workspace.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">

                <AvatarUploader avatar={avatar} onChange={handleUpload} />

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label className="text-sm font-medium text-gray-600">Full Name</label>
                        <input className="w-full p-3 border rounded-lg mt-1" defaultValue="Arsan Pathak" />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-600">Email</label>
                        <input className="w-full p-3 border rounded-lg mt-1" defaultValue="arsan@example.com" />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-600">Role</label>
                        <input className="w-full p-3 border rounded-lg mt-1 bg-gray-100" disabled value="Member" />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-600">Phone</label>
                        <input className="w-full p-3 border rounded-lg mt-1" placeholder="+91 9876543210" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
