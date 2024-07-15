export interface Products {
    id: string;
    type: string;
    name: string;
    lastdate: string;
    quantity: number;
    Unpacked: number;
    availableqty: string;
    image: string;
    weight: number;
    expiry: {

        date: string;
        count: number;
    }[]

}

export interface BrandProduct {
    id: string;
    type: string;
    name: string;
    image: string;
    lastdate: string;
    Unpacked: number;
    prodbrands: {
        id: string;
        name: string;
        description: string;
        quantity: number;
        cost: number;
        availableqty: string;
        qty: { type: string, count: number }[]
        expiry: {
            qtyType :string ; 
            date: string;
            count: number
        }[];

    }[]
}





export type prodArr = (BrandProduct | Products)[]