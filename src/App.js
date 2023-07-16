import './App.css';
import Post from "./post";
import Header from "./header";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Indexpage from "./pages/Indexpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Indexpage/>}/>
      <Route path={'/login'} element={ <div>login page </div> } />
      </Route>
    </Routes>
  );
}

export default App;
