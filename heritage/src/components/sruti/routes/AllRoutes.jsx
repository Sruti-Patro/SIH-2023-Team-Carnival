import { Routes, Route } from "react-router-dom";
// import Home from "../../../pages/sruti/Home";
import Blog from "../../../pages/sruti/Blog";
import Discover from "../../../pages/sruti/Discover";
import ViewBlog from "../../../pages/sruti/ViewBlog";
import Profile from "../../../pages/sruti/Profile";

function AllRoutes() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */}
        <Route path="/blog/:id" element={<ViewBlog />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/discover" element={<Discover />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}
export default AllRoutes;
