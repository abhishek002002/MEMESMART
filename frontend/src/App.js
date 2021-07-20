import React ,{ Fragment } from "react";
import './App.css';


//components

import Inputmeme from "./components/inputememe";
import Listmemes from "./components/listmemes";
import Footer from "./components/footer";
function App() {
  return (
  <Fragment>
    <Inputmeme/>
    <Listmemes/>
    <Footer/>
  </Fragment>
  );
}

export default App;
 