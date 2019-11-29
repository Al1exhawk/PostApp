import { GenericState, fetchExactPost } from "../store"
import { connect } from "react-redux";
import React from 'react'
type Props = ReturnType<typeof mapStateToProps> & { fetchExactPost: Function, id: string }


const ExactPost: React.FC<Props> = (props) => {

    React.useEffect(() => {
        if (props.id) {
            props.fetchExactPost(props.id);
        }
    }, [])

    return (
        <div>

            {props.post &&
                <>  <h4>{props.post.id}</h4>
                    <p><strong>Title: </strong>{props.post.title}</p>
                    <p>{props.post.body}</p>
                    {props.post.comments.map((comment) => {
                        return <p>{comment.body}</p>
                    })}
                </>}
        </div>
    )
}

const mapStateToProps = (state: GenericState) => ({
    post: state.exactPost.post,
    isFetching: state.exactPost.isFetching,
    error: state.exactPost.error
})

const mapDispatchToProps = {
    fetchExactPost
}

export default connect(mapStateToProps, mapDispatchToProps)(ExactPost);