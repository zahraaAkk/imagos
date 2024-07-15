export interface Product {
    map(arg0: (item: any) => any): any
    id: string;
    type: string;
    name: string;
    lastdate: string;
    cost: number;
    avQty?: number;
    level?: string;
    expiry: {
        date: string;
        count: number;
        qtyType?: string;
    }[]
    reason?: string;
    comment?: string;
    remarks?: string;
}

export interface MultiBrandProduct {
    id: string;
    type: string;
    name: string;
    lastdate: string;
    avQty?: number;
    level?: string;
    reason?: string;
    comment?: string;
    remarks?: string;
    Unpacked: number;
    brands: {
        id: string;
        name: string;
        description: string;
        cost: number;
        boxSize?: number,
        canWeight?: number,
        expiry: {
            qtyType?: string;
            date: string;
            count: number
        }[];

    }[]
}

export type prodArr = (MultiBrandProduct | Product)[]

export interface AppState {
    products: prodArr;
    details: prodArr;
}