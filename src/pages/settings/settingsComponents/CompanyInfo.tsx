import React from "react";
import useLanguage from '../../../hooks/useLanguage';

const CompanyInfo: React.FC = () => {
  const user = JSON.parse(localStorage.getItem('userToken') || '{}');
  const {translate } = useLanguage();
  return (
    <div className="mb-6 border border-gray-200 p-4 rounded-md">
      <h2 className="text-medium sm:text-lg font-bold mb-4">{translate('UserDataCompany')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">{translate('position')}</label>
          <p>{user.position}</p>
        </div>
        <div>
          <label className="block text-sm font-medium">{translate('company')}</label>
          <p>{user.company}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
