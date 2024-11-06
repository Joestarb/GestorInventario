import React from 'react'
import Products from './manageStoreComponents/Products'
import useTheme from '../../hooks/useTheme'
const ManageStore: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <Products
    isDarkMode = {isDarkMode}
    />

  )
}

export default ManageStore