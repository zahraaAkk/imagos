export interface Item {
    id: string;
    data: {},
    count: number;
    countreq: number;
    qtyhand: string;
    qtyreq: string;
    // name: string;
    productName:string

}
export interface Order {
    id: number;
    type: string;
    productname: string;
    availableqty: string;
    levelstatus: string;
    lastdate: string;
    img: string;
}
