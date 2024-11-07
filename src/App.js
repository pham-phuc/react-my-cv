import "./App.css";
import Router from "./router";
import { Profile } from '../src/components/Profile'
import Footer from "../src/components/Footer";
import { Navbav } from "../src/components/Navbav";

function App() {
  
  return (
    <div className="App">   
      <div className="wrapper container mt-[60px] mb-0 mx-auto ">
      <div className="w-[100%] flex responsive">
        <Profile></Profile>
        <div className=" w-[75%]  px-[15px] lg-9 content-right">
          <Navbav />
          <Router></Router>
          <Footer />
        </div>
      </div>
    </div>
      
    </div>
  );
}

export default App;
