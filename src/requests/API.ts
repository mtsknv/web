import axios, { AxiosInstance } from 'axios';
import { IAuth, IDialogMini } from '../types';

class ApiService {
    private apiClient: AxiosInstance;

    constructor() {
        this.apiClient = axios.create({
            baseURL: 'https://mm-ai.eu/',
            timeout: 100000,
            // headers: {
            //     'Content-Type': 'application/json',
            // },
        });
    }

    // Получить список диалогов
    async getDialogs(): Promise<IDialogMini[]> {
        try {
            const response = await this.apiClient.get('sisteroom/dialogues/'); //sisteroom || test     
            console.log('ApiService===getDialogs', response);
            if (response.status === 200) {
                return response.data;
            } else {
                return []
            }
        } catch (error) {
            this.handleError(error);
            return [];
        }
    }

    async auth(username: string, password: string): Promise<IAuth | undefined> {
        try {
            const response = await this.apiClient.post('sisteroom/login/', {
                username,
                password,
            }); //sisteroom || test     
            console.log('auth-----', response);
            if (response.status === 200) {
                return response.data;
            } 
        } catch (error) {
            this.handleError(error);
        }
    }

    async getDialog(instagram_id: number): Promise<any> {
        try {
            const response = await this.apiClient.get(`sisteroom/user/${instagram_id}/dialogue/`); // sisteroom || test
            console.log('getDialog-----', response);
            if (response.status === 200) {
                return response.data;
            } else {
                return []
            }
        } catch (error) {
            this.handleError(error);
            return [];
        }
    }

    async changeAi( check: boolean, instagram_id?: number): Promise<any> {
        try {
            if (!instagram_id) {
                throw new Error('instagram_id is undefined')
            }
            const response = await this.apiClient.post(`sisteroom/user/${instagram_id}/gpt/${check ? 'enable' : 'disable'}`); // sisteroom || test   
            console.log('changeAi-----', response);
            if (response.status === 200) {
                return response.data;
            } else {
                return []
            }
        } catch (error) {
            this.handleError(error);
            return [];
        }
    }

    // Обработка ошибок
    private handleError(error: unknown): void {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
}

export default new ApiService();