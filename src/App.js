//denote functions by caps  =>COMPONENT
import "./App.css"
import Herosection from './components/herosection';
import Navbar from "./components/navbar";
const App=()=>{
  return <div>
    <Navbar></Navbar>
    <Herosection></Herosection>

  </div>;

};

//default export(outside of the folder)
export default App;


