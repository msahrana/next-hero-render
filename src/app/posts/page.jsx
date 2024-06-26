import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Posts",
  description: "Posts Page",
};

const getPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const data = await res.json();
  return data;
};

const PostPage = async () => {
  const postsData = await getPosts();

  return (
    <div className="h-screen px-5">
      <h1 className="text-4xl font-bold my-5 text-center">All Posts:</h1>
      <div className="grid grid-cols-4 gap-5">
        {postsData?.slice(0, 10).map(({id, title, body}) => (
          <div key={id} className="border-2 p-4 rounded">
            <h2>
              <span className="font-bold">Title:</span> {title}
            </h2>
            <p>
              <span className="font-bold">Description:</span> {body}
            </p>
            <button className="bg-red-500 px-4 py-2 rounded">
              <Link href={`/posts/${id}`}>See Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
