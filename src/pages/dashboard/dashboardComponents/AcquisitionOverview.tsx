import React from 'react';
import WhiteCard from '../../../components/WhiteCard';

const AcquisitionOverview = ({ isDarkMode }) => {
    const channels = [
        { name: "Organic Search", users: "5,649", progress: "30%", color: "bg-green-500" },
        { name: "Referral", users: "4,025", progress: "24%", color: "bg-blue-500" },
        { name: "Social Media", users: "3,125", progress: "18%", color: "bg-pink-500" },
    ];

    return (
        <WhiteCard
            title='Acquisition Overview'
            isDarkMode={isDarkMode}
            additionalClasses="p-4 sm:p-6 xl:p-8"
        >
            <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                        <tr>
                            <th className={`px-4 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap ${isDarkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                                Top Channels
                            </th>
                            <th className={`px-4 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap ${isDarkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                                Users
                            </th>
                            <th className={`px-4 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px ${isDarkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {channels.map((channel, index) => (
                            <tr key={index}>
                                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                    {channel.name}
                                </th>
                                <td className="border-t-0 px-4 align-middle text-xs font-medium whitespace-nowrap p-4">
                                    {channel.users}
                                </td>
                                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">{channel.progress}</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className={`h-2 rounded-sm ${channel.color}`} style={{ width: channel.progress }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </WhiteCard>
    );
};

export default AcquisitionOverview;
