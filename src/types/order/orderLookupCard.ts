export interface NewOrderCardProps {
    id: string;
    type: string;
    name: string;
    img: string;
    availableqty: string;
    productname:string;
    lastdate: string;
    setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
    selectedItems: string[];
    updateItemsDetails: any;
    itemDetails: any;
    itemsDetails: any;
    selectAll: Boolean;
    isSelected?: boolean;

}