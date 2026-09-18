import React from 'react';
import Post from '../componants/Post';

//todo: fetch data from api instead of using static data
const blogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "John Doe",
    category: "React",
    description: "Learn the basics of React and how to build your first component.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    date: "2026-09-10",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Understanding JavaScript Functions",
    author: "Sarah Smith",
    category: "JavaScript",
    description: "A beginner-friendly guide to understanding and using functions in JavaScript.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    date: "2026-09-08",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "CSS Flexbox Made Easy",
    author: "Mike Johnson",
    category: "CSS",
    description: "Learn how CSS Flexbox works and how to create responsive layouts easily.",
    image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19",
    date: "2026-09-05",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Why Learn TypeScript?",
    author: "Emily Brown",
    category: "TypeScript",
    description: "Discover how TypeScript makes JavaScript development safer and easier.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    date: "2026-09-02",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Building Responsive Websites",
    author: "David Wilson",
    category: "Web Development",
    description: "Learn the basic techniques for creating websites that work on every screen size.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    date: "2026-08-30",
    readTime: "10 min read"
  }
];

const BlogsPage = () => {
  return (
    <div>
      <h2>Our blogs</h2>
      {blogsData.map(post => 
        <Post key={post.id} post={post} ></Post>
      )}
    </div>
  );
};

export default BlogsPage;