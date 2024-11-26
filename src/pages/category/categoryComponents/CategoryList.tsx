import React from 'react';
import DynamicTable from '../../../components/DynamicTable';
import WhiteCard from '../../../components/WhiteCard';
import { Link } from 'react-router-dom';
import useLanguage from '../../../hooks/useLanguage';

const CategoryList: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const { translate } = useLanguage();
    
    const orders = [
        { name: translate('categorysuppliers') },
        { name: translate('categoryproducts') },
        { name: translate('categoryorders') },
        { name: translate('movementsType') },
        { name: translate('company') },
        {name : translate('clasificationMovements')},
    ];
    const headers:any = ['name'] as const;

    const renderRowActions = (row: { name: string }) => (
        <Link to={`/category/${encodeURIComponent(row.name)}`}>
            <button className="text-green-500 hover:text-red-400 font-semibold text-sm">
                {translate('viewrecord')}
            </button>
        </Link>
    );

    return (
        <WhiteCard
            title={translate('category')}
            isDarkMode={isDarkMode}
        >
            <div className="overflow-auto">
                <DynamicTable
                    data={orders}
                    headers={headers}
                    renderActions={(row) => renderRowActions(row)}
                />
            </div>
        </WhiteCard>
    );
};

export default CategoryList;