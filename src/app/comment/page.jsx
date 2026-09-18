import React from 'react';
import Link from 'next/link';
const CommentPage =async () => {
    const res= await fetch ("https://jsonplaceholder.typicode.com/todos");
    const comments=await res.json();
    return (
        <div>
            <h2>Comment number:{comments.length}</h2>
            <div className='grid grid-cols-3 gap-2'>
                {
                comments.map(comment => <div key={comment.id} className="card bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">{comment.title}</h2>
    {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
    <div className="card-actions justify-end">
      <Link href={`/comment/${comment.id}`}>F
      <button className="btn">Details</button>
      </Link>
    </div>
  </div>
</div>)
                }
            </div>
        </div>
    );
};

export default CommentPage;