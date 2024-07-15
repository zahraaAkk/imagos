import { invoices, PurchasedProductsType } from "../purchase/purchaseTypes";

export type SupplierDataType = {
    id: number;
    type: string;
    name: string;
    profileimg: string;
    deliveryday: string;
    email: string;
    phone: string;
    whatsapp: string;
    invoices: invoices[];
    purchasedProducts: PurchasedProductsType[];




}