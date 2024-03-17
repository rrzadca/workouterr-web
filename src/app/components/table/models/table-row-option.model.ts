import { AppIconName } from '@components/icon/icons/app-icons-lib';

export interface TableRowOption {
    label: string;
    icon: AppIconName;
    action: (row: any) => void;
}
