import React from "react";
import WhiteCard from '../../../components/WhiteCard.tsx';
import useTheme from '../../../hooks/useTheme.ts';

const Details: React.FC = () => {
    const { isDarkMode } = useTheme();
    return (
        <WhiteCard
            title="Details"
            subtitle="Información general del proveedor"
            className="mx-auto max-w-2xl p-5 lg:max-w-full"
            isDarkMode={isDarkMode}
            spanCols={1}
        >
            <div className="lg:flex lg:gap-10 lg:items-start">
                <div className="w-full lg:w-1/2">
                    <div className="p-2.5">
                        <h3 className={`font-semibold p-2 mb-2 ${isDarkMode ? ' text-white bg-gray-600' : 'text-gray-800 bg-gray-100'}`}>Supplier Details</h3>
                        <dl className="space-y-2">
                            <div className="flex justify-between">
                                <dt className={`${isDarkMode ? ' text-gray-300' : 'text-gray-600'}`}>Supplier Name</dt>
                                <dd className={`font-medium ${isDarkMode ? ' text-white' : 'text-gray-900'}`}>Acme Corp	</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className={`${isDarkMode ? ' text-gray-300' : 'text-gray-600'}`}>Contact Number</dt>
                                <dd className={`font-medium ${isDarkMode ? ' text-white' : 'text-gray-900'}`}>98789 86757</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className={`${isDarkMode ? ' text-gray-300' : 'text-gray-600'}`}>Email</dt>
                                <dd className={`font-medium ${isDarkMode ? ' text-white' : 'text-gray-900'}`}>contact@acmecorp.com</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className={`${isDarkMode ? ' text-gray-300' : 'text-gray-600'}`}>Suggested price</dt>
                                <dd className={`font-medium ${isDarkMode ? ' text-white' : 'text-gray-900'}`}>$50</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="p-2.5">
                    <h3 className={`font-semibold p-2 mb-2 ${isDarkMode ? ' text-white bg-gray-600' : 'text-gray-800 bg-gray-100'}`}>Products</h3>
                    <ul className="list-disc list-inside ">
                            <li>Kit Kat</li>
                            <li>Maaza</li>
                            <li>Apple</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
                    <div className="w-48 h-48 flex items-center justify-center border border-gray-300 border-dotted rounded-lg">
                        <svg
                            className={`w-20 h-20 ${isDarkMode ? ' text-white' : 'text-gray-400'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2a4 4 0 00-4 4v2H6.75A2.75 2.75 0 004 10.75v8.5A2.75 2.75 0 006.75 22h10.5A2.75 2.75 0 0020 19.25v-8.5A2.75 2.75 0 0017.25 8H16V6a4 4 0 00-4-4zm-2 6V6a2 2 0 114 0v2h-4z" />
                        </svg>
                    </div>
                </div>
            </div>
        </WhiteCard>
    );
};

export default Details;
