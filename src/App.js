import logo from './logo.svg';
import Navbar from './Navbar';
import './App.css'
import HomeScreen from './Home';
function App() {
  return (
    <div style={{heigth:"100%", width:"100%", backgroundColor:'#f6f6f6', flexDirection:'column', display:'flex'}} >
     <Navbar style={{flex: 2/10}} />
     <HomeScreen style={{flex: 8/10}} />
    </div>
  );
}

export default App;
