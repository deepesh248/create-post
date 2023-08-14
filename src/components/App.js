import CreatePost from "./CreatePost";
import ViewPost from "./ViewPost";
import {Routes,Route} from 'react-router-dom';
import Navbar from "./Navbar";
import PostDetail from "./PostDetail";

function App() {
  
  function Temp(){
    return(
      
<a href="/" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>

    )
  }

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" Component={Temp}/>
      <Route path="/CreatePost" Component={CreatePost}/>
      <Route path="/ViewPost" Component={ViewPost}/>
      <Route path="/post/:postId" Component={PostDetail}/>
    </Routes>
    </>
  );
}

export default App;

/* import { Switch, Route } from 'react-router-dom';
import { Navbar, Home, CreatePost, PostDetail } from './';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:postId" component={PostDetail} />
        <Route exact path="/create-post" component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App; */
