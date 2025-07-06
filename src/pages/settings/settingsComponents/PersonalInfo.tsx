import React from "react";
import useLanguage from '../../../hooks/useLanguage';

const PersonalInfo: React.FC= () => {
  const user = JSON.parse(localStorage.getItem('userToken') || '{}');
  const {translate } = useLanguage();
  const inputFields = [
    { label: `${translate('FullName')}`, name: 'fullName', value: user.name_user },
    { label: `${translate('email')}`, name: 'email', value: user.mail_user },
    { label: `${translate('position')}`, name: 'position', value: user.position },
    { label: `${translate('company')}`, name: 'company', value: user.company },
  ];

  return (
    <div className="mb-6 border border-gray-200 p-4 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-medium sm:text-lg font-bold">{translate('PersonalBusiness')}</h2>    
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {inputFields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium">{field.label}</label>
            <p>{field.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
