export interface Product {
    id: string;
    data: {
        type: string;
        name: string;
        lastdate: string;
        cost: number;
    },
    expiry: {
        date: string;
        count: number;
    }[]
    reason?: string;
    comment?: string;
}

export interface MultiBrandProduct {
    id: string;
    data: {
        type: string;
        name: string;
        lastdate: string;
    },
    reason?: string;
    comment?: string;
    brands: {
        id: string;
        name: string;
        description: string;
        cost: number;
        expiry: {
            date: string;
            count: number
        }[];

    }[]
}
