import { IDialog } from '../../types';
import  './dialog.css';

function DialogItem({message}: {message: IDialog}) {    
  const {text,sender} = message 
  return (   
    sender === 'user'
    ? <li className='item user'>{text}</li>
    : <li className='item bot'>{text}</li>
        
  );
}

export default DialogItem;