import { Navbar } from "./components/Navbar";
import BlogLauout from "./pages/Blog/BlogLayout";
import { Route, Routes } from "react-router-dom";
import Post from "./pages/Blog/Posts";
import PostDetails from "./pages/Blog/PostDetails";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="blog" element={<BlogLauout />}>
          <Route index element={<Post />} />
          <Route path=":PostId" element={<PostDetails />} />
          <Route />

          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/dashboard" element={<Dashboardlayout />} />
          <Route path="/settings" element={<SettingsLayout />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
