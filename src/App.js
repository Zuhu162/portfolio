import "./App.css";
import Jumbo from "./components/jumbo";
import About from "./components/about";
import Projects from "./components/projects";
import Floater from "./components/floater";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Floater></Floater>
      <Jumbo></Jumbo>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
