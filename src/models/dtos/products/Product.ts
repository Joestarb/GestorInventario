import {InventoryProduct, PostProduct} from "../inventories/inventories.ts";
import {useCreateInventoryProductMutation} from "../../../features/inventories/postInventoriesApi.ts";
import {useUpdateInventoryProductMutation} from "../../../features/inventories/putInventoriesApi.ts";
import {useDeleteInventoryProductMutation} from "../../../features/inventories/deleteInventoriesApi.ts";

export interface ProductsProps {
    isDarkMode: boolean;
    inventories: InventoryProduct[];
    isLoading: boolean;
    error: unknown;
    createInventoryProduct: ReturnType<typeof useCreateInventoryProductMutation>[0];
    updateInventoryProduct: ReturnType<typeof useUpdateInventoryProductMutation>[0];
    deleteInventoryProduct: ReturnType<typeof useDeleteInventoryProductMutation>[0];
    handleEdit: (product: PostProduct) => void;
    handleDelete: (id: number) => void;
    formData: PostProduct;
    setFormData: React.Dispatch<React.SetStateAction<PostProduct>>;
    headers: { key: keyof InventoryProduct; label: string }[];
    inputFields: { label: string; placeholder: string; name: string }[];
    editMode: boolean;
    selectedProduct: InventoryProduct | null;
    resetForm: () => void;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleSubmit: (e: React.FormEvent) => Promise<void>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isModalOpen: boolean;
    selectedValue: string;
    setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}
