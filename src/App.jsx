import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Logo from './components/Logo'
import Login from './pages/Login'
// import WelcomeDashboard from './pages/WelcomeDashboard'
// import Vehicles from './pages/vehicles'
import OtpVerify from './pages/OtpVerify'
import ScanQr from './pages/ScanQR'
import AgentDetails from './pages/AgentDetails'
import QrProgress from './pages/QrProgress'
function App() {
  return (
    <Routes className="bg-black">
      <Route path="/" element={<Layout />}>
        <Route index element={<Logo />} />
        <Route path="/login" element={<Login />} />
        <Route path='/otpverify' element={<OtpVerify />} />
         <Route path='/agentdetails' element={<AgentDetails />} />
        <Route path='/scanqr' element={<ScanQr />} />
         <Route path='/qrprogress' element={<QrProgress />} />
         {/* <Route path="/welcomedashboard" element={<WelcomeDashboard />} />
        <Route path="/vehicles" element={<Vehicles />} /> */}
      </Route>
    </Routes>
  )
}

export default App