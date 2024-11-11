import React from 'react'
import WhiteCard from '../../../components/WhiteCard'
import useTheme from '../../../hooks/useTheme'
import DynamicTable from '../../../components/DynamicTable'

const BestSelling: React.FC = () => {
    const { isDarkMode } = useTheme()
    const categories = [
        { product: 'tomato', productId:'22393167', category:'vegetables', remainQuantity:'225kg', turnOver:'$1700', increaseBy:'2.3%'},
        { product: 'tomato', productId:'22393167', category:'vegetables', remainQuantity:'225kg', turnOver:'$1700', increaseBy:'2.3%'},
        { product: 'tomato', productId:'22393167', category:'vegetables', remainQuantity:'225kg', turnOver:'$1700', increaseBy:'2.3%'},
        { product: 'tomato', productId:'22393167', category:'vegetables', remainQuantity:'225kg', turnOver:'$1700', increaseBy:'2.3%'},
        { product: 'tomato', productId:'22393167', category:'vegetables', remainQuantity:'225kg', turnOver:'$1700', increaseBy:'2.3%'},
        { product: 'tomato', productId:'22393167', category:'vegetables', remainQuantity:'225kg', turnOver:'$1700', increaseBy:'2.3%'},
    ];
    const headers = [...(['product','productId', 'category',  'remainQuantity', 'turnOver', 'increaseBy'] as const)];

    return (
        <WhiteCard
            title='Best Sellings'
            isDarkMode={isDarkMode}
            children={
                <div className=' overflow-auto'>
                    <DynamicTable  data={categories} headers={headers}/>
                </div>
            }
        />
    )
}

export default BestSelling