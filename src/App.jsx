import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Main from './components/Main/Main';
import Overview from './components/Overview/Overview';
import Tranz from './components/Tranz/Tranz';
import Exchange from './components/Exchange/Exchange';
import Market from './components/Market/Market';
import Wallet from './components/Wallet/Wallet'
import { AuthContext } from "./AuthContext";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState({})

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/app' element={<Main />}>
              <Route path="/app/wallet" element={<Wallet />} />
              <Route path="/app/overview" element={<Overview />} />
              <Route index element={<Overview />} />
              <Route path="/app/transictions" element={<Tranz />} />
              <Route path="/app/exchange" element={<Exchange />} />
              <Route path="/app/market" element={<Market />} />
            </Route>
            <Route index element={<WelcomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  )
}

export default App;