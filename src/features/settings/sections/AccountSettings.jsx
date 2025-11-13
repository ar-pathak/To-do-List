import React from "react";
import SettingSectionWrapper from "../SettingSectionWrapper";
import FormGroup from "../components/FormGroup";
import SectionCard from "../components/SectionCard";

const AccountSettings = () => {
  return (
    <SettingSectionWrapper
      title="Account Settings"
      subtitle="Manage your personal profile and account information."
    >
      <SectionCard title="Profile">
        <FormGroup label="Full Name">
          <input className="w-full border rounded-lg p-3" placeholder="Your name" />
        </FormGroup>
        <FormGroup label="Email">
          <input className="w-full border rounded-lg p-3" placeholder="example@mail.com" />
        </FormGroup>
      </SectionCard>

      <SectionCard title="Profile Photo">
        <button className="px-4 py-2 bg-[#FF6767] text-white rounded-lg">
          Upload New Photo
        </button>
      </SectionCard>
    </SettingSectionWrapper>
  );
};

export default AccountSettings;
