import React, { useEffect, useState } from 'react';
import { Container, PostCard } from '../Components';
import { useNavigate } from 'react-router-dom';
import appwriteService from '../appwrite/configure';

function Home() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        appwriteService.getPosts([]) 
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            });
    }, []);

    const [text, setText] = useState('');
    const fullText = "Login to See and Create Posts";

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex === fullText.length) {
                clearInterval(intervalId);
            } else {
                setText(fullText.substring(0, currentIndex + 1));
                currentIndex++;
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="md:text-7xl text-4xl font-bold hover:text-gray-500 mb-52 mt-16">
                                {text}
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    } else {
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='md:flex flex-row md:flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 lg:w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;
