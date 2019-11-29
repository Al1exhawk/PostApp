import { Layout } from "../../components"
import styled from "styled-components"
import React, { FormEvent, ChangeEvent } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Post } from '../../models'
const StyledForm = styled.form`
    background-color: #51EAFF;
    display: flex;
    flex-direction: column;
    maargin: auto;
`

interface newPost {
    title: string,
    body: string
}

const newPost: React.FC = () => {
    const [newPost, setValue] = React.useState<newPost>({ title: '', body: '' });

    const onsubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const serverResponse = await axios.post<newPost, AxiosResponse<Post>>('https://simple-blog-api.crew.red/posts', newPost, { responseType: 'json' });

    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setValue(({
            ...newPost, [name]: value
        }));
    }
    return (
        <Layout>
            <StyledForm onSubmit={onsubmit}>
                <input type="text" name='title' required value={newPost.title} onChange={onChange} />
                <input type="text" name='body' required value={newPost.body} onChange={onChange} />
                <button>Add</button>
            </StyledForm>
        </Layout>
    )
}

export default newPost;