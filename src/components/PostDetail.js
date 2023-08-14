import { useEffect, useState } from "react";
import { db } from "../firebase";
import {doc, getDoc} from 'firebase/firestore'
import { useParams } from "react-router-dom";

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  useEffect(() => {
    const docRef = doc(db, 'posts', postId);
    getDoc(docRef).then((doc)=>{
    setPost(doc.data());
  })
  });
  
  return (
    <>
      <div className="w-3/4 m-auto p-4 bg-white mt-10 shadow-md border-2 rounded-md">
      <div className="w-3/5 m-auto text-left text-blue-700 text-[3rem] font-serif font-medium border-l-8 border-blue-700 pl-6 mt-4">{post.title}</div>
      <div className="w-3/5 m-auto mt-14 pb-8 text-[1.3rem]">{post.content}</div>
      </div>
    </>
  );
}

export default PostDetail;
