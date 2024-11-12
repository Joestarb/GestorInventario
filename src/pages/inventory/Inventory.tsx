import React from 'react'
import OverhallInventory from './inventoryComponents/OverhallInventory'
import useTheme from '../../hooks/useTheme'
import Products from './inventoryComponents/Products'
const Inventory: React.FC = () => {
  
  const {isDarkMode} = useTheme()
  return (
    <div className=' py-6 px-4'>
      <OverhallInventory isDarkMode={isDarkMode} />
      <br />
      <Products isDarkMode={isDarkMode}/>
    </div>
  )
}

export default Inventory