import { useEffect, useState } from 'react';
import './list.css';
import Dialog from '../Dialog/Dialog';
import ListItem from './ListItem';
import { IDialogMini, IDialogData } from '../../types';
import { sortList } from './helper';
import ApiService from '../../requests/API';
import Modal from '../Modal/Modal';
import { useResizeWindow } from '../../hooks/hooks';

const List = () => {
  const [list, setList] = useState<IDialogMini[]>([]);
  const [dialogData, setDialogData] = useState<IDialogData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const { myInnerWidth } = useResizeWindow()


  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    // console.log(myInnerWidth);

    if (dialogData && myInnerWidth <= 700) {
      setModalOpen(true)
    }
  }, [dialogData])


  useEffect(() => {
    const getDialogs = async () => {
      const response = await ApiService.getDialogs()
      // Обработка успешного ответа
      // console.log('getDialogs=========', response);
      setList(sortList(response));
      if (response) setLoading(false); // Завершение загрузки    
    };

    getDialogs();
  }, [loading]);

  console.log('isModalOpen@@@@@@@@@@@@@@', dialogData, dialogData?.user_dialogue.length, isModalOpen);
  return (
    <div className="list">
      <div className="sidebar">
        <h2>Список Диалогов</h2>
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          <ul>
            {error ? (
              <li>{error}</li>
            ) : (
              list.map((item, i) => (
                <ListItem key={i} item={item} setDialogData={setDialogData} />
              ))
            )}
          </ul>
        )}
      </div>

      <div className="main-modal-content">
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Dialog dialogData={dialogData} setLoading={setLoading} />
          {/* <button onClick={closeModal}>Close Modal</button> */}
        </Modal>
      </div>
      <div className="main-content">
        <Dialog dialogData={dialogData} setLoading={setLoading} />
      </div>
      {/* <ChatButton /> */}
    </div>
  );
}

export default List;