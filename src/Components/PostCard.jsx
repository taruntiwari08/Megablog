import React from 'react';
import appwriteService from "../appwrite/configure";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage, author }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4 border border-black '>
                <span className='flex pl-3 text-xl font-semibold underline decoration-solid text-gray-800 mb-3'>{author}</span>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl flex-auto' />
                </div>
                <p
                    className='text-xl text-wrap overflow-wrap break-word font-bold'
                >{title}</p>
            </div>
        </Link>
    );
}

export default PostCard;
