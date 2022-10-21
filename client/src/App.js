import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './pages/Home'
/** 상태는 BrowserRouter 경로는 Link */
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>test</h2>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
