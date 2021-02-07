import './App.css';
const HomePage = (props)=>{
    return (
        <div>
            <div className="page">
                <header className="App_header"></header>
                <div className="about_container">
                    <h1 id="title">Host a party 🔥</h1>
                    <JoinForm></JoinForm>
                </div>   
            </div>
            <div className="device_access">
                <DeviceSetUp></DeviceSetUp>
            </div>
        </div>
    );
}
export default HomePage;
