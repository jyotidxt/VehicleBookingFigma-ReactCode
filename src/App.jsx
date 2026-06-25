import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Logo from './components/Logo'
import Login from './pages/Login'
import OtpVerify from './pages/OtpVerify'
import ScanQr from './pages/ScanQR'
import AgentDetails from './pages/AgentDetails'
import QrProgress from './pages/QrProgress'
import DeviceDetails from './pages/DeviceDetails'
import Payment from './pages/Payment'
import PaymentSuccess from './pages/PaymentSuccess'
import KycDetails from './pages/KycDetails'
import SubmitVerfication from './pages/SubmitVerification'
import WelcomeDashboard from './pages/WelcomeDashboard'
import VehicleTracking from './pages/VehicleTracking'
import Vehicles from './pages/Vehicles'
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
        <Route path='/devicedetails' element={<DeviceDetails />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/paymentsuccess' element={<PaymentSuccess />} />
        <Route path='/kycdetails' element={<KycDetails />} />
        <Route path='/submitverification' element={<SubmitVerfication />} />
        <Route path="/welcomedashboard" element={<WelcomeDashboard />} />
         <Route path="/vehicletracking" element={<VehicleTracking />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Route>
    </Routes>
  )
}

export default App