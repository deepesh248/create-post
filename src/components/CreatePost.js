import useInputForm from "../hooks";
import {firestore} from '../firebase';

function CreatePost() {

  const title = useInputForm('');
  const subtitle = useInputForm('');
  const content = useInputForm('');
  
  function handleSubmit(e){
    e.preventDefault();
    firestore.collection('posts').add({
      title : title.value,
      subtitle : subtitle.value,
      content : content.value,
      createdAt : new Date()
    })
  }
  return (
    <>
      <h1 className="text-center text-black text-[3rem] font-semibold font-mono m-8">Create Post</h1>
      <form className="container w-1/2 m-auto mt-5" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            value={title.value}
            onChange={title.onchange}
            type="text"
            name="title"
            id="title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            value={subtitle.value}
            onChange={subtitle.onchange}
            type="text"
            name="subtitle"
            id="subtitle"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="subtitle"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Subtitle
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <label htmlFor="content" className="text-gray-600">
            Content
          </label>
          <textarea
            value={content.value}
            onChange={content.onchange}
            id="content"
            rows="10"
            className=" resize-none block p-2.5 mt-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Create post
        </button>
      </form>
    </>
  );
}
export default CreatePost;
