import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './dialog.css';
import DialogItem from './DialogItem';
import { IDialogData } from '../../types';
import ApiService from '../../requests/API';

function Dialog({ dialogData, setLoading }: { dialogData: IDialogData | null, setLoading: Dispatch<SetStateAction<boolean>> }) {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setChecked(dialogData?.gpt_enabled || false)
    }, [dialogData])

    const cangeAi = async (check: boolean) => {
        setChecked(check)
        await ApiService.changeAi(check, dialogData?.instagram_id)
        setLoading(true)
    };

    return (
        <div className="dialog-content">
            {dialogData && dialogData.user_dialogue.length && <div className="switch-container">
                <label className="switch">
                    <input type="checkbox" checked={checked} onChange={() => cangeAi(!checked)} />
                    <span className="slider"></span>
                </label>
            </div>}
            <h2>Полный Диалог</h2>
            <div className="dialogs-root-wrapper">
                {dialogData && dialogData.user_dialogue.length
                    ? <ul className='dialogs-wrapper'>{dialogData.user_dialogue.map((message, i) => <DialogItem message={message} key={i} />)}</ul>
                    : <p>Выберите диалог из списка, чтобы увидеть его полное содержание.</p>}
            </div>
        </div>
    );
}

export default Dialog;