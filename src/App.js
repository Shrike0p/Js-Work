import logo from './logo.svg';
import './App.css';
import MainPage from './Component/MainPage';
import Mealinfo from './Component/Mealinfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/:mealid' element={<Mealinfo />} />
      </Routes>
  );
}

export default App;
