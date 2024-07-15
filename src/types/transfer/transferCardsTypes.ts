import { TranslationType,Translation } from "../translationTypes";

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
    reason: string;
    availableqty: string,
}
export interface TransferCardProps {
    id: string;
    type: string;
    cardType: 'Product' | 'MultiBrandProduct';
    name: string;
    expiryDate: string[];
    lastdate: string;
    setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
    selectedItems: string[];
    updateProductsDetails: any;
    productDetails: Product
    productsDetails: (Product)[];
    isSelected?: boolean;
    selectAll: boolean;
    translation: TranslationType[];
    language: string;
    index: number;
    setProductsDetails: (value: (Product)[]) => void;
    reason: string;
    availableqty: number;
    setReason: React.Dispatch<React.SetStateAction<string>>;
}
