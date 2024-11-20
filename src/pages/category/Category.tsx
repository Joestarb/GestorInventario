import React from 'react'
import CategoryWhiteCard from "../category/categoryComponents/CategoryList"
import useTheme from '../../hooks/useTheme'

const Category: React.FC = () => {
    const {isDarkMode} = useTheme()
    return (
        <div className=' py-6 px-4'>
            <CategoryWhiteCard isDarkMode={isDarkMode}/>
        </div>
    )
}

export default Category