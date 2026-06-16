import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Logo from './components/Logo'
import Login from './pages/Login'
import WelcomeDashboard from './pages/WelcomeDashboard'
import Vehicles from './pages/vehicles'
function App() {
  return (
    <Routes>
      <Route path="/" elemet={<Layout />}>
        <Route index element={<Logo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcomedashboard" element={<WelcomeDashboard />} />
          <Route path="/vehicles" element={<Vehicles />} />

      </Route>
    </Routes>
  )
}

export default App