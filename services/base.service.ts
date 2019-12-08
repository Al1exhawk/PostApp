import axios, { AxiosInstance } from 'axios';

export abstract class BaseService {
    protected readonly axiosInstance: AxiosInstance;
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'https://simple-blog-api.crew.red',
            responseType: 'json',
        });
    }
}
