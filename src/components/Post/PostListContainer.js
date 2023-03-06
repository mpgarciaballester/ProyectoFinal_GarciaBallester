import { useState, useEffect } from 'react';
import Post from './Post';

const PostListContainer = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(res => {
            setPosts(res)
        });
    }, []);

    console.log(posts)
    
    return (
        <div>
           {posts.map((post) => (
            <Post key={post.id} post={post} />
           ))}
        </div>
    )
};

export default PostListContainer;