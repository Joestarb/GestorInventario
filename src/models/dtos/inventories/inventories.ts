export interface InventoryProduct {
    id_inventory_product: number;
    name_product: string;
    stock_product: number;
    price_product: number;
    name_category_product: string;
    name_state: string;
    name_movement_type: string;
    name_supplier: string;
    name_department: string;
    name_module: string;
    name_company: string;
    date_insert: string; // Puedes usar string | null si las fechas son opcionalmente vacías
    date_update: string;
    date_delete: string;
    date_restore: string;
}

export interface PostProduct extends Omit<InventoryProduct, 'id_inventory_product' | 'name_category_product' | 'name_state' | 'name_movement_type' | 'name_supplier' | 'name_department' | 'name_module' | 'name_company' | 'date_insert' | 'date_update' | 'date_delete' | 'date_restore'> {
    id_category_product_Id: number;
    id_state_Id: number;
    id_movement_type_Id: number;
    id_supplier_Id: number;
    id_department_Id: number;
    id_module_Id: number;
    id_company_Id: number;
}

export interface InventoryMovement {
    id_inventory_movement: number;
    name_inventory_product: string;
    amount_modify: number;
    name_category_product: string;
    name_department: string;
    name_supplier: string;
    name_movement_type: string;
    name_module: string;
    name_company: string;
    date_insert: string;
    date_update: string;
    date_delete: string;
    date_restore: string;
}

export interface InventoryMovementResponse {
    success: boolean;
    message: string;
}
