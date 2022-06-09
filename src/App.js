import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        {/* <Route path="/blogs" element={<Blogs></Blogs>} /> */}
      </Routes>
    </div>
  );
}

export default App;
