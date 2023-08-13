import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { Link } from "react-router-dom";

function ViewPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    firestore
      .collection("posts")
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log(posts);
        setPosts(posts);
      });
  }, []);

  return (
    <>
      <h1 className="text-center text-black text-[3rem] font-semibold font-mono m-8">View Post</h1>
      {posts.map((post, index) => (
        <div className="post w-1/2 m-auto" key={`post-${index}`}>
          <Link
            to={`/post/${post.id}`}
            className="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-4"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {post.title}
            </h5>
            <p class="font-normal text-gray-700">
              {post.subtitle}
            </p>
          </Link>
        </div>
      ))}
    </>
  );
}

export default ViewPost;
