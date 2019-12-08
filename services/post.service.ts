import { BaseService } from './base.service';
import { AxiosResponse } from 'axios';
import { PostModel, NewPostModel, ExactPostModel } from '../models';

export class PostService extends BaseService {
    constructor() {
        super();
    }
    getAllPost = async () => {
        const serverResponse = await this.axiosInstance.get<null, AxiosResponse<PostModel[]>>('/posts');
        return serverResponse.data;
    };

    getExactPost = async (id: string) => {
        const serverResponse = await this.axiosInstance.get<null, AxiosResponse<ExactPostModel>>(`/posts/${id}?_embed=comments`);
        return serverResponse.data;
    };

    createNewPost = async (newPost: NewPostModel) => {
        await this.axiosInstance.post<NewPostModel, AxiosResponse<PostModel>>('/posts', newPost);
    };
}
