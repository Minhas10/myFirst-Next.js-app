import Link from 'next/link';
import React from 'react';

const CommentLayout = ({children}) => {
    return (
        <div className="drawer drawer-end">
  <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {children}
    <label htmlFor="my-drawer-5" className="drawer-button btn btn-primary">Open drawer</label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      {/* Sidebar content here */}
      
      <li><Link href='/comment'>Comment</Link></li>
      <li><Link href='/dashboard'>Dashboard</Link></li>
    </ul>
  </div>
</div>
    );
};

export default CommentLayout;