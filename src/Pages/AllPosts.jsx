import React,{useState,useEffect} from 'react'
import { Container,PostCard } from '../Components/index'
import appwriteService from '../appwrite/configure';


function AllPosts() {

  const [Posts, setPosts] = useState([]);


  useEffect(() => {
      
      appwriteService.getPosts([]) 
          .then((Posts) => {
       
              if (Posts) setPosts(Posts.documents);   
          });
  }, []); 

  return (
      <div className=' w-full py-8'>
          <Container>
              <div className='flex flex-wrap'>
                 
                  {Posts && Posts.map((post) => {
                      return (
                          <div key={post.$id} className='p-2 lg:w-1/4'>
                              <PostCard {...post} /> 
                          </div>
                      );
                  })}
              </div>
          </Container> 
      </div>
  );
}

export default AllPosts;