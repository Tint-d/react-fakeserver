import { Route, Routes } from "react-router-dom";
import Blogs from "./Blogs";
import Create from "./Create";
import Detail from "./Detail";
import Edit from "./Edit";

const App = () => {
  return (
    <div className=" container mx-auto ">
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogs/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
