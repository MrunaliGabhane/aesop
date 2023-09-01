import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import TopImage from "./Components/TopImage/TopImage";
import { WarnUp } from "./Components/WarmUp/WarnUp";
import { PostPoo } from "./Components/PostPoo/PostPoo";
import { Thought } from "./Components/Thought/Thought";
import { TopNavbar } from "./Components/TopNavbar/TopNavbar";


function App() {
  return (
    <div className="App">
      <TopNavbar/>
      <Navbar />
      <TopImage />
      <WarnUp />
      <PostPoo />
      <Thought/>
    </div>
  );
}

export default App;
