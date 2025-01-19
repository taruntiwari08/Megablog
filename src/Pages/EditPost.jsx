import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import appwriteService from '../appwrite/configure';
import { Container, Postform } from '../Components'
function EditPost() {
    // State variable to store post data
    const [Post, setPost] = useState(null);

    // Get slug parameter from URL
    const { slug } = useParams();


    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
           
            appwriteService.getPost(slug)
                .then((Post) => {
                    if (Post) {
                        setPost(Post);
                       
                    }
                });
        } else {
            navigate('/');
        }
    }, [slug, navigate]); 

    // Render PostForm component if post exists, otherwise render nothing
    return Post ? (
        <div className=' py-8 '>
            <Container>
                <Postform post={Post} />
            </Container>
        </div>
    ) : null;
}

export default EditPost;