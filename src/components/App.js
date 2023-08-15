import CreatePost from "./CreatePost";
import ViewPost from "./ViewPost";
import {Routes,Route} from 'react-router-dom';
import Navbar from "./Navbar";
import PostDetail from "./PostDetail";
import Home from "./Home";
import About from "./About";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/CreatePost" Component={CreatePost}/>
      <Route path="/ViewPost" Component={ViewPost}/>
      <Route path="/post/:postId" Component={PostDetail}/>
      <Route path="/About" Component={About}/>
    </Routes>
    </>
  );
}

export default App;