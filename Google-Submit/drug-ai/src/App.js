import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard';
import Login from './Component/Login';
function App() {
  return (
    <div className="App">
      {/* hello */}
      <Routes>
        <Route path="/" element={<Login/>}  ></Route>
        <Route path="/dashboard" element={<Dashboard/>}  ></Route>
      </Routes>
      
    </div>
  );
}

export default App;
