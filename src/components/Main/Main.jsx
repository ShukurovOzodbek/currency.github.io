import React from 'react'
import Overview from '../../components/Overview/Overview';
import Tranz from '../../components/Tranz/Tranz';
import Header from '../../components/Header/Header';
import Exchange from '../../components/Exchange/Exchange';
import Market from '../../components/Market/Market';
import Sidebar from '../../components/Sidebar/Sidebar'
import Wallet from '../../components/Wallet/Wallet'
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';

const Main = () => {
    const { auth } = useContext(AuthContext)

    let main = JSON.parse(localStorage.getItem('auth'))

    let a
    if(main){
        if (main.accessToken) {
            a = main.accessToken
            console.log(a);
        }
    }
    return (
        <>
            {
                a === undefined ? <h2>Ты аутификатцию сделай понял</h2> : <> <Sidebar />
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
                    </div> </>
            }
        </>
    )
}

export default Main