import logo from './logo.svg';
import './App.css';
const HomePage = (props)=>{
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    Hello from BetaGo          
                </h1>
            </header>
        </div>
    );
}
export default HomePage;