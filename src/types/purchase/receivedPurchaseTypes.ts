export interface SupplierType {
    name: string;
    img: string;
}

export interface ProductType {
    id: string;
    name: string;
    requested: number;
    received: {id:string , recCount: number }[];
    oh: number;
    img: string;
    date: {
        date: string;
        count: number;
    }[];
}

export interface ReceivingProductTypes {
    id: number;
    user: string;
    date: string;
    from: string;
    to: string;
    status: string;
    orderDate: string;
    orderPlacedDate: string;
    deliveryDate: string;
    supplier: SupplierType[];
    branch: string;
    products: ProductType[];
}
