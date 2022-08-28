import './Sidebar.css'
import exchange from '../../assets/exchange.png'
import market from '../../assets/market.png'
import transict from '../../assets/transict.png'
import overview from '../../assets/overview.png'
import wallet from '../../assets/wallet.png'
import cir from '../../assets/cir.png'
import logout from '../../assets/logout.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    function tabAction(e){
        e.target.className += ' active'
        let link = document.querySelectorAll('.li')
        link.forEach(li => {
            li.onclick = () => {
                link.forEach(element => {
                    element.classList.remove('active')
                });
                li.classList.add('active')
            }
        });
    }

    return (
        <div className="sidebar">
            <div className="top">
                <h2>VALUET</h2>
                <div className="underline"></div>
                <div className="center">
                    <ul>
                        <Link onClick={tabAction} to="/app/overview" className='li'><img src={overview} alt="" />Overview</Link>
                        <Link onClick={tabAction} className='li' to="/app/wallet"><img src={wallet} alt="" /> Wallets</Link>
                        <Link onClick={tabAction} to="/app/transictions" className='li'><img src={transict} alt="" />Transictions</Link>
                        <Link onClick={tabAction} to="/app/exchange" className='li'><img src={exchange} alt="" />Exchange</Link>
                        <Link onClick={tabAction} to="/app/market" className='li'><img src={market} alt="" />Market</Link>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <div className="line"></div>
                <ul>
                    <li><img src={cir} alt="" /> Mike Jackson</li>
                    <li><img src={logout} alt="" /> Log out</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
