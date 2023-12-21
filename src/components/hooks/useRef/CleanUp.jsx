import React, { useEffect, useState } from "react";

function CleanUp() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let isCancelled = false;
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            
            .then((data) => {
                if (!isCancelled) {
                    setPosts(data);
                }
                console.log(data);
            });
            
        return () => {
            isCancelled = true;
        };
    },[]);

    return (
        <div>
            <h1>API</h1>
            {
            posts.length > 0 &&
                posts.map((post) => {
                    return(
                      <p> 
                        <p>{post.title} </p>
                      </p>
                    )
                })}
        </div>
    );
}
export default CleanUp;
