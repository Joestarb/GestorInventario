import React, { useState } from 'react';
import DynamicTable from '../../../components/DynamicTable';
import WhiteCard from '../../../components/WhiteCard';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import Modal from '../../../components/Modal';
import { useParams } from 'react-router-dom';

const CategoryDetail: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const { categoryName } = useParams<{ categoryName: string }>();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [formValues, setFormValues] = useState<Record<string, string>>({});

    const categoryDetails = [
        { category: 'xd', companyid: '1', action: '' },
        { category: 'a', companyid: '2', action: '' },
    ];
    const headers = [...(['category', 'companyid', 'action'] as const)];

    const buttonText = categoryName
        ? `Agregar ${decodeURIComponent(categoryName)}`
        : 'Add Category';

    const options = [
        { value: 'option1', label: 'create' },
        { value: 'option2', label: 'update' },
        { value: 'option3', label: 'delete' },
    ];

    // Función para definir campos dinámicos
    const getFieldsForCategory = (categoryName: string | undefined) => {
        if (!categoryName) return [];

        const commonFields = [
            { name: 'nombre', label: 'Nombre', type: 'text' },
            {
                name: 'compania',
                label: 'Compañía',
                type: 'select',
                options: [
                    { value: '1', label: 'Compañía 1' },
                    { value: '2', label: 'Compañía 2' },
                ],
            },
        ];

        if (categoryName === 'Tipos de movimiento') {
            return [
                ...commonFields,
                {
                    name: 'clasificacion',
                    label: 'Clasificación',
                    type: 'select',
                    options: [
                        { value: 'tipo1', label: 'Tipo 1' },
                        { value: 'tipo2', label: 'Tipo 2' },
                    ],
                },
            ];
        }

        return commonFields;
    };

    // Manejo de cambios en el formulario
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({...prevValues, [name]: value,}));
    };

    const renderRow = (category: any) => (
        <tr className="border-b" key={category.category}>
            <td className={`px-6 py-4 font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                {category.category}
            </td>
            <td className={`px-6 py-4 font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                {category.companyid}
            </td>
            <td className="px-2 py-2 text-center">
                <div className="flex gap-2 justify-start">
                    <button className={`bg-transparent text-xs border border-gray-200 font-bold uppercase p-2 rounded hover:bg-blue-500 hover:text-white transition-colors ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`} type="button">
                        Edit
                    </button>
                    <button className={`bg-transparent text-xs border border-gray-200 font-bold uppercase p-2 rounded hover:bg-red-500 hover:text-white transition-colors ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`} type="button">
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );

    return (
        <>
            <WhiteCard
                title={decodeURIComponent(categoryName || 'Category')}
                isDarkMode={isDarkMode}
                children={
                    <>
                        <div className="flex w-full justify-end gap-8">
                            <Button onClick={() => setIsModalOpen(true)}>
                                <p>{buttonText}</p>
                            </Button>
                            <Select
                                options={options}
                                value={selectedValue}
                                onChange={setSelectedValue}
                                placeholder="Filters"
                            />
                        </div>
                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            title={`Nuevo ${decodeURIComponent(categoryName || '')}`}
                        >
                            <form 
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    console.log('Formulario enviado:', formValues);
                                }}
                            >
                                {getFieldsForCategory(categoryName).map(
                                    (field) => (
                                        <div key={field.name} className="mb-4">
                                            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`} htmlFor={field.name}>
                                                {field.label}
                                            </label>
                                            {field.type === 'text' && (
                                                <input
                                                    id={field.name}
                                                    name={field.name}
                                                    type="text"
                                                    value={formValues[field.name] || ''}
                                                    onChange={handleInputChange}
                                                    className={`block w-full p-2 border rounded ${isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-800'}`}
                                                />
                                            )}
                                            {field.type === 'select' && (
                                                <select
                                                    id={field.name}
                                                    name={field.name}
                                                    value={formValues[field.name] || ''}
                                                    onChange={handleInputChange}
                                                    className={`block w-full p-2 border rounded ${isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-800'}`}
                                                >
                                                    {field.options?.map(
                                                        (option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            )}
                                        </div>
                                    )
                                )}
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Guardar
                                </button>
                            </form>
                        </Modal>
                        <div className="overflow-auto">
                            <DynamicTable data={categoryDetails} headers={headers} renderRow={renderRow}/>
                        </div>
                    </>
                }
            />
        </>
    );
};

export default CategoryDetail;