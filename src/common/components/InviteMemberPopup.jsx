// src/common/InviteMemberPopup.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const InviteMemberPopup = ({ isOpen, onClose, onSendInvite, onGenerateInviteLink }) => {
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("Member");
    const [error, setError] = useState("");
    const emailRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setEmail("");
            setRole("Member");
            setError("");
            setTimeout(() => emailRef.current?.focus(), 120);
            document.body.style.overflow = "hidden";
        }
        return () => (document.body.style.overflow = "");
    }, [isOpen]);

    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose();
        if (isOpen) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, onClose]);

    const validateEmail = (value) => {
        // simple regex
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setError(ok ? "" : "Please enter a valid email");
        return ok;
    };

    const handleSubmit = (e) => {
        e?.preventDefault();
        if (!email.trim() || !validateEmail(email)) return;
        onSendInvite?.({ email: email.trim(), role });
        onClose();
    };

    const handleGenerateLink = async () => {
        const link = await onGenerateInviteLink?.();
        // callback can return a link (string) which you can copy / show in UI
        if (link) navigator.clipboard?.writeText(link);
        // optionally show a tiny toast in calling code
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-3 sm:p-6"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.div role="dialog" aria-modal="true" aria-label="Invite member"
                    initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

                    <div className="bg-gradient-to-r from-[#FF6767] to-[#FF8C68] px-6 py-3 flex justify-between items-center text-white sticky top-0 z-10">
                        <h3 className="text-lg font-semibold">Invite New Member</h3>
                        <button onClick={onClose} aria-label="Close" className="text-white/90 hover:text-white text-xl"><IoClose /></button>
                    </div>

                    <div className="overflow-y-auto px-6 py-5 sm:py-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <form onSubmit={handleSubmit} className="space-y-4 pb-[env(safe-area-inset-bottom)]">
                            <p className="text-sm text-gray-500">Send an invitation to join your team or generate a shareable invite link.</p>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                                <input ref={emailRef} value={email} onChange={(e) => { setEmail(e.target.value); if (error) validateEmail(e.target.value); }}
                                    placeholder="user@example.com" className={`w-full border ${error ? "border-red-400" : "border-gray-300"} rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#FF6767] outline-none`} />
                                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#FF6767] outline-none">
                                    <option>Member</option>
                                    <option>Admin</option>
                                    <option>Viewer</option>
                                </select>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                                <button type="submit" className="flex-1 px-4 py-2.5 bg-[#FF6767] text-white rounded-xl hover:bg-[#ff5656] transition">Send Invite</button>
                                <button type="button" onClick={handleGenerateLink} className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition">Generate Invite Link</button>
                            </div>
                        </form>
                    </div>

                    <div className="flex justify-end gap-3 p-4 border-t border-gray-200 bg-white sticky bottom-0 z-10">
                        <button onClick={onClose} className="px-4 py-2 text-gray-700 rounded-xl bg-gray-100 hover:bg-gray-200">Close</button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default InviteMemberPopup;
