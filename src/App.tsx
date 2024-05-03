import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { SignUp } from './components/Form/SignUp'
import { Login } from './components/Form/Login'
import { ResetPassword } from './components/Form/ResetPassword'

function App() {

  return (
    <div className=''>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/LoginPage' element={<Login />} />
          <Route path='/SignupPage' element={<SignUp />} />
          <Route path='/ResetPage' element={<ResetPassword />} />
        </Routes> 
      </Router>
    </div>
  )
}

export default App
