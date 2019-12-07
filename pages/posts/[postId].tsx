import { useRouter } from 'next/router'
import { ExacPostConteiner } from '../../containers';
import { Layout } from '../../components';

const ExactPost: React.FC = () => {
    const router = useRouter();
    const { postId } = router.query;
    return (
        <Layout>
            <ExacPostConteiner id={Array.isArray(postId) ? postId[0] : postId} />
        </Layout>
    )
}

export default ExactPost