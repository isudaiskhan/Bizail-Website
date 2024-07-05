import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
   <>


      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
      </Routes>
 

   </>
  );
}

export default App;
