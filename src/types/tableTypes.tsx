export type TableColumn = {
    title: string,
    render?: (row: any, formik?: any) => any,
    key: string,
    search?: boolean,
    searchKey?: (row: any) => any,
    sort?: boolean,
    sortKey?: string,
    minWidth?: number,
    maxWidth?: number,
    align?: "left" | "center" | "right" | "justify" | "inherit",
    check?: any,
    mod?: any
    tagColor?: (row: any) => string;
}

export type TableColumns = TableColumn[]

export type TableRows = any