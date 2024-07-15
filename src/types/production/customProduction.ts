export interface CustomProdProduct {
    id: string;
    image: string;
    type: string;
    name: string;
    lastdate: string;
    quantity: string;
    qtyOnhand: string;
    qtyKg : string ;
    reason : string ;
    expiryDate:string , 
    ingredient: {
        id: string;
        name: string;
        weight: string;
        specification:string;
        qtyOnhand:string;
    }[];

}

export type customproductionArr = (CustomProdProduct)[]