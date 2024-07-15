export interface ScanProduct {
    id: number;
    name: string
}

export type Row = {
    id: number;
    qty: number;
    warehouse: string;
    expiryDate: string;
    [key: string]: string | number;
};
