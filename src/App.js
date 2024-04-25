import { Home } from "./component/home/home";
import { Post } from "./component/other/post";
import { Artical } from "./component/other/artical";
import {Event} from "./component/other/event";
import {Education} from "./component/other/education";
import {Job} from "./component/other/job";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserDashboard } from "./component/userDashboard/userDashboard";
import { Fpassword } from "./component/f_password/f_password";
// import './App.css';

function App() {
  return (
    <div className="App" style={{ height: "800px" }}>
      {/* <Post /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Post />} />
            <Route path="post" element={<Post />}/>
            <Route path="artical" element={<Artical />}/>
            <Route path="event" element={<Event />}/>
            <Route path="education" element={<Education />}/>
            <Route path="job" element={<Job />}/>
          </Route>
          <Route path="userDashboard" element={<UserDashboard />} />
          <Route path="F_password" element={<Fpassword />} />
          <Route path="*" element={<><h1>Requested Path not found.</h1></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
