import React from 'react';
import WhiteCard from '../../../components/WhiteCard';

const OverhallOrders: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const overallOrders = {
        totalorders: {
            label: "Total Orders",
            value: 37,
            description: "Last 7 days"
        },
        totalReceived: {
            label: "Total Received",
            value: 37,
            description: "Last 7 days",
            revenueReceived: "₹25000",
            costReceived: "Revenue"
        },
        totalReturned: {
            label: "Total Returned",
            value: 37,
            description: "Last 7 days",
            revenueReturned: "₹2500",
            costReturned: "Cost"
        },
        onTheWay: {
            label: "On the way",
            notInStock: 2,
            descriptionOnTheWay: "Ordered",
            revenueOnTheWay: "₹2356",
            costOnTheWay: "Cost"
        }
    };

    return (
        <WhiteCard isDarkMode={isDarkMode} title="Overall Orders">
            <div className="flex justify-between space-x-4">
                {/* totalorders */}
                <div>
                    <h4 className=" text-2xl pb-2 text-blue-500">{overallOrders.totalorders.label}</h4>
                    <p className=' text-lg'>{overallOrders.totalorders.value}</p>
                    <small className="text-gray-500">{overallOrders.totalorders.description}</small>
                </div>
                
                {/* Total Received */}
                <div>
                    <h4 className="text-2xl pb-2 text-orange-500">{overallOrders.totalReceived.label}</h4>
                    <div className='flex space-x-14'>
                        <div>
                            <p className=' text-lg' >{overallOrders.totalReceived.value}</p>
                            <small className="text-gray-500">{overallOrders.totalReceived.description}</small>
                        </div>
                        <div>
                            <p className=' text-lg' >{overallOrders.totalReceived.revenueReceived}</p>
                            <small className="text-gray-500">{overallOrders.totalReceived.costReceived}</small>
                        </div>
                    </div>
                </div>
                
                {/* Total Returned */}
                <div>
                    <h4 className="text-2xl pb-2 text-purple-500">{overallOrders.totalReturned.label}</h4>
                    <div className='flex space-x-14'>
                        <div>
                            <p className=' text-lg' >{overallOrders.totalReturned.value}</p>
                            <small className="text-gray-500">{overallOrders.totalReturned.description}</small>
                        </div>
                        <div>
                            <p className=' text-lg' >{overallOrders.totalReturned.revenueReturned}</p>
                            <small className="text-gray-500">{overallOrders.totalReturned.costReturned}</small>
                        </div>
                    </div>
                </div>
                
                {/* On the way */}
                <div>
                    <h4 className="text-2xl pb-2 text-red-500">{overallOrders.onTheWay.label}</h4>
                    <div className='flex space-x-14'>
                        <div>
                            <p className=' text-lg' >{overallOrders.onTheWay.notInStock}</p>
                            <small className="text-gray-500">{overallOrders.onTheWay.descriptionOnTheWay}</small>
                        </div>
                        <div>
                            <p className=' text-lg' >{overallOrders.onTheWay.revenueOnTheWay}</p>
                            <small className="text-gray-500">{overallOrders.onTheWay.costOnTheWay}</small>
                        </div>
                    </div>
                </div>
            </div>
        </WhiteCard>
    );
};

export default OverhallOrders;
