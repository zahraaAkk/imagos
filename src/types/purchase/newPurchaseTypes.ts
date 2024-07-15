export interface NewPurchaseType {
    id: string;
    refferenceNumber: number;
    supplierName: string;
    type: string;
    productname: string;
    price: number;
    weight: number;
    brandname: string;
    purchase: string;
    availableqty: string;
    levelstatus: string;
    lastdate: string;
    imageUrl: string;
    itemname: string;
    itemimage: string;
    itemweight: string;
    expirydate: string;
    // supplierId?: number;
    upriceonhand: number,
    upricereq: number,
    quantity: { id: string, qtyType: string, count: number, weightType: string; }[],
    costonhand: number,
    costReq: number,
    discountAED: number,
    totalPrice: number,
    finalPrice: number,
    discountPercentage: number,
    reason?: string,
    comment?: string,
    remarks?: string;
    internalRemark?: string;
    productBrands:BrandsType[]
}

export interface BrandsType {
    id: string, brandname: string, supplierName: string, favorite: boolean, deliveryDuration: string, lastPurchase: string,
    canWeight: number,cansPerBox:number, gram: string, gramAvg: string, can: string, canAvg: string, upriceonhand: number, upricereq: number,
    quantity: { qtyType: string; boxCount: number; cansCount: number; }[],
    costonhand: number, costReq: number, discountAED: number, totalPrice: number, finalPrice: number, discountPercentage: number,
}