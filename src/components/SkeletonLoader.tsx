import React from "react";
import {SkeletonLoaderProps} from "../models/dtos/components/componentsProps.ts";

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ rows = 5, columns = 5 }) => {
    return (
        <div className="animate-pulse space-y-2">
            {/* Cabecera */}
            <div className="flex space-x-2">
                {Array.from({ length: columns }).map((_, index) => (
                    <div
                        key={index}
                        className="h-6 bg-gray-300 rounded w-1/5"
                    ></div>
                ))}
            </div>

            {/* Filas */}
            <div className="space-y-4">
                {Array.from({ length: rows }).map((_, rowIndex) => (
                    <div key={rowIndex} className="flex space-x-2">
                        {Array.from({ length: columns }).map((_, colIndex) => (
                            <div
                                key={colIndex}
                                className="h-6 bg-gray-200 rounded w-1/5"
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkeletonLoader;
