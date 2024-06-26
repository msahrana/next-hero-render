import React from "react";

const getSinglePage = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

export const generateMetadata = async ({params}) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const postData = await res.json();

  return {
    title: {
      absolute: `${postData.title}`,
    },
    description: postData.body,
    keywords: postData.body.split(" "),
  };
};

const PostDetailsPage = async ({params}) => {
  const postDetails = await getSinglePage(params.id);
  const {title, body} = postDetails || {};

  return (
    <div className="text-center rounded h-screen mt-10 mx-40">
      <h1>
        <span className="font-bold">Title:</span> {title}
      </h1>
      <p className="mt-3">
        <span className="font-bold">Description:</span> {body}
      </p>
    </div>
  );
};

export default PostDetailsPage;
