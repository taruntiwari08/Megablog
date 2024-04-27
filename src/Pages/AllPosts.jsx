import React,{useState,useEffect} from 'react'
import { Container,PostCard } from '../Components/index'
import appwriteService from '../appwrite/configure';

// Component to display all posts
function AllPosts() {
  // State variable to store posts
  const [Posts, setPosts] = useState([]);

  // Effect to fetch posts from the server
  useEffect(() => {
      // Fetch posts when component mounts
      appwriteService.getPosts([]) // Assuming getPosts function returns a promise with list of posts
          .then((Posts) => {
              // If posts exist, set the posts in state
              if (Posts) setPosts(Posts.documents);   
          });
  }, []); // Dependencies for the effect

  return (
      <div className=' w-full py-8'>
          <Container>
              <div className='flex flex-wrap'>
                  {/* Map through the list of posts and render PostCard component for each post */}
                  {Posts && Posts.map((post) => {
                      return (
                          <div key={post.$id} className='p-2 w-1/4'>
                              <PostCard {...post} /> {/* Pass post data as prop to PostCard component */}
                          </div>
                      );
                  })}
              </div>
          </Container> 
      </div>
  );
}

export default AllPosts;