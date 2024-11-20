import React from 'react'
import DynamicTable from '../../../components/DynamicTable';
import WhiteCard from '../../../components/WhiteCard';
import { Link } from 'react-router-dom';

const CategoryList: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {

    const orders = [
        { name: 'Categoría proveedores', module: 'Proveedores' },
        { name: 'Categoría productos', module: 'Productos' },
        { name: 'Categoria ordenes', module: 'Orden' },
        { name: 'Departamentos', module: 'Usuarios' },
        { name: 'Tipos de movimiento', module: 'Movimientos de inventario' },
        { name: 'Estados', module: 'Inventario' },
        { name: 'Posiciones', module: 'Usuarios' },
        { name: 'Compañias', module: 'Sistema' }
    ];
    const headers = [...(['name', 'module'] as const)];

    const renderRowActions = (row: { name: string }) => (
        <Link to={`/category/${encodeURIComponent(row.name)}`}>
            <button className="text-blue-500 hover:text-blue-700 font-semibold text-sm">
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