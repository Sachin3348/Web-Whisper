import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {

  return (
    <main className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Signup />} />
        <Route path='/signup' element={<Login />} />
      </Routes>
    </main>
  )
}

export default App
