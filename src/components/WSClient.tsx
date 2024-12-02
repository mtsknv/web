import React, { useEffect, useRef, useState } from 'react';

const WebSocketClient: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [message, setMessage] = useState<string>('');
    const ws = useRef<WebSocket | null>(null);

    useEffect(() => {
        // Создание подключения к WebSocket
        ws.current = new WebSocket('ws://mm-ai.eu/test/ws');

        // Обработчик события получения сообщения
        ws.current.onmessage = (event) => {
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };

        // Обработка ошибок
        ws.current.onerror = (error) => {
            console.error('WebSocket Error:', error);
        };

        // Очистка веб-сокет при размонтировании компонента
        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, []);

    const sendMessage = () => {
        if (ws.current && message) {
            ws.current.send(message);
            setMessage(''); // Очистка поля ввода
        }
    };

    return (
        <div>
            <h2>WebSocket Chat</h2>
            <div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Введите сообщение..."
                />
                <button onClick={sendMessage}>Отправить</button>
            </div>
            <div>
                <h3>Сообщения:</h3>
                <ul>
                    {messages.map((msg, index) => (
                        <li key={index}>{msg}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WebSocketClient;