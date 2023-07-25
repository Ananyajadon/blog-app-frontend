import './App.css';
import Post from "./post";
import Header from "./header";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Indexpage from "./pages/Indexpage";
import Registerpage from './pages/Registerpage';
import Loginpage from "./pages/Loginpage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Indexpage/>}/>
      <Route path='/login' element={ <Loginpage/>} />
      <Route path='/register' element={<Registerpage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
