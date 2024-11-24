import React from 'react'
import DynamicTable from '../../../components/DynamicTable';
import WhiteCard from '../../../components/WhiteCard';
import { Link } from 'react-router-dom';

const CategoryList: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {

    const orders = [
        { name: 'Categoría Proveedores', module: 'Proveedores' },
        { name: 'Categoría Productos', module: 'Productos' },
        { name: 'Categoria Ordenes', module: 'Orden' }
    ];
    const headers = [...(['name', 'module'] as const)];

    const renderRowActions = (row: { name: string }) => (
        <Link to={`/category/${encodeURIComponent(row.name)}`}>
            <button className="text-green-500 hover:text-red-400 font-semibold text-sm">
                Ver registro
            </button>
        </Link>
    );

    return(
        <>
            <WhiteCard
                title='Category'
                isDarkMode={isDarkMode}
                children={
                    <>
                        <div className=' overflow-auto'>
                            <DynamicTable  data={orders} headers={headers} renderActions={(row) => renderRowActions(row)}/>
                        </div>
                    </>
                }
            />
        </>
    )
}

export default CategoryList