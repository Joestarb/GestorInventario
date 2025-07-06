import React from "react";
import avatar from "../../../assets/avatar.png";
import useLanguage from '../../../hooks/useLanguage';

const ProfileCard: React.FC = () => {
  const { translate } = useLanguage();
  const user = JSON.parse(localStorage.getItem('userToken') || '{}');
  return (
    <div className="mb-6 border border-gray-200 p-4 rounded-md">
      <h2 className="text-lg font-bold mb-4">{translate('Myprofile')}</h2>
      <div className="flex items-center">
        <img
          src={avatar}
          alt="Profile"
          className="rounded-full w-20 h-20 mr-4"
        />
        <div>
          <h3 className="text-medium sm:text-lg font-bold">{user.name_user}</h3>
          <p className="text-xs">{user.mail_user}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
