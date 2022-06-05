import Topbar from "./topbar/Topbar";
import Home from "./pages/home/Home";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

const App = () => {
  return (
    <main className="App">
      {/* <Topbar /> */}
      {/* <Home /> */}
      <AddPostForm />
      <PostsList />
    </main>
  );
};

export default App;
