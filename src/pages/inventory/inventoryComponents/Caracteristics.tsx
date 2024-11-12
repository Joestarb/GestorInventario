import React from 'react';
import useTheme from '../../../hooks/useTheme';
const Caracteristics: React.FC = () => {
    const {isDarkMode} = useTheme()
    return (
        <div className="grid grid-cols-1 max-md:flex md:grid-cols-2 gap-6 ">
            <div>
                <h2 className="text-lg font-semibold mb-4">Primary Details</h2>
                <div className={`text-sm  space-y-2 ${isDarkMode? '':'text-gray-600'}`}>
                    <p><span className="font-medium">Product name:</span> Maggi</p>
                    <p><span className="font-medium">Product ID:</span> 456567</p>
                    <p><span className="font-medium">Product category:</span> Instant food</p>
                    <p><span className="font-medium">Expiry Date:</span> 13/4/23</p>
                    <p><span className="font-medium">Threshold Value:</span> 12</p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <img src="path_to_image.png" alt="Maggi" className="w-32 h-32 object-contain mb-4" />
                <div className={`text-sm  space-y-2 ${isDarkMode? '':' text-gray-600 '}`}>
                    <p><span className="font-medium">Opening Stock:</span> 40</p>
                    <p><span className="font-medium">Remaining Stock:</span> 34</p>
                    <p><span className="font-medium">On the way:</span> 15</p>
                    <p><span className="font-medium">Threshold value:</span> 12</p>
                </div>
            </div>
        </div>
    );
};

export default Caracteristics;
