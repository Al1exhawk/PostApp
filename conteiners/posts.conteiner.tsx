import { GenericState, fetchPosts } from "../store"
import { connect } from "react-redux";
import React from 'react'
import { APost } from "../components";
import { Post } from "../models";
type Props = ReturnType<typeof mapStateToProps> & { fetchPosts: Function }


const PostsConteiner: React.FC<Props> = (props) => {
    React.useEffect(() => {
        props.fetchPosts();
    }, [])
    return (
        <div>
            {props.posts.map((post: Post) => {
                return <APost key={post.id} post={post} />
            })}
        </div>
    )
}

const mapStateToProps = (state: GenericState) => ({
    posts: state.allPosts.posts,
    isFetching: state.allPosts.isFetching,
    error: state.allPosts.error
})

const mapDispatchToProps = {
    fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsConteiner);
