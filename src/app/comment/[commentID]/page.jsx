import React from 'react';

const CommentDetailsPage = async({params}) => {
    const {commentID}=await params;
    const res =await fetch (`https://jsonplaceholder.typicode.com/todos/${commentID}`)
    const comment=await res.json();
    return (
        <div>
           <h2>Comment details: </h2>
           <p>id:{comment.id}</p>
           <p>title:{comment.title}</p>
           {/* <p>Completed:{comment.completed}</p> */}
           <p></p> 
        </div>
    );
};

export default CommentDetailsPage;