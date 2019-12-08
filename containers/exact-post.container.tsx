import { GenericState, fetchPostAction, FETCH_POST } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

type Props = { id: string };

const ExactPost: React.FC<Props> = props => {
    const exactPost = useSelector((state: GenericState) => ({
        ...state.exactPost.post,
    }));
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch<fetchPostAction>({ type: FETCH_POST, id: props.id });
    }, []);
    return (
        <div>
            {Object.keys(exactPost).length && (
                <>
                    {' '}
                    <h4>ID: {exactPost.id}</h4>
                    <p>
                        <strong>Title: </strong>
                        {exactPost.title}
                    </p>
                    <p>{exactPost.body}</p>
                    {exactPost.comments.map(comment => {
                        return <p>{comment.body}</p>;
                    })}
                </>
            )}
        </div>
    );
};

export default ExactPost;
