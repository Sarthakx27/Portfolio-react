import React from "react"
import Loader from "./Components/Loader"
import Homepage from "./Components/Homepage";
import Header from "./Components/Header";
import "./styles/style.css";

function App() {

  return (
    <>
     <Loader />
     <Header />
     <Homepage />
    </>
  )
}

export default App;
