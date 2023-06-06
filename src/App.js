import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const router = useLocation();
  console.log(router.pathname);
  useEffect(() => {
    // if (true) {
    //   navigate('/login')
    // }
  }, [])

  return (

    <div className="flex items-center justify-end">
      <div className=' h-screen overflow-y-scroll w-[83.5%]  relative'>
        {(router.pathname !== '/login') && (router.pathname !== '/signup') && <SideBar />}
        <div className='mx-2'>

          {(router.pathname !== '/login') && (router.pathname !== '/signup') && <h1 className='text-5xl font-semibold my-5'>Matti Ullah</h1>}
        </div>

        <Routes>

          <Route exat path='/' element={<Home />} />
          <Route path='/myday' element={<MyDay />} />
          <Route path='/important' element={<Important />} />
          <Route path='/planed' element={<Planed />} />
          <Route path='/alltask' element={<AllTask />} />
          <Route path='/completed' element={<Completed />} />
          <Route path='/assigntome' element={<AssignedToMe />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        {(router.pathname !== '/login') && (router.pathname !== '/signup') && <Footer />}
      </div>
    </div>

  );
}

export default App;
