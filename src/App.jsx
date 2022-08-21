import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
// import WelcomePage from './components/WelcomePage/WelcomePage';
import Overview from './components/Overview/Overview';
import Wallet from './components/Wallet/Wallet';
import Tranz from './components/Tranz/Tranz';
import Header from './components/Header/Header';
import bitcoin_icon from './assets/bitcoin_icon.png'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="cont">
        <Header />
        {/* <Overview /> */}
        {/* <Wallet /> */}
        {/* <Tranz /> */}
        <div className="exchange">
          <h4>Exchange</h4>
          <div className="currency">
            <div className="from">
              <span>From</span>
              <div className="sel">
                <select value='Ethereum'>
                  <option value="Ethereum">Ethereum</option>
                  <option value="GridCoin">GridCoin</option>
                  <option value="PeerCoin">PeerCoin</option>
                </select>
                <img src={bitcoin_icon} alt="" />
              </div>
              <div className="inp">
                <input type="number" />
                <span>ETH</span>
              </div>
            </div>
            <div className="from">
              <span>To</span>
              <div className="sel">
                <select value='Ethereum'>
                  <option value="Bitcoin">Bitcoin</option>
                  <option value="GridCoin">GridCoin</option>
                  <option value="PeerCoin">PeerCoin</option>
                </select>
                <img src={bitcoin_icon} alt="" />
              </div>
              <div className="inp">
                <input type="number" />
                <span>BTC</span>
              </div>
            </div>
          </div>
          <div className="box_from_to">
            <h2>from</h2>
            <h2>==========></h2>
            <h2>to</h2> 
          </div>
          <button className='exchange_btn'>Exchange</button>
        </div>
      </div>
    </div>
  )
}

export default App;
