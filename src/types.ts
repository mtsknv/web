export interface IDialog {
    sender: string;
    text: string;
    timestamp: string;
}

export interface IDialogMini {
    instagram_id: number;
    last_message: IDialog;
    username: string;
    gpt_enabled: boolean;
}

export interface IDialogData {
    gpt_enabled: boolean;
    user_dialogue: IDialog[];
    instagram_id: number;
}

export interface IAuth {
    access_token: string;
    refresh_token: string;
    token_type: string;
}