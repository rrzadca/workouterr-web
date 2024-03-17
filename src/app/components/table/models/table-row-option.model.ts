export interface TableRowOption {
    label: string;
    icon: string;
    action: (row: any) => void;
    tooltip?: string;
}
