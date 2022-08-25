import React from 'react'
import Overview from '../../components/Overview/Overview';
import Tranz from '../../components/Tranz/Tranz';
import Header from '../../components/Header/Header';
import Exchange from '../../components/Exchange/Exchange';
import Market from '../../components/Market/Market';
import Sidebar from '../../components/Sidebar/Sidebar'
import Wallet from '../../components/Wallet/Wallet'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Sidebar />
            <div className="cont">
                <Header />
                <Routes>
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/overview" element={<Overview />} />
                    <Route index element={<Overview />} />
                    <Route path="/transictions" element={<Tranz />} />
                    <Route path="/exchange" element={<Exchange />} />
                    <Route path="/market" element={<Market />} />
                </Routes>
            </div>
        </>
    )
}

export default Main