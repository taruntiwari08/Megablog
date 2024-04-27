import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/configure";
import { Button, Container } from "../Components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

// Post component to display individual post details
export default function Post() {
    // State variables
    const [post, setPost] = useState(null); // State variable for storing post data
    const { slug } = useParams(); // Get slug parameter from URL
    const navigate = useNavigate(); // Navigate function from react-router-dom

    // Get user data from redux store
    const userData = useSelector((state) => state.auth.userData);

    // Check if current user is the author of the post
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    // Effect to fetch post data when slug changes
    useEffect(() => {
        // Fetch post data if slug exists
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                // Set post data if exists, otherwise redirect to home page
                if (post) setPost(post);
                else navigate("/");
            });
        } else {
            // Redirect to home page if no slug exists
            navigate("/");
        }
    }, [slug, navigate]); // Dependencies for the effect

    // Function to delete the post
    const deletePost = () => {
        // Delete post from database
        appwriteService.deletePost(post.$id).then((status) => {
            // If post deleted successfully
            if (status) {
                // Delete featured image associated with the post
                appwriteService.deleteFile(post.featuredImage);
                // Redirect to home page
                navigate("/");
            }
        });
    };

    // Render post details if post exists, otherwise render nothing
    return post ? (
        <div className="py-8">
            <Container>
                {/* Featured image */}
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {/* Edit and delete buttons for post author */}
                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            {/* Edit button */}
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            {/* Delete button */}
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                {/* Post title */}
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                {/* Post content */}
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null; // Render nothing if post doesn't exist
}