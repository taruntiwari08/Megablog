import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import appwriteService from '../appwrite/configure';
import { Container, Postform } from '../Components'
// Component to edit a post
function EditPost() {
    // State variable to store post data
    const [Post, setPost] = useState(null);

    // Get slug parameter from URL
    const { slug } = useParams();

    // Navigate function from react-router-dom
    const navigate = useNavigate();

    // Effect to fetch post data based on slug
    useEffect(() => {
        // Fetch post data if slug exists
        if (slug) {
           
            appwriteService.getPost(slug)
                .then((Post) => {
                    // If post exists, set the post data in state
                    if (Post) {
                        setPost(Post);
                       
                    }
                });
        } else {
            // If no slug exists, navigate to home page
            navigate('/');
        }
    }, [slug, navigate]); // Dependencies for the effect

    // Render PostForm component if post exists, otherwise render nothing
    return Post ? (
        <div className=' py-8'>
            <Container>
                {/* Pass post data as prop to PostForm component */}
                <Postform post={Post} />
            </Container>
        </div>
    ) : null;
}

export default EditPost;