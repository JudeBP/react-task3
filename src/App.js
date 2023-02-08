import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Employees from './Employees';
function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Employees />
      </header>
    </div>
  );
}

export default App;
