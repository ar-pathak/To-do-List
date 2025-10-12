import { useState } from "react";
import { IoClose } from "react-icons/io5";

const InviteMemberPopup = ({ isOpen, onClose, onSendInvite }) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Member");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter a valid email address.");
      return;
    }

    // Mock invite handler
    onSendInvite({ email, role });
    alert(`Invite sent to ${email} as ${role}`);
    setEmail("");
    setRole("Member");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-2xl shadow-lg p-6 sm:p-8 relative transition-all transform scale-100 animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
        >
          <IoClose size={22} />
        </button>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Invite New Member
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Send an invitation to join your workspace.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A3D] text-sm sm:text-base"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Select Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A3D] text-sm sm:text-base"
            >
              <option>Member</option>
              <option>Admin</option>
              <option>Viewer</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-5 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition text-sm sm:text-base"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-5 bg-gradient-to-r from-[#FF7A3D] to-[#FF4E4E] text-white rounded-xl shadow-md hover:opacity-90 transition text-sm sm:text-base"
            >
              Send Invite
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InviteMemberPopup;
