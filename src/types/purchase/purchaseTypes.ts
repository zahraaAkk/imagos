export type invoices = {
    invoiceId: number;
    dueDate: string;
    payment: number;
    paymentnbr: string;
    paymentpercentage: string
}
export interface PurchasedProductsType {
    id: string;
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
    qtyonhand: number,
    qtyrequested: number;
    supplierId?: number;
    unitpriceonhand: number,
    unitpricereq: number,
    qty: {
        qtyType: string;
        count: number
    }[];
}





