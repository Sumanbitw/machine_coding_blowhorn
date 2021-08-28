import Blog from "./components/blog/Blog";
import Brand from "./components/brands/Brand";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Task from "./components/task/Task";
import Teams from "./components/teams/Teams";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Brand />
      <Task />
      <Features />
      <Teams/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
