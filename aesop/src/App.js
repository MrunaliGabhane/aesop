import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import TopImage from "./Components/TopImage/TopImage";
import { WarnUp } from "./Components/WarmUp/WarnUp";
import { PostPoo } from "./Components/PostPoo/PostPoo";
import { Thought } from "./Components/Thought/Thought";
import { TopNavbar } from "./Components/TopNavbar/TopNavbar";
import { StoreLocator } from "./Components/StoreLocator/StoreLocator";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Navbar />
      <TopImage />
      <WarnUp />
      <StoreLocator />
      <PostPoo />
      <Thought />
      <Footer />
    </div>
  );
}

export default App;
