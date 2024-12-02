import { IDialogMini } from "../../types";

export const sortList = (list: IDialogMini[]): IDialogMini[] => {
    return list.sort((a, b) => {
        if (a.gpt_enabled === b.gpt_enabled) return 0;
        return a.gpt_enabled ? 1 : -1;
    });
}

export const truncate = (str: string, maxlength: number) => {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}