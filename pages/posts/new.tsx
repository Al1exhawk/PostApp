import { Layout } from '../../components';
import styled from 'styled-components';
import React, { FormEvent, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GenericState } from '../../store';
import { CreateNewPostAction, CREATE_NEW_POST, formInputChangeAction, FORM_INPUT_CHANGE } from '../../store/new-post';
const StyledForm = styled.form`
    background-color: #51eaff;
    display: flex;
    flex-direction: column;
    maargin: auto;
`;

interface newPost {
    title: string;
    body: string;
}

const newPost: React.FC = () => {
    const Post = useSelector((state: GenericState) => ({
        ...state.newPost.newPost,
    }));
    const dispatch = useDispatch();
    const onsubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch<CreateNewPostAction>({ type: CREATE_NEW_POST, newPost: Post });
    };
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        dispatch<formInputChangeAction>({
            type: FORM_INPUT_CHANGE,
            post: { ...Post, [name]: value },
        });
    };
    return (
        <Layout>
            <StyledForm onSubmit={onsubmit}>
                <input type='text' name='title' required value={Post.title} onChange={onChange} />
                <input type='text' name='body' required value={Post.body} onChange={onChange} />
                <button>Add</button>
            </StyledForm>
        </Layout>
    );
};

export default newPost;
