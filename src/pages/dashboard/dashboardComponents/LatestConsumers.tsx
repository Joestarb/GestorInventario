import React from 'react';
import WhiteCard from '../../../components/WhiteCard';

    const LatestCustomers: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {

    const customers = [
        { name: "Neil Sims", email: "[email protected]", amount: "$320", img: "https://demo.themesberg.com/windster/images/users/neil-sims.png" },
        { name: "Bonnie Green", email: "[email protected]", amount: "$3467", img: "https://demo.themesberg.com/windster/images/users/bonnie-green.png" },
        { name: "Michael Gough", email: "[email protected]", amount: "$67", img: "https://demo.themesberg.com/windster/images/users/michael-gough.png" },
        { name: "Thomas Lean", email: "[email protected]", amount: "$2367", img: "https://demo.themesberg.com/windster/images/users/thomas-lean.png" },
        { name: "Lana Byrd", email: "[email protected]", amount: "$367", img: "https://demo.themesberg.com/windster/images/users/lana-byrd.png" },
    ];

    return (
        <WhiteCard
            title='Latest Customers'
            isDarkMode={isDarkMode}
            additionalClasses="mb-4 h-full">
            <div className="flex items-center justify-between mb-4">
                <a href="#" className="text-sm font-medium hover:ligth-components hover:text-black rounded-lg inline-flex items-center p-2">
                    View all
                </a>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                    {customers.map((customer, index) => (
                        <li key={index} className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <img className="h-8 w-8 rounded-full" src={customer.img} alt={`${customer.name} image`} />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate">{customer.name}</p>
                                    <p className="text-sm truncate">{customer.email}</p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold">{customer.amount}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </WhiteCard>
    );
};

export default LatestCustomers;
