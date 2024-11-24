import React from "react";
import avatar from "../../../assets/avatar.png";

interface ProfileCardProps {
  formData: {
    fullName: string;
    email: string;
    role: string;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ formData }) => {
  return (
    <div className="mb-6 border border-gray-200 p-4 rounded-md">
      <h2 className="text-lg font-bold mb-4">Mi perfil</h2>
      <div className="flex items-center">
        <img
          src={avatar}
          alt="Profile"
          className="rounded-full w-20 h-20 mr-4"
        />
        <div>
          <h3 className="text-medium sm:text-lg font-bold">{formData.fullName}</h3>
          <p className="text-sm mt-0.5">{formData.role}</p>
          <p className="text-xs">{formData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
