import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    onSendInvite({ email, role });
    alert(`Invite sent to ${email} as ${role}`);
    setEmail("");
    setRole("Member");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Centered container with scroll */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FF6767] to-[#FF8C68] px-6 py-4 flex justify-between items-center text-white sticky top-0 z-10">
              <h2 className="text-xl sm:text-2xl font-semibold">Invite New Member</h2>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white text-xl transition"
              >
                <IoClose />
              </button>
            </div>

            {/* Scrollable form */}
            <div className="overflow-y-auto px-6 py-5 sm:py-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <form
                onSubmit={handleSubmit}
                className="space-y-5 pb-[env(safe-area-inset-bottom)]"
              >
                {/* Subtitle */}
                <p className="text-sm text-gray-500">
                  Send an invitation to join your workspace.
                </p>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. user@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-[#FF6767] outline-none transition"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Role
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-[#FF6767] outline-none bg-white transition"
                  >
                    <option>Member</option>
                    <option>Admin</option>
                    <option>Viewer</option>
                  </select>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 p-4 border-t border-gray-200 bg-white sticky bottom-0 z-10">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-5 py-2.5 bg-[#FF6767] text-white rounded-xl hover:bg-[#ff5656] transition font-medium shadow-md"
              >
                Send Invite
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InviteMemberPopup;
