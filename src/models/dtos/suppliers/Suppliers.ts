    export interface Suppliers {
        id_supplier: number;
        name_supplier: string;
        mail_supplier: string;
        phone_supplier: number;
        suggested_price: number;
        name_category_supplier: string;
        name_module: string;
        name_company: string;
        date_insert: string;
        date_update: string;
        date_delete: string;
        date_restore: string;
}

  export interface SuppliersPostAndPut  {
        name_supplier: string;
        mail_supplier: string;
        phone_supplier: number;
        suggested_price: number;
        id_category_supplier_Id: number;
        id_module_Id: number;
        id_company_Id: number;
    }


    export interface SuppliersResponse {
        success: boolean;
        message: string;
        data: {
            id_supplier: number;
            name_supplier: string;
            mail_supplier: string;
            phone_supplier: number;
            suggested_price: number;
        };
    }


    export interface GetSuppliersProps {
        isDarkMode: boolean;
        isDeleting: boolean;
        setIsEditing:boolean;
        handleDelete: (id: number) => void;
      }
export interface EditableSupplier  {
        name_supplier: string;
        mail_supplier: string;
        phone_supplier: number;
        suggested_price: number;
        id_category_supplier_Id: number;
        id_module_Id: number;
        id_company_Id: number;
    };