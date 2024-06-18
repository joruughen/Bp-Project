import './styles/App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate } from 'react-router-dom'
import { Navbar } from './layout/Navbar'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'


function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>} />
                    <Route path="/auth/login" element={<Login/>} />
                    <Route path="/auth/register" element={<Register/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>

    );
}


export default App;
