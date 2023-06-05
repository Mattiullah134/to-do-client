import { Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './component/SideBar';
import Home from './pages/Home';
import Footer from './component/Footer';
import MyDay from './pages/MyDay';
import Important from './pages/Important';
import Planed from './pages/Planed';
import AllTask from './pages/AllTask';
import Completed from './pages/Completed';
import AssignedToMe from './pages/AssignedToMe';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className='border-red-100 border-8 h-screen w-[83.5%]  relative'>
        <div className='mx-2'>
          <h1 className='text-5xl font-semibold my-5'>Matti Ullah</h1>
        </div>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/myday' element={<MyDay />} />
          <Route path='/important' element={<Important />} />
          <Route path='/planed' element={<Planed />} />
          <Route path='/alltask' element={<AllTask />} />
          <Route path='/completed' element={<Completed />} />
          <Route path='/assigntome' element={<AssignedToMe />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
