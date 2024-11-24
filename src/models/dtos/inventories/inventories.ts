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
    date_insert: string; // Puedes usar "string | null" si las fechas son opcionalmente vacías
    date_update: string;
    date_delete: string;
    date_restore: string;
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
