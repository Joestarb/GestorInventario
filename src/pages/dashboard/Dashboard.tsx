import React from 'react'
import useLanguage from '../../hooks/useLanguage'
const Dashboard: React.FC = () => {
  const { translate } = useLanguage();

  return (
    <div className=' text-4xl '>{translate("welcome")}</div>
  )
}

export default Dashboard