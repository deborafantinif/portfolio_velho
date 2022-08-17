import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobre' element={<About/>}/>
          <Route path='/projetos' element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
