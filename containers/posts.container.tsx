import { GenericState, fetchPostsAction, FETCH_POSTS } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Post } from '../components';

const PostsConteiner: React.FC = props => {
    const posts = useSelector((state: GenericState) => [...state.allPosts.posts]);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch<fetchPostsAction>({ type: FETCH_POSTS });
    }, []);
    return (
        <div>
            {posts.map(post => {
                return <Post key={post.id} post={post} />;
            })}
        </div>
    );
};

export default PostsConteiner;
