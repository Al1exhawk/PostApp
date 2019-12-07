import { PostModel } from "../models"
import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.p`
  text-align: center;
  color: red;
  font-size: 25px;
  margin: 0;
`


const StyledStrong = styled.strong`
color: black;
`

const StyledPost = styled.section`
    margin: auto;
    margin-bottom: 3rem;
    background-color: #5199FF;
    padding: 0.5rem 0.9rem;
`


type Props = {
    post: PostModel
}

const Post: React.FC<Props> = ({ post }) => {
    return (
        <StyledPost>
            <p>Id: {post.id}</p>
            <Title><StyledStrong>Title: </StyledStrong>{post.title}</Title>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`}><a>View</a></Link>
        </StyledPost>
    )
}
export default Post;
