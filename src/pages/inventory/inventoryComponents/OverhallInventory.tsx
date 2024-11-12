import React from 'react';
import WhiteCard from '../../../components/WhiteCard';

const OverhallInventory: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const overallInventory = {
        categories: {
            label: "Categories",
            value: 14,
            description: "Last 7 days"
        },
        totalProducts: {
            label: "Total Products",
            revenue: "₹25000",
            description: "Last 7 days"
        },
        topSelling: {
            label: "Top Selling",
            cost: "₹2500",
            description: "Last 7 days"
        },
        lowStocks: {
            label: "Low Stocks",
            notInStock: 2,
            descriptionNotInStock: "Not in stock"
        }
    };

    return (
        <WhiteCard isDarkMode={isDarkMode} title="Overall Inventory">
            <div className="flex justify-between space-x-4">
                {/* Categories */}
                <div>
                    <h4 className=" text-2xl pb-2 text-blue-500">{overallInventory.categories.label}</h4>
                    <p className=' text-lg'>{overallInventory.categories.value}</p>
                    <small className="text-gray-500">{overallInventory.categories.description}</small>
                </div>
                
                {/* Total Products */}
                <div>
                    <h4 className="text-2xl pb-2 text-orange-500">{overallInventory.totalProducts.label}</h4>
                    <p className=' text-lg' >{overallInventory.totalProducts.revenue}</p>
                    <small className="text-gray-500">{overallInventory.totalProducts.description}</small>
                </div>
                
                {/* Top Selling */}
                <div>
                    <h4 className="text-2xl pb-2 text-purple-500">{overallInventory.topSelling.label}</h4>
                    <p className=' text-lg' >{overallInventory.topSelling.cost}</p>
                    <small className="text-gray-500">{overallInventory.topSelling.description}</small>
                </div>
                
                {/* Low Stocks */}
                <div>
                    <h4 className="text-2xl pb-2 text-red-500">{overallInventory.lowStocks.label}</h4>
                    <p className=' text-lg' >{overallInventory.lowStocks.notInStock}</p>
                    <small className="text-gray-500">{overallInventory.lowStocks.descriptionNotInStock}</small>
                </div>
            </div>
        </WhiteCard>
    );
};

export default OverhallInventory;
