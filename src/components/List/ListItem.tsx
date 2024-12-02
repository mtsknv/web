import { Dispatch, SetStateAction } from 'react';
import './list.css';
import { IDialogMini } from '../../types';
import ApiService from '../../requests/API';
import { truncate } from './helper';

function ListItem({ item, setDialogData }: { item: IDialogMini, setDialogData: Dispatch<SetStateAction<any>> }) {
  const { instagram_id, last_message, username, gpt_enabled } = item

  const getDialog = async () => {
    const response = await ApiService.getDialog(instagram_id)
    setDialogData({ ...response, instagram_id })
  }


  return (
    <li onClick={getDialog} className={gpt_enabled ? 'list-item green' : 'list-item'}>
      {/* <img src={''} alt="Аватар" className="avatar" /> */}
      <div className="dialog-preview">
        <span className="dialog-title">{username}</span>
        <span className="dialog-last-message">{truncate(last_message.text, 65)}</span>  {/*65 - количество символов до ... */}
      </div>
    </li>
  )
}

export default ListItem;