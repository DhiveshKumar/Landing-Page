import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./components/Navbar" ;
import Intro from "./components/Intro";
import Features from './components/Features';
import Articles from './components/Articles';
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Intro />
      <Features />
      <Articles />
      <Footer/>
    </div>
  );
}

export default App;
