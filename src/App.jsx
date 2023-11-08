import React from "react"
import Background from "./Components/Background";
import Loader from "./Components/Loader"
import Homepage from "./Components/Homepage";
import "./styles/style.css";

function App() {

  return (
    <div className="">
     <Homepage />
     {/**<Loader /> */}
     <Background />
    </div>
  )
}

export default App;
