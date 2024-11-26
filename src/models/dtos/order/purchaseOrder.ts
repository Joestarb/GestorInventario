export interface purchaseOrder {
    id_purchase_order: number;
    name_purchase_order: string;
    amount_purchase_order: number;
    unit_price_product: number;
    total_price_products:number;
    name_user: string;
    name_category_purchase_order: string;
    name_department: string;
    name_supplier: string;
    name_state: string;
    name_movement_type: string;
    name_module: string;
    name_company: string; 
    date_insert: string;
    date_update: string;
    date_delete: string;
    date_restore: string;
    products: {
        id_inventory_product: number;
        quantity: number;
        unit_price: number;
        name_inventory_product: string;
    }[];
}

export interface PostPurchaseOrder {
    name_purchase_order: string;
    id_user_Id: number;
    id_category_purchase_order_Id: number;
    id_department_Id: number;
    id_supplier_Id: number;
    id_state_Id: number;
    products: {
        quantity: number;
        id_inventory_product_Id: number;
    }[];
}
