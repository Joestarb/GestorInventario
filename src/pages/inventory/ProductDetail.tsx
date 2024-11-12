import React, { useState } from 'react';
import useTheme from '../../hooks/useTheme';
import Caracteristics from './inventoryComponents/Caracteristics';
import ProductMovements from './inventoryComponents/ProductMovements';
import SupplierDetails from './inventoryComponents/SupplierDetails';
import WhiteCard from '../../components/WhiteCard';
import Button from '../../components/Button';

const ProductDetail: React.FC = () => {
    const [option, setOption] = useState(0);
    const { isDarkMode } = useTheme();
    const voidFunc = () =>{return 0}
    return (
        <WhiteCard
            title='ProductName'
            isDarkMode={isDarkMode}
            className='my-6 mx-4'
            children={
                <>
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-xl font-semibold"></h1>
                            <div className="flex gap-2">
                                <Button onClick={voidFunc} className="px-4 py-2 text-sm font-medium rounded">
                                    Edit
                                </Button>
                                <Button onClick={voidFunc} className="px-4 py-2 text-sm font-medium rounded">
                                    Download
                                </Button>
                            </div>
                        </div>

                        <div className="flex   justify-evenly border-b">
                            <button onClick={() => setOption(0)} className={`pb-2 px-4 text-sm font-medium ${option === 0 ? 'border-b-2 border-blue-500 text-blue-500' : ' hover:text-blue-500'}`}>
                                Características
                            </button>
                            <button onClick={() => setOption(1)} className={`pb-2 px-4 text-sm font-medium ${option === 1 ? 'border-b-2 border-blue-500 text-blue-500' : ' hover:text-blue-500'}`}>
                                Movimientos del producto
                            </button>
                            <button onClick={() => setOption(2)} className={`pb-2 px-4 text-sm font-medium ${option === 2 ? 'border-b-2 border-blue-500 text-blue-500' : ' hover:text-blue-500'}`}>
                                Detalles del proveedor
                            </button>
                        </div>

                        <div className="mt-6">
                            {option === 0 && <Caracteristics />}
                            {option === 1 && <ProductMovements />}
                            {option === 2 && <SupplierDetails />}
                        </div>

                </>
            }
        />
    );
};

export default ProductDetail;
