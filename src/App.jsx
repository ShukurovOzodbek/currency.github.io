import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
// import WelcomePage from './components/WelcomePage/WelcomePage';
import Overview from './components/Overview/Overview';
import Wallet from './components/Wallet/Wallet';
import Tranz from './components/Tranz/Tranz';
import Header from './components/Header/Header';
import Exchange from './components/Exchange/Exchange';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="cont">
        <Header />
        {/* <Overview /> */}
        {/* <Wallet /> */}
        {/* <Tranz /> */}
        <Exchange />
      </div>
    </div>
  )
}

export default App;
