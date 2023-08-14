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
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
}

export default PostDetail;
