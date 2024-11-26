import React from "react";
import WhiteCard from "../../components/WhiteCard";
import useTheme from '../../hooks/useTheme';
import ProfileCard from './settingsComponents/ProfileCard';
import PersonalInfo from './settingsComponents/PersonalInfo';
import CompanyInfo from './settingsComponents/CompanyInfo';
import useLanguage from '../../hooks/useLanguage';

const Settings: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { translate } = useLanguage();


  return (
    <div className="p-3 mx-auto font-sans">
      <WhiteCard
        title={translate('Accountinformation')}
        subtitle={translate('Profiledetails')}
        isDarkMode={isDarkMode}
      >
        <ProfileCard />
        <PersonalInfo
        />
        <CompanyInfo  />
      </WhiteCard>
    </div>
  );
};

export default Settings;
